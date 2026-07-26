(function attachRoll20EquipmentEnhancer(globalScope) {
  'use strict';

  const exporter = globalScope.CharacterCreatorRoll20;
  if (!exporter?.buildPayload) {
    console.error('Не удалось подключить улучшенный экспорт снаряжения: основной модуль Roll20 не найден.');
    return;
  }

  const originalBuildPayload = exporter.buildPayload.bind(exporter);

  function createRoll20Id() {
    const alphabet = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let id = '-';
    for (let index = 0; index < 19; index += 1) {
      id += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return id;
  }

  function addAttribute(payload, name, current, max = '') {
    payload.character.attribs.push({
      name,
      current: current ?? '',
      max,
      id: createRoll20Id()
    });
  }

  function addRepeatingRow(payload, section, rowId, fields) {
    Object.entries(fields).forEach(([field, current]) => {
      addAttribute(payload, `repeating_${section}_${rowId}_${field}`, current);
    });
  }

  function cleanText(value) {
    return String(value ?? '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normalizeDice(value) {
    return String(value || '')
      .toLocaleLowerCase('ru')
      .replace(/(\d*)д(\d+)/g, (_, count, size) => `${count || 1}d${size}`);
  }

  function damageTypeFromDescription(description) {
    const text = String(description || '').toLocaleLowerCase('ru');
    if (/дробящ/.test(text)) return 'дробящий';
    if (/колющ/.test(text)) return 'колющий';
    if (/рубящ/.test(text)) return 'рубящий';
    if (/огн/.test(text)) return 'огонь';
    if (/холод/.test(text)) return 'холод';
    if (/яд/.test(text)) return 'яд';
    return '';
  }

  function parseWeapon(item) {
    const description = cleanText(item.description);
    const diceSource = normalizeDice(description);
    const damageMatch = diceSource.match(/(?:^|\s)(\d+d\d+|\d+)(?=\s|,)/i);
    const damage = damageMatch?.[1] || '';
    const damageType = damageTypeFromDescription(description);
    const rangeMatch = description.match(/(?:дистанция|дальность)\s*(\d+\s*\/\s*\d+)/i);
    const range = rangeMatch ? rangeMatch[1].replace(/\s+/g, '') : '';
    const isRanged = /дальнобойное оружие/i.test(item.category) || /боеприпасы\s*\(/i.test(description);
    const isFinesse = /фехтовальн/i.test(description);
    const attackAbility = isRanged && !/метательн/i.test(description)
      ? '@{dexterity_mod}'
      : '@{strength_mod}';

    const propertyPart = description
      .replace(/^\s*(?:\d+d\d+|\d+)\s+[^,]+,?\s*/i, '')
      .trim();

    return {
      damage,
      damageType,
      range,
      properties: propertyPart,
      attackAbility,
      isFinesse,
      itemType: isRanged ? 'Ranged Weapon' : 'Melee Weapon'
    };
  }

  function parseArmor(item) {
    const description = cleanText(item.description);
    const acMatch = description.match(/КД\s*:\s*(\d+)/i);
    const ac = acMatch?.[1] || '';
    const maxDexMatch = description.match(/макс\.?\s*(\d+)/i);
    const strengthMatch = description.match(/Сила\s*:\s*(\d+)/i);
    const stealthDisadvantage = /Скрытность\s*:\s*Помеха/i.test(description);
    const category = String(item.category || '');
    const armorType = /тяж[её]л/i.test(category)
      ? 'Heavy Armor'
      : /средн/i.test(category)
        ? 'Medium Armor'
        : /л[её]гк/i.test(category)
          ? 'Light Armor'
          : /щит/i.test(category)
            ? 'Shield'
            : 'Armor';

    let acFormula = ac;
    if (/щит/i.test(category)) acFormula = '+2';
    else if (/л[её]гк/i.test(category)) acFormula = `${ac} + DEX`;
    else if (/средн/i.test(category)) acFormula = `${ac} + DEX (макс. ${maxDexMatch?.[1] || 2})`;

    const properties = [
      stealthDisadvantage ? 'Stealth Disadvantage' : '',
      strengthMatch ? 'Strength Requirement' : ''
    ].filter(Boolean).join(', ');

    const modifiers = [
      `Item Type: ${armorType}`,
      ac ? `AC: ${ac}` : '',
      stealthDisadvantage ? 'Stealth:Disadvantage' : '',
      strengthMatch ? `Strength: ${strengthMatch[1]}` : '',
      maxDexMatch ? `Max Dex: ${maxDexMatch[1]}` : ''
    ].filter(Boolean).join(', ');

    return {
      ac,
      acFormula,
      armorType,
      properties,
      modifiers,
      strengthMinimum: strengthMatch?.[1] || '',
      stealthDisadvantage
    };
  }

  function buildWeaponContent(item, weapon) {
    return [
      item.nameEn || item.name,
      item.category || '',
      cleanText(item.description),
      weapon.damage ? `Урон: ${weapon.damage}` : '',
      weapon.damageType ? `Тип урона: ${weapon.damageType}` : '',
      weapon.range ? `Дистанция: ${weapon.range}` : '',
      `Вес: ${item.weight || 0}`,
      item.sourceBook ? `Источник: ${item.sourceBook}` : ''
    ].filter(Boolean).join('\n');
  }

  function buildArmorContent(item, armor) {
    return [
      item.nameEn || item.name,
      item.category || '',
      cleanText(item.description),
      armor.acFormula ? `КД: ${armor.acFormula}` : '',
      armor.stealthDisadvantage ? 'Скрытность: Помеха' : '',
      armor.strengthMinimum ? `Минимальная Сила: ${armor.strengthMinimum}` : '',
      `Вес: ${item.weight || 0}`,
      item.sourceBook ? `Источник: ${item.sourceBook}` : ''
    ].filter(Boolean).join('\n');
  }

  function addWeapon(payload, item, quantity) {
    const inventoryRowId = createRoll20Id();
    const attackRowId = createRoll20Id();
    const weapon = parseWeapon(item);
    const itemModifiers = [
      `Item Type: ${weapon.itemType}`,
      weapon.damage ? `Damage: ${weapon.damage}` : '',
      weapon.damageType ? `Damage Type: ${weapon.damageType}` : '',
      weapon.range ? `Range: ${weapon.range}` : '',
      'Critical Range: 20'
    ].filter(Boolean).join(', ');

    addRepeatingRow(payload, 'inventory', inventoryRowId, {
      itemname: item.name,
      itemcount: String(quantity),
      itemproperties: weapon.properties,
      itemweight: String(item.weight || 0),
      itemcontent: buildWeaponContent(item, weapon),
      itemmodifiers: itemModifiers,
      hasattack: '1',
      useasresource: '0',
      itemattackid: attackRowId,
      inventorysubflag: '0',
      equipped: '0'
    });

    const damage = weapon.damage || '1d4';
    const damageType = weapon.damageType || '';
    const range = weapon.range || (weapon.itemType === 'Melee Weapon' ? '5' : '');
    const ability = weapon.attackAbility;

    addRepeatingRow(payload, 'attack', attackRowId, {
      'options-flag': '0',
      itemid: inventoryRowId,
      atkname: item.name,
      dmgbase: damage,
      dmgtype: damageType,
      atkrange: range,
      atkattr_base: ability,
      dmgattr: ability,
      atkmagic: '',
      atkdmgtype: `${damage} ${damageType}`.trim(),
      atkbonus: '+2',
      atkcritrange: '20',
      rollbase_dmg: `@{wtype}&{template:dmg} {{rname=@{atkname}}} @{atkflag} {{range=@{atkrange}}} @{dmgflag} {{dmg1=[[${damage}+@{dmgattr}]]}} {{dmg1type=${damageType}}} @{dmg2flag} {{dmg2=[[0]]}} {{dmg2type=}} @{saveflag} {{desc=@{atk_desc}}} @{hldmg} {{spelllevel=@{spelllevel}}} {{innate=@{spell_innate}}} {{globaldamage=[[0]]}} {{globaldamagetype=@{global_damage_mod_type}}} @{charname_output}`,
      rollbase_crit: `@{wtype}&{template:dmg} {{crit=1}} {{rname=@{atkname}}} @{atkflag} {{range=@{atkrange}}} @{dmgflag} {{dmg1=[[${damage}+@{dmgattr}]]}} {{dmg1type=${damageType}}} @{dmg2flag} {{dmg2=[[0]]}} {{dmg2type=}} {{crit1=[[${damage}]]}} {{crit2=[[0]]}} @{saveflag} {{desc=@{atk_desc}}} @{hldmg} {{spelllevel=@{spelllevel}}} {{innate=@{spell_innate}}} {{globaldamage=[[0]]}} {{globaldamagecrit=[[0]]}} {{globaldamagetype=@{global_damage_mod_type}}} @{charname_output}`,
      rollbase: `@{wtype}&{template:atk} {{mod=@{atkbonus}}} {{rname=[@{atkname}](~repeating_attack_attack_dmg)}} {{rnamec=[@{atkname}](~repeating_attack_attack_crit)}} {{r1=[[@{d20}cs>@{atkcritrange}+@{atkattr_base}+2[PROF]]]}} @{rtype}cs>@{atkcritrange}+@{atkattr_base}+2[PROF]]]}} {{range=@{atkrange}}} {{desc=@{atk_desc}}} {{spelllevel=@{spelllevel}}} {{innate=@{spell_innate}}} {{globalattack=@{global_attack_mod}}} @{charname_output}`
    });
  }

  function addArmor(payload, item, quantity) {
    const rowId = createRoll20Id();
    const armor = parseArmor(item);

    addRepeatingRow(payload, 'inventory', rowId, {
      itemname: item.name,
      itemcount: String(quantity),
      itemproperties: armor.properties,
      itemweight: String(item.weight || 0),
      itemcontent: buildArmorContent(item, armor),
      itemmodifiers: armor.modifiers,
      hasattack: '0',
      useasresource: '0',
      itemattackid: '',
      inventorysubflag: '0',
      equipped: '0'
    });
  }

  function addOrdinaryItem(payload, item, quantity) {
    const rowId = createRoll20Id();
    addRepeatingRow(payload, 'inventory', rowId, {
      itemname: item.name,
      itemcount: String(quantity),
      itemproperties: '',
      itemweight: String(item.weight || 0),
      itemcontent: [
        item.nameEn || '',
        item.category || '',
        cleanText(item.description),
        item.sourceBook ? `Источник: ${item.sourceBook}` : ''
      ].filter(Boolean).join('\n'),
      itemmodifiers: '',
      hasattack: '0',
      useasresource: '0',
      itemattackid: '',
      inventorysubflag: '0',
      equipped: '0'
    });
  }

  function enhanceEquipment(payload, context) {
    const { state, equipmentShopItems, EQUIPMENT_PACK_CONTENTS } = context;
    if (!payload?.character || !Array.isArray(payload.character.attribs)) return payload;

    // Основной экспорт создаёт упрощённые строки. Заменяем только инвентарь
    // и связанные с ним атаки на полноценные карточки Roll20.
    payload.character.attribs = payload.character.attribs.filter((attribute) =>
      !/^repeating_inventory_/.test(String(attribute.name || ''))
      && !/^repeating_attack_/.test(String(attribute.name || ''))
    );

    const items = equipmentShopItems || [];
    const itemById = new Map(items.map((item) => [String(item.id), item]));
    const normalizeName = (value) => cleanText(value)
      .toLocaleLowerCase('ru')
      .replace(/ё/g, 'е')
      .replace(/[()«»"']/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const itemByName = new Map();
    items.forEach((item) => {
      [item.name, item.nameEn].filter(Boolean).forEach((name) => itemByName.set(normalizeName(name), item));
    });

    const packs = EQUIPMENT_PACK_CONTENTS || {};
    function packParts(name) {
      const normalized = normalizeName(name);
      const key = Object.keys(packs).find((candidate) => {
        const normalizedCandidate = normalizeName(candidate);
        return normalized === normalizedCandidate || normalized.includes(normalizedCandidate);
      });
      return key ? packs[key] : null;
    }

    let totalWeight = 0;
    function exportItem(item, quantity) {
      if (!item) return;
      const parts = packParts(item.name);
      if (Array.isArray(parts)) {
        parts.forEach((part) => {
          const text = cleanText(part);
          const match = text.match(/^(\d+)\s+(.+)$/);
          const partQuantity = match ? Number(match[1]) : 1;
          const partName = match ? match[2] : text;
          const partItem = itemByName.get(normalizeName(partName));
          if (partItem) exportItem(partItem, partQuantity * quantity);
          else addOrdinaryItem(payload, {
            name: partName,
            nameEn: '',
            category: 'Снаряжение приключенца',
            categoryGroup: 'gear',
            weight: 0,
            description: '',
            sourceBook: ''
          }, partQuantity * quantity);
        });
        return;
      }

      totalWeight += Number(item.weight || 0) * quantity;
      if (item.categoryGroup === 'weapon') addWeapon(payload, item, quantity);
      else if (item.categoryGroup === 'armor') addArmor(payload, item, quantity);
      else addOrdinaryItem(payload, item, quantity);
    }

    for (const entry of state?.equipment?.inventory || []) {
      const item = itemById.get(String(entry.id));
      if (!item) continue;
      exportItem(item, Math.max(1, Number(entry.quantity || 1)));
    }

    const weightAttribute = payload.character.attribs.find((item) => item.name === 'weighttotal');
    if (weightAttribute) weightAttribute.current = totalWeight;
    else addAttribute(payload, 'weighttotal', totalWeight);

    return payload;
  }

  globalScope.CharacterCreatorRoll20 = Object.freeze({
    buildPayload(context) {
      const payload = originalBuildPayload(context);
      return enhanceEquipment(payload, context);
    }
  });
})(window);
