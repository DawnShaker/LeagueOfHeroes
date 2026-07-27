(function attachCharacterCreatorRoll20(globalScope) {
  'use strict';

  function buildPayload(context) {
    const {
      roll20Template,
      state,
      findSpecies,
      findVariant,
      findClass,
      findBackground,
      ALIGNMENTS,
      modifier,
      totalScore,
      getHitDieSize,
      getSpeciesSpeed,
      selectedOriginFeats,
      getEffectiveAbilities,
      normalizeEquipmentName,
      equipmentShopItems,
      abilityKeys,
      ROLL20_SKILLS,
      ROLL20_SKILL_ABILITIES,
      creatorOptions,
      getClassFeatureGroups,
      WEAPON_MASTERY_DESCRIPTIONS,
      EQUIPMENT_PACK_CONTENTS,
      getClassSpells,
      getSpellSources
    } = context;

    const payload = structuredClone(roll20Template);
    payload.schema_version = 3;
    payload.type = 'character';
    payload.character = payload.character || {};
    payload.character.oldId = '';
    payload.character.name = state.name || 'Безымянный герой';
    payload.character.avatar = '';
    payload.character.defaulttoken = '';
    payload.character.attribs = Array.isArray(payload.character.attribs)
      ? payload.character.attribs.map((attribute) => ({ ...attribute }))
      : [];
    payload.character.abilities = [];

    const species = findSpecies();
    const variant = findVariant(species);
    const characterClass = findClass();
    const background = findBackground();
    const className = characterClass?.name || characterClass?.nameEn || state.class || '';
    const roll20ClassName = characterClass?.nameEn || characterClass?.name || state.class || '';
    const baseSpeciesName = species?.name || species?.nameEn || state.species || '';
    const variantSpeciesName = variant?.name || variant?.nameEn || '';
    const speciesName = [baseSpeciesName, variantSpeciesName].filter(Boolean).join(' — ');
    const backgroundName = background?.name || background?.nameEn || state.background || '';

    const selectedSubclassId =
      state.subclass
      || state.choices?.['class:subclass']?.[0]
      || state.choices?.['subclass']?.[0]
      || '';

    const subclassRecord = Array.isArray(characterClass?.subclasses)
      ? characterClass.subclasses.find((item) =>
          String(item?.id || item?.name || '') === String(selectedSubclassId)
        )
      : null;

    const subclassName =
      subclassRecord?.nameEn
      || subclassRecord?.name
      || state.subclassName
      || selectedSubclassId
      || '';

    const creatureType = species?.type || 'Гуманоид';
    const creatureSize = state.physique.size || species?.size || '';

    const alignment = ALIGNMENTS[state.alignment] || '';
    const conModifier = modifier(totalScore('constitution'));
    const hitDieSize = getHitDieSize(characterClass);
    const maxHp = Math.max(1, hitDieSize + conModifier);
    const speed = getSpeciesSpeed(species);
    const languages = [...new Set([...(state.choices['languages:fixed'] || ['Общий']), ...(state.choices['languages:selected'] || [])])];
    const tools = [...new Set([
      ...(state.choices['background:tools'] || []),
      ...(state.choices['class:tools'] || []),
      ...(state.choices['species:tools'] || []),
      ...(state.choices['feat:tools'] || [])
    ])];
    const skills = [...new Set([
      ...(state.choices['class:skills'] || []),
      ...(state.choices['background:skills'] || []),
      ...(state.choices['species:skill'] || []),
      ...(state.choices['feat:skills'] || [])
    ])];
    const expertiseSkills = new Set(state.choices['class:expertise'] || []);
    const originFeats = selectedOriginFeats();
    const featName = originFeats.map((feat) => feat.name).join(', ');
    const speciesTraits = getEffectiveAbilities(species, variant)
      .map((item) => [item?.title, item?.description].filter(Boolean).join(': '))
      .filter(Boolean);

    function createRoll20Id() {
      // В repeating-секциях Roll20 символ "_" отделяет ID строки от имени поля.
      const alphabet = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let id = '-';
      for (let index = 0; index < 19; index += 1) {
        id += alphabet[Math.floor(Math.random() * alphabet.length)];
      }
      return id;
    }

    function upsert(name, current, max = '') {
      const normalized = current ?? '';
      const existing = payload.character.attribs.find((item) => item.name === name);
      if (existing) {
        existing.current = normalized;
        existing.max = max;
        if (!existing.id) existing.id = createRoll20Id();
      } else {
        payload.character.attribs.push({
          name,
          current: normalized,
          max,
          id: createRoll20Id()
        });
      }
    }


    function addRepeatingRow(section, fields) {
      const rowId = createRoll20Id();
      Object.entries(fields).forEach(([field, current]) => {
        payload.character.attribs.push({
          name: `repeating_${section}_${rowId}_${field}`,
          current: current ?? '',
          max: '',
          id: createRoll20Id()
        });
      });
      return rowId;
    }

    function htmlToRoll20Text(value) {
      const html = String(value ?? '');
      if (!html) return '';

      const container = document.createElement('div');
      container.innerHTML = html;

      // Roll20 не отображает HTML-таблицы внутри описаний черт. Превращаем
      // таблицу в вертикальные пары «Название поля / значение». Такой формат
      // остаётся читаемым даже в узкой колонке листа Roll20.
      container.querySelectorAll('table').forEach((table) => {
        const rows = [...table.querySelectorAll('tr')]
          .map((row) => [...row.querySelectorAll('th, td')]
            .map((cell) => String(cell.textContent || '').replace(/\s+/g, ' ').trim()))
          .filter((cells) => cells.some(Boolean));

        if (!rows.length) {
          table.remove();
          return;
        }

        const headers = rows[0];
        const bodyRows = rows.slice(1);
        const blocks = [];

        if (bodyRows.length && headers.length > 1) {
          bodyRows.forEach((cells) => {
            const pairs = [];
            headers.forEach((header, index) => {
              const value = cells[index] || '';
              if (!header && !value) return;

              if (index === 0) {
                // Первая колонка выглядит компактно: «Наследие Левистус».
                pairs.push([header, value].filter(Boolean).join(' '));
              } else {
                if (header) pairs.push(header);
                if (value) pairs.push(value);
              }
            });
            if (pairs.length) blocks.push(pairs.join('\n'));
          });
        } else {
          rows.forEach((cells) => {
            const values = cells.filter(Boolean);
            if (values.length) blocks.push(values.join('\n'));
          });
        }

        table.replaceWith(document.createTextNode(`\n${blocks.join('\n\n')}\n`));
      });

      container.querySelectorAll('br').forEach((br) => br.replaceWith(document.createTextNode('\n')));
      container.querySelectorAll('p, div, li, h1, h2, h3, h4, h5, h6').forEach((node) => {
        node.append(document.createTextNode('\n'));
      });

      return String(container.textContent || '')
        .replace(/\u00a0/g, ' ')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n[ \t]+/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]{2,}/g, ' ')
        .trim();
    }

    function stripHtml(value) {
      return htmlToRoll20Text(value).replace(/\s+/g, ' ').trim();
    }

    function abilityKeyFromRussian(value) {
      const map = {
        'Сила': 'strength', 'Ловкость': 'dexterity', 'Телосложение': 'constitution',
        'Интеллект': 'intelligence', 'Мудрость': 'wisdom', 'Харизма': 'charisma'
      };
      return map[String(value ?? '').trim()] || '';
    }

    function addTrait(name, description, source, sourceType) {
      if (!name) return;
      addRepeatingRow('traits', {
        name,
        source,
        source_type: sourceType,
        description: htmlToRoll20Text(description || ''),
        'options-flag': '0',
        display_flag: 'on'
      });
    }

    function addProficiency(type, name) {
      if (!name) return;
      addRepeatingRow('proficiencies', {
        prof_type: type,
        name,
        'options-flag': '0'
      });
    }

    function addTool(name) {
      if (!name) return;
      addRepeatingRow('tool', {
        toolname: name,
        toolattr: 'QUERY',
        toolbonus: '?{Attribute?|Strength,@{strength_mod}|Dexterity,@{dexterity_mod}|Constitution,@{constitution_mod}|Intelligence,@{intelligence_mod}|Wisdom,@{wisdom_mod}|Charisma,@{charisma_mod}}+0+@{pb}',
        toolbonus_display: '?',
        toolroll: '@{wtype}&{template:simple} {{rname=@{toolname}}} {{mod=@{toolbonus}}} {{r1=[[@{d20}+@{toolbonus}[Mods]@{pbd_safe}]]}} @{advantagetoggle}+@{toolbonus}[Mods]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}',
        toolattr_base: '?{Attribute?|Strength,@{strength_mod}|Dexterity,@{dexterity_mod}|Constitution,@{constitution_mod}|Intelligence,@{intelligence_mod}|Wisdom,@{wisdom_mod}|Charisma,@{charisma_mod}}',
        tool_mod: '0',
        'options-flag': '0'
      });
    }

    // Каждая выбранная предыстория даёт персонажу 50 зм.
    // Остальные деньги из снаряжения прибавляются ниже.
    const currencyTotals = {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: background ? 50 : 0,
      pp: 0
    };

    // Комплекты снаряжения раскрываются в отдельные предметы Roll20.
    // Само название комплекта в инвентарь не добавляется.
    const EQUIPMENT_PACKS = EQUIPMENT_PACK_CONTENTS;

    function normalizeEquipmentPackName(value) {
      return String(value ?? '')
        .toLocaleLowerCase('ru')
        .replace(/ё/g, 'е')
        .replace(/<[^>]+>/g, ' ')
        .replace(/[()«»"']/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function getEquipmentPackItems(value) {
      const normalized = normalizeEquipmentPackName(value)
        .replace(/\s*↗\s*$/g, '')
        .trim();

      if (EQUIPMENT_PACKS[normalized]) return EQUIPMENT_PACKS[normalized];

      const matchedKey = Object.keys(EQUIPMENT_PACKS).find((key) =>
        normalized === key
        || normalized.startsWith(`${key} `)
        || normalized.includes(key)
      );

      return matchedKey ? EQUIPMENT_PACKS[matchedKey] : null;
    }

    function findShopItemByDisplayName(value) {
      const normalized = normalizeEquipmentName(value)
        .replace(/^\d+\s+/, '')
        .trim();

      return equipmentShopItems.find((candidate) => {
        const candidateNames = [
          candidate.name,
          candidate.nameEn
        ].map(normalizeEquipmentName);

        return candidateNames.includes(normalized)
          || candidateNames.some((name) =>
            name
            && normalized
            && (name.includes(normalized) || normalized.includes(name))
          );
      }) || null;
    }

    function parsePackPart(value) {
      const text = stripHtml(value);
      const countMatch = text.match(/^(\d+)\s+(.+)$/);
      return {
        count: countMatch ? Math.max(1, Number(countMatch[1])) : 1,
        name: countMatch ? countMatch[2] : text
      };
    }

    function addInventoryItem(rawItem, multiplier = 1) {
      const text = stripHtml(rawItem);
      if (!text) return;

      const packItems = getEquipmentPackItems(text);
      if (Array.isArray(packItems)) {
        packItems.forEach((part) => {
          const parsed = parsePackPart(part);
          addInventoryItem(parsed.name, parsed.count * Math.max(1, Number(multiplier) || 1));
        });
        return;
      }

      // Деньги Roll20 хранит в отдельных полях, а не в инвентаре.
      const currencyMatch = text.match(/^(\d+)\s*(мм|см|эм|зм|пм|cp|sp|ep|gp|pp)$/i);
      if (currencyMatch) {
        const currencyMap = {
          'мм': 'cp', 'см': 'sp', 'эм': 'ep', 'зм': 'gp', 'пм': 'pp',
          'cp': 'cp', 'sp': 'sp', 'ep': 'ep', 'gp': 'gp', 'pp': 'pp'
        };
        const key = currencyMap[currencyMatch[2].toLowerCase()];
        currencyTotals[key] += Number(currencyMatch[1]) * Math.max(1, Number(multiplier) || 1);
        return;
      }

      const parsed = parsePackPart(text);
      const count = parsed.count * Math.max(1, Number(multiplier) || 1);
      const shopItem = findShopItemByDisplayName(parsed.name);

      addRepeatingRow('inventory', {
        itemname: shopItem?.name || parsed.name,
        itemcount: String(count),
        itemweight: String(shopItem?.weight || 0),
        inventorysubflag: '0',
        hasattack: '0',
        itemattackid: ''
      });
    }

    upsert('character_name', payload.character.name);
    upsert('class', roll20ClassName);
    upsert('class_display', `${roll20ClassName} 1`);
    upsert('base_level', '1');
    upsert('level', '1');

    // Поддерживаем поля разных версий листа D&D 5E by Roll20.
    upsert('subclass', subclassName);
    upsert('subclass_display', subclassName);
    upsert('race', speciesName);
    upsert('creature_type', creatureType);
    upsert('type', creatureType);
    upsert('size', creatureSize);
    upsert('character_size', creatureSize);

    upsert('background', backgroundName);
    upsert('alignment', alignment);
    upsert('pb', '2');
    upsert('experience', '0');
    upsert('hp', String(maxHp), String(maxHp));
    upsert('hit_dice', '1', '1');
    upsert('hitdietype', String(hitDieSize));
    upsert('hitdieroll', String(hitDieSize));
    upsert('hitdie_final', '@{hitdietype}');
    upsert('ac', String(10 + modifier(totalScore('dexterity'))));
    upsert('speed', speed);
    const harengonInitiativeBonus = /harengon|зайцегон/i.test(
      `${species?.id || ''} ${species?.name || ''} ${species?.nameEn || ''}`
    ) ? 2 : 0;
    upsert('initiative_bonus', (modifier(totalScore('dexterity')) + harengonInitiativeBonus) / 100);

    abilityKeys.forEach((key) => {
      const score = totalScore(key);
      upsert(`${key}_base`, score);
      upsert(key, score);
      upsert(`${key}_mod`, modifier(score));
      upsert(`${key}_save_prof`, '0');
      upsert(`${key}_save_bonus`, modifier(score));
    });

    const proficientSkillIds = new Set(
      skills.map((skillName) => ROLL20_SKILLS[skillName]).filter(Boolean)
    );

    Object.values(ROLL20_SKILLS).forEach((roll20Name) => {
      const abilityKey = ROLL20_SKILL_ABILITIES[roll20Name];
      if (!abilityKey) return;

      const isProficient = proficientSkillIds.has(roll20Name);
      const localizedSkill = Object.entries(ROLL20_SKILLS).find(([, id]) => id === roll20Name)?.[0];
      const hasExpertise = Boolean(localizedSkill && expertiseSkills.has(localizedSkill));
      const abilityModifier = modifier(totalScore(abilityKey));
      const proficiencyBonus = hasExpertise ? 4 : (isProficient ? 2 : 0);
      const totalBonus = abilityModifier + proficiencyBonus;
      const signedAbility = abilityModifier >= 0
        ? `+${abilityModifier}`
        : String(abilityModifier);
      const proficiencyPart = hasExpertise ? '+4[Expertise]' : (isProficient ? '+2[Proficiency]' : '');

      upsert(`${roll20Name}_type`, hasExpertise ? '2' : (isProficient ? '1' : '0'));
      upsert(
        `${roll20Name}_prof`,
        isProficient ? `(@{pb}*@{${roll20Name}_type})` : '0'
      );
      upsert(`${roll20Name}_bonus`, String(totalBonus));
      upsert(
        `${roll20Name}_roll`,
        `@{wtype}&{template:simple} {{rname=^{${roll20Name.replaceAll('_', '-')}-u}}} {{mod=@{${roll20Name}_bonus}}} {{r1=[[@{d20}${proficiencyPart}${signedAbility}[${abilityKey}]@{pbd_safe}]]}} @{advantagetoggle}${proficiencyPart}${signedAbility}[${abilityKey}]@{pbd_safe}]]}} {{global=@{global_skill_mod}}} @{charname_output}`
      );
    });

    upsert(
      'passive_wisdom',
      String(10 + modifier(totalScore('wisdom')) + (expertiseSkills.has('Внимательность') ? 4 : (proficientSkillIds.has('perception') ? 2 : 0)))
    );



    const classProficiencies = characterClass?.proficiencies || {};
    const classSavingThrows = Array.isArray(classProficiencies.savingThrows)
      ? classProficiencies.savingThrows
      : [];
    classSavingThrows.forEach((saveName) => {
      const key = abilityKeyFromRussian(saveName);
      if (!key) return;
      upsert(`${key}_save_prof`, '(@{pb})');
      upsert(`${key}_save_bonus`, modifier(totalScore(key)) + 2);
    });

    const selectedClassEffects = getClassFeatureGroups().flatMap((group) => { const selected = state.choices[`classFeature:${group.id}`] || []; return group.options.filter((option) => selected.includes(option.id)).flatMap((option) => option.effects || []); });
    const grantedArmor = selectedClassEffects.filter((effect) => effect.type === 'armorTraining').flatMap((effect) => effect.categories || []);
    const grantedWeapons = selectedClassEffects.filter((effect) => effect.type === 'weaponProficiency').flatMap((effect) => effect.categories || []);
    const armorProficiencies = [...new Set([...(Array.isArray(classProficiencies.armor) ? classProficiencies.armor : []), ...grantedArmor])];
    const weaponProficiencies = [...new Set([...(Array.isArray(classProficiencies.weapons) ? classProficiencies.weapons : []), ...grantedWeapons])];
    const classTools = Array.isArray(classProficiencies.tools) ? classProficiencies.tools : [];
    // В массиве класса могут быть не конкретные владения, а инструкции выбора
    // вроде «3 музыкальных инструмента». Такие строки не экспортируем отдельным инструментом:
    // выбранные пользователем инструменты уже находятся в `tools`.
    const fixedClassTools = classTools.filter((toolName) => creatorOptions.allTools.includes(String(toolName).trim()));
    upsert('other_armor', armorProficiencies.join(', '));
    upsert('other_weapon', weaponProficiencies.join(', '));
    addProficiency('ДОСПЕХИ', armorProficiencies.join(', '));
    addProficiency('ОРУЖИЕ', weaponProficiencies.join(', '));

    [...new Set([...fixedClassTools, ...tools])].forEach(addTool);
    // В Roll20 языки должны отображаться одной строкой, а не отдельной
    // repeating-карточкой для каждого языка.
    addProficiency('ЯЗЫК', [...new Set(languages)].join(', '));

    const level1Features = Array.isArray(characterClass?.level1Features)
      ? characterClass.level1Features
      : (Array.isArray(characterClass?.features)
          ? characterClass.features.filter((feature) => Number(feature?.level ?? 0) === 1)
          : []);
    level1Features.forEach((feature) => addTrait(
      feature?.name || 'Особенность класса',
      feature?.description || '',
      'Класс',
      `${className} 1 уровень`
    ));

    function selectedSpellNamesForSource(sourceId, level) {
      const source = typeof getSpellSources === 'function'
        ? getSpellSources().find((item) => item.id === sourceId)
        : null;
      if (!source) return [];

      const selected = state.spells?.sources?.[sourceId] || { cantrip: [], level1: [] };
      const bucket = level === 'cantrip' ? 'cantrip' : 'level1';
      const selectedIds = new Set(selected[bucket] || []);
      return (source.options || [])
        .filter((spell) => spell.level === level && selectedIds.has(spell.id))
        .map((spell) => spell.name)
        .filter(Boolean);
    }

    function classFeatureDescription(group, option) {
      let baseDescription = option?.description || '';
      const isPactOfTheTome = group?.id === 'eldritch-invocation'
        && (option?.id === 'pact-of-the-tome' || /Договор гримуара/i.test(String(option?.name || '')));
      if (!isPactOfTheTome) return baseDescription;

      // В некоторых наборах данных у выбранного воззвания хранится только
      // название. Не допускаем, чтобы в Roll20 осталось одно перечисление
      // выбранных заклинаний без полного текста особенности.
      if (!String(baseDescription).trim()) {
        baseDescription = [
          'Договор гримуара',
          '',
          'Переплетая теневые нити между собой, в конце Короткого или Продолжительного отдыха вы создаёте в своей руке книгу. Эта книга теней (её внешний вид определяете вы) содержит тайную магию, доступную только вам, и позволяет вам получить перечисленные ниже эффекты. Книга исчезает, если вы создаёте новую книгу при помощи этого умения или если вы умираете.',
          '',
          'Заговоры и ритуалы. Когда книга появится, то выберите 3 заговора и 2 заклинания 1 уровня с меткой «ритуал». Заклинания могут быть из списка заклинаний любого класса, и это должны быть заклинания, которые у вас ещё не подготовлены. Пока книга находится рядом с вами, то выбранные заклинания считаются подготовленными и действуют как заклинания колдуна.',
          '',
          'Заклинательная фокусировка. Вы можете использовать книгу в качестве заклинательной фокусировки.'
        ].join('\n');
      }

      const cantrips = selectedSpellNamesForSource('class-feature-pact-tome', 'cantrip');
      const level1 = selectedSpellNamesForSource('class-feature-pact-tome', '1');
      const selection = [
        'Выбрано:',
        '',
        'Заговоры:',
        ...(cantrips.length ? cantrips : ['—']),
        '',
        'Заклинания 1 уровня:',
        ...(level1.length ? level1 : ['—'])
      ].join('\n');

      return [baseDescription, selection].filter(Boolean).join('\n\n');
    }

    getClassFeatureGroups().forEach((group) => {
      const selectedIds = state.choices[`classFeature:${group.id}`] || [];

      selectedIds.forEach((selectedId) => {
        const option = group.options.find((item) => item.id === selectedId);
        if (!option) return;

        if (group.id === 'weapon-mastery') {
          const masteryName = option.detail || 'Оружейный приём';
          const description = WEAPON_MASTERY_DESCRIPTIONS[option.masteryId] || '';
          addTrait(
            `${masteryName} (${option.name})`,
            description,
            'Класс',
            `${className} 1 уровень`
          );
          return;
        }

        if (group.id === 'fighting-style') {
          addTrait(
            option.name,
            classFeatureDescription(group, option),
            'Черта боевого стиля',
            `${className} 1 уровень`
          );
          return;
        }

        if (group.id === 'blood-curse') {
          addTrait(
            option.name,
            classFeatureDescription(group, option),
            'Проклятие крови',
            `${className} 1 уровень`
          );
          return;
        }

        addTrait(
          option.name,
          classFeatureDescription(group, option),
          group.name || 'Умение класса',
          `${className} 1 уровень`
        );
      });
    });

    getEffectiveAbilities(species, variant).forEach((feature) => addTrait(
      feature?.title || feature?.name || 'Особенность вида',
      feature?.description || '',
      'Раса',
      speciesName
    ));

    if (background?.feature) {
      addTrait(
        background.feature,
        background.featureDescription || '',
        'Предыстория',
        backgroundName
      );
    }

    originFeats.forEach((originFeat) => {
      const fromSpecies = (state.choices['species:originFeat'] || []).includes(originFeat.id);
      const source = fromSpecies ? speciesName : (backgroundName || 'Предыстория');
      const featEffects = Array.isArray(originFeat.effects) ? originFeat.effects : [];
      const exportedEffects = fromSpecies && originFeat.type === 'general'
        ? featEffects.filter((effect) => !/^\s*Повышение характеристики[.:]/i.test(String(effect)))
        : featEffects;
      addTrait(
        originFeat.name,
        exportedEffects.join('\n\n'),
        'Черта',
        source
      );
    });

    // Экспортируем только фактический инвентарь конструктора.
    // Старый прямой экспорт первого набора класса удалён: он создавал дубли.
    currencyTotals.cp = Math.floor(Number(state.equipment.goldCopper || 0) % 10);
    currencyTotals.sp = Math.floor((Number(state.equipment.goldCopper || 0) % 100) / 10);
    currencyTotals.ep = 0;
    currencyTotals.gp = Math.floor(Number(state.equipment.goldCopper || 0) / 100);
    currencyTotals.pp = 0;

    for (const entry of state.equipment?.inventory || []) {
      const shopItem = equipmentShopItems.find((item) => item.id === entry.id);
      if (!shopItem) continue;

      const quantity = Math.max(1, Number(entry.quantity || 1));
      const packItems = getEquipmentPackItems(shopItem.name);

      if (Array.isArray(packItems)) {
        packItems.forEach((part) => {
          const parsed = parsePackPart(part);
          addInventoryItem(parsed.name, parsed.count * quantity);
        });
      } else {
        addRepeatingRow('inventory', {
          itemname: shopItem.name,
          itemcount: String(quantity),
          itemweight: String(shopItem.weight || 0),
          inventorysubflag: '0',
          hasattack: '0',
          itemattackid: ''
        });
      }
    }

    Object.entries(currencyTotals).forEach(([currency, amount]) => {
      upsert(currency, String(amount));
    });

    upsert('other_languages', languages.join(', '));
    upsert('other_tool', tools.join(', '));
    upsert('race', baseSpeciesName);
    upsert('race_display', variantSpeciesName || baseSpeciesName);
    upsert('subrace', variantSpeciesName);
    upsert('creaturetype', creatureType);
    upsert('creature_type', creatureType);
    upsert('creature_type_display', creatureType);
    upsert('type', creatureType);
    upsert('size_display', creatureSize);
    // Поля биографии листа D&D 5e by Roll20.
    if (state.physique.heightInches) {
      upsert('height', `${Math.floor(state.physique.heightInches / 12)} фут. ${state.physique.heightInches % 12} дюйм.`);
    }
    if (state.physique.weightPounds) {
      upsert('weight', `${state.physique.weightPounds} фунтов`);
    }
    upsert('personality_traits', (state.choices['background:traits'] || state.personalityTraits || []).join ? (state.choices['background:traits'] || state.personalityTraits || []).join('\n\n') : String(state.personalityTraits || ''));
    upsert('ideals', state.choices['background:ideal']?.[0] || state.ideals || '');
    upsert('bonds', state.choices['background:bond']?.[0] || state.bonds || '');
    upsert('flaws', state.choices['background:flaw']?.[0] || state.flaws || '');
    upsert('other_other', [
      featName ? `Черта происхождения: ${featName}` : '',
      background?.lore ? `История предыстории:\n${htmlToRoll20Text(background.lore)}` : '',
      speciesTraits.length ? `Особенности вида:\n${speciesTraits.join('\n')}` : '',
      state.physique.heightInches ? `Рост: ${Math.floor(state.physique.heightInches / 12)} фт. ${state.physique.heightInches % 12} дюйм.` : '',
      state.physique.weightPounds ? `Вес: ${state.physique.weightPounds} фунт.` : ''
    ].filter(Boolean).join('\n\n'));


    const spellSources = typeof getSpellSources === 'function' ? getSpellSources() : [];
    const exportedSpellKeys = new Set();
    let exportedSpellCount = 0;

    function spellInnateLabel(source) {
      const raw = String(source?.spellLabel || source?.title || '').trim();
      return raw
        .replace(/^Класс:\s*/i, '')
        .replace(/^Вид:\s*/i, '')
        .replace(/^Черта:\s*/i, '')
        .replace(/^Предыстория:\s*/i, '')
        .replace(/^Умение класса:\s*/i, '')
        .trim();
    }

    function selectedSpellsForSource(source) {
      const selected = state.spells?.sources?.[source.id] || { cantrip: [], level1: [] };
      const selectedIds = new Set([
        ...(selected.cantrip || []),
        ...(selected.level1 || [])
      ]);
      return [
        ...(source.fixed || []),
        ...(source.options || []).filter((spell) => selectedIds.has(spell.id))
      ];
    }

    function addSpellCard(spell, source) {
      if (!spell) return;
      const section = spell.level === 'cantrip' ? 'cantrip' : '1';
      const uniqueKey = `${source?.id || 'unknown'}:${section}:${spell.id || spell.name}`;
      if (exportedSpellKeys.has(uniqueKey)) return;
      exportedSpellKeys.add(uniqueKey);

      const newRowId = createRoll20Id();
      const sourceAttributes = Array.isArray(spell.roll20Attributes) ? spell.roll20Attributes : [];
      const copiedFields = new Set();

      sourceAttributes.forEach((sourceAttribute) => {
        const fieldMatch = String(sourceAttribute.name).match(/^repeating_spell-(?:cantrip|1)_[^_]+_(.+)$/);
        if (!fieldMatch) return;
        const field = fieldMatch[1];
        copiedFields.add(field);
        payload.character.attribs.push({
          name: `repeating_spell-${section}_${newRowId}_${field}`,
          current: sourceAttribute.current ?? '',
          max: sourceAttribute.max ?? '',
          id: createRoll20Id()
        });
      });

      const fallbackFields = {
        spellname: spell.name || '',
        spelllevel: section === 'cantrip' ? '0' : '1',
        spellschool: spell.school || '',
        spellcastingtime: spell.castingTime || '',
        spellrange: spell.range || '',
        spellduration: spell.duration || '',
        spelldescription: stripHtml(spell.description || ''),
        spelloutput: 'SPELLCARD',
        spellprepared: '0',
        spell_ability: 'spell',
        'details-flag': '0',
        'options-flag': '0'
      };

      Object.entries(fallbackFields).forEach(([field, current]) => {
        if (copiedFields.has(field)) return;
        payload.character.attribs.push({
          name: `repeating_spell-${section}_${newRowId}_${field}`,
          current,
          max: '',
          id: createRoll20Id()
        });
      });

      const innateName = `repeating_spell-${section}_${newRowId}_innate`;
      const existingInnate = payload.character.attribs.find((item) => item.name === innateName);
      const innate = spellInnateLabel(source);
      if (existingInnate) existingInnate.current = innate;
      else payload.character.attribs.push({ name: innateName, current: innate, max: '', id: createRoll20Id() });

      exportedSpellCount += 1;
    }

    if (spellSources.length) {
      spellSources.forEach((source) => {
        selectedSpellsForSource(source).forEach((spell) => addSpellCard(spell, source));
      });
    } else {
      const selectedCantrips = new Set(state.spells.cantrips || []);
      const selectedLevel1 = new Set(state.spells.level1 || []);
      getClassSpells().filter((spell) =>
        spell.level === 'cantrip'
          ? selectedCantrips.has(spell.id)
          : spell.level === '1' && selectedLevel1.has(spell.id)
      ).forEach((spell) => addSpellCard(spell, { id: 'class', title: className }));
    }
    if (exportedSpellCount) {
      upsert('tab', 'spells');
      upsert('caster_level', '1');
      const firstLevel = Array.isArray(characterClass?.levels)
        ? characterClass.levels.find((level) => Number(level?.level) === 1)
        : null;
      const slots = firstLevel?.spellSlots?.[1] ?? (state.class === 'warlock' ? 1 : 2);
      upsert('lvl1_slots_total', String(slots));
      const castingAbilityMap = { wizard: 'intelligence', artificer: 'intelligence', cleric: 'wisdom', druid: 'wisdom', ranger: 'wisdom', bard: 'charisma', sorcerer: 'charisma', warlock: 'charisma', paladin: 'charisma' };
      const castingAbility = castingAbilityMap[state.class] || '';
      if (castingAbility) {
        upsert('spellcasting_ability', `@{${castingAbility}_mod}+`);
        upsert('spell_attack_bonus', modifier(totalScore(castingAbility)) + 2);
        upsert('spell_save_dc', 8 + modifier(totalScore(castingAbility)) + 2);
      }
      upsert('lvl1_slots_expended', '0');
    }

    payload.character.attribs = payload.character.attribs.map((attribute) => ({
      ...attribute,
      id: attribute.id || createRoll20Id()
    }));
    return payload;
  
  }

  globalScope.CharacterCreatorRoll20 = Object.freeze({
    buildPayload
  });
})(window);
