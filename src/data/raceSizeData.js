export const defaultSizeData = {
    средний: {
      baseHeight: { футов: 4, дюймов: 8 },
      baseWeight: 110,
      heightRange: [2, 20],
      weightRange: [2, 8]
    },
    маленький: {
      baseHeight: { футов: 2, дюймов: 11 },
      baseWeight: 35,
      heightRange: [2, 8],
      weightRange: [1, 1]
    }
  };
  
  export const raceData = {
    aarakokra: {
      size: 'средний',
      baseHeight: defaultSizeData.средний.baseHeight,
      baseWeight: defaultSizeData.средний.baseWeight,
      heightRange: defaultSizeData.средний.heightRange,
      weightRange: defaultSizeData.средний.weightRange
    },
    aasimar: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    autognome: {
      size: 'маленький',
      baseHeight: defaultSizeData.маленький.baseHeight,
      baseWeight: defaultSizeData.маленький.baseWeight,
      heightRange: defaultSizeData.маленький.heightRange,
      weightRange: defaultSizeData.маленький.weightRange
    },
    bugbear: {
      baseHeight: { футов: 6, дюймов: 0 },
      baseWeight: 200,
      heightRange: [2, 24],
      weightRange: [2, 12],
      size: 'средний'
    },
    centaur: {
      baseHeight: { футов: 6, дюймов: 0 },
      baseWeight: 600,
      heightRange: [1, 10],
      weightRange: [2, 24],
      size: 'средний'
    },
    changeling: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 5, дюймов: 1 },
        baseWeight: 115,
        heightRange: [2, 8],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    dragonborn: {
      baseHeight: { футов: 5, дюймов: 6 },
      baseWeight: 175,
      heightRange: [2, 16],
      weightRange: [2, 12],
      size: 'средний'
    },
    dwarfDuergar: {
      // example of subrace referencing dwarf base (Duergar)
      baseHeight: { футов: 4, дюймов: 0 },
      baseWeight: 130,
      heightRange: [2, 8],
      weightRange: [2, 12],
      size: 'средний',
      baseRace: 'dwarf',
      subraceName: 'Duergar'
    },
    dwarf: {
      baseHeight: { футов: 4, дюймов: 0 },
      baseWeight: 130,
      heightRange: [2, 8],
      weightRange: [2, 12],
      size: 'средний'
    },
    eladrin: {
      baseHeight: { футов: 4, дюймов: 6 },
      baseWeight: 90,
      heightRange: [2, 24],
      weightRange: [1, 4],
      size: 'средний'
    },
    elfDrow: {
      baseHeight: { футов: 4, дюймов: 5 },
      baseWeight: 75,
      heightRange: [2, 12],
      weightRange: [1, 6],
      size: 'средний'
    },
    elfSea: {
      baseHeight: { футов: 4, дюймов: 6 },
      baseWeight: 90,
      heightRange: [2, 16],
      weightRange: [1, 4],
      size: 'средний'
    },
    elfShadarKai: {
      baseHeight: { футов: 4, дюймов: 8 },
      baseWeight: 90,
      heightRange: [2, 16],
      weightRange: [1, 4],
      size: 'средний'
    },
    elfWood: {
      baseHeight: { футов: 4, дюймов: 6 },
      baseWeight: 100,
      heightRange: [2, 20],
      weightRange: [1, 4],
      size: 'средний'
    },
    fairy: {
      size: 'маленький',
      baseHeight: defaultSizeData.маленький.baseHeight,
      baseWeight: defaultSizeData.маленький.baseWeight,
      heightRange: defaultSizeData.маленький.heightRange,
      weightRange: defaultSizeData.маленький.weightRange
    },
    firbolg: {
      baseHeight: { футов: 6, дюймов: 2 },
      baseWeight: 175,
      heightRange: [2, 24],
      weightRange: [2, 12],
      size: 'средний'
    },
    genasi: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    giff: {
      size: 'средний',
      baseHeight: defaultSizeData.средний.baseHeight,
      baseWeight: defaultSizeData.средний.baseWeight,
      heightRange: defaultSizeData.средний.heightRange,
      weightRange: defaultSizeData.средний.weightRange
    },
    githGithyanki: {
      baseHeight: { футов: 5, дюймов: 0 },
      baseWeight: 100,
      heightRange: [2, 24],
      weightRange: [2, 8],
      size: 'средний'
    },
    githGithzerai: {
      baseHeight: { футов: 4, дюймов: 11 },
      baseWeight: 90,
      heightRange: [2, 24],
      weightRange: [1, 4],
      size: 'средний'
    },
    gnome: {
      baseHeight: { футов: 2, дюймов: 11 },
      baseWeight: 35,
      heightRange: [2, 8],
      weightRange: [1, 1],
      size: 'маленький'
    },
    goblin: {
      baseHeight: { футов: 3, дюймов: 5 },
      baseWeight: 35,
      heightRange: [2, 8],
      weightRange: [1, 1],
      size: 'маленький'
    },
    goliath: {
      baseHeight: { футов: 6, дюймов: 2 },
      baseWeight: 200,
      heightRange: [2, 20],
      weightRange: [2, 12],
      size: 'средний'
    },
    grung: {
      baseHeight: { футов: 2, дюймов: 2 },
      baseWeight: 25,
      heightRange: [2, 16],
      weightRange: [1, 1],
      size: 'маленький'
    },
    hadozee: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    halfElf: {
      baseHeight: { футов: 4, дюймов: 9 },
      baseWeight: 110,
      heightRange: [2, 16],
      weightRange: [2, 8],
      size: 'средний'
    },
    halfling: {
      baseHeight: { футов: 2, дюймов: 7 },
      baseWeight: 35,
      heightRange: [2, 8],
      weightRange: [1, 1],
      size: 'маленький'
    },
    halfOrc: {
      baseHeight: { футов: 4, дюймов: 10 },
      baseWeight: 140,
      heightRange: [2, 20],
      weightRange: [2, 12],
      size: 'средний'
    },
    harengon: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    hobgoblin: {
      baseHeight: { футов: 4, дюймов: 8 },
      baseWeight: 110,
      heightRange: [2, 20],
      weightRange: [2, 8],
      size: 'средний'
    },
    human: {
      baseHeight: { футов: 4, дюймов: 8 },
      baseWeight: 110,
      heightRange: [2, 28],
      weightRange: [2, 8],
      size: 'средний'
    },
    kalashtar: {
      baseHeight: { футов: 5, дюймов: 4 },
      baseWeight: 110,
      heightRange: [2, 12],
      weightRange: [1, 6],
      size: 'средний'
    },
    kender: {
      size: 'маленький',
      baseHeight: defaultSizeData.маленький.baseHeight,
      baseWeight: defaultSizeData.маленький.baseWeight,
      heightRange: defaultSizeData.маленький.heightRange,
      weightRange: defaultSizeData.маленький.weightRange
    },
    kenku: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 4 },
        baseWeight: 50,
        heightRange: [2, 16],
        weightRange: [1, 6],
        size: 'средний'
      }
    },
    kobold: {
      baseHeight: { футов: 2, дюймов: 1 },
      baseWeight: 25,
      heightRange: [2, 8],
      weightRange: [1, 1],
      size: 'маленький'
    },
    leonin: {
      baseHeight: { футов: 5, дюймов: 6 },
      baseWeight: 180,
      heightRange: [2, 20],
      weightRange: [2, 12],
      size: 'средний'
    },
    lizardfolk: {
      baseHeight: { футов: 4, дюймов: 9 },
      baseWeight: 120,
      heightRange: [2, 20],
      weightRange: [2, 12],
      size: 'средний'
    },
    locathah: {
      baseHeight: { футов: 5, дюймов: 1 },
      baseWeight: 115,
      heightRange: [2, 8],
      weightRange: [2, 8],
      size: 'средний'
    },
    loxodon: {
      baseHeight: { футов: 6, дюймов: 7 },
      baseWeight: 295,
      heightRange: [2, 20],
      weightRange: [2, 8],
      size: 'средний'
    },
    minotaur: {
      baseHeight: { футов: 5, дюймов: 4 },
      baseWeight: 175,
      heightRange: [2, 16],
      weightRange: [2, 12],
      size: 'средний'
    },
    orc: {
      baseHeight: { футов: 5, дюймов: 4 },
      baseWeight: 175,
      heightRange: [2, 16],
      weightRange: [2, 12],
      size: 'средний'
    },
    owlin: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    plasmoid: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    satyr: {
      baseHeight: { футов: 4, дюймов: 8 },
      baseWeight: 100,
      heightRange: [2, 16],
      weightRange: [2, 8],
      size: 'средний'
    },
    shifter: {
      baseHeight: { футов: 4, дюймов: 6 },
      baseWeight: 90,
      heightRange: [2, 16],
      weightRange: [2, 8],
      size: 'средний'
    },
    simicHybrid: {
      size: 'средний',
      baseHeight: defaultSizeData.средний.baseHeight,
      baseWeight: defaultSizeData.средний.baseWeight,
      heightRange: defaultSizeData.средний.heightRange,
      weightRange: defaultSizeData.средний.weightRange
    },
    tabaxi: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 10 },
        baseWeight: 90,
        heightRange: [2, 10],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    thriKreen: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    tiefling: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 9 },
        baseWeight: 110,
        heightRange: [2, 16],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    tortle: {
      sizeOptions: ['маленький', 'средний'],
      маленький: {
        baseHeight: { футов: 2, дюймов: 11 },
        baseWeight: 35,
        heightRange: [2, 8],
        weightRange: [1, 1],
        size: 'маленький'
      },
      средний: {
        baseHeight: { футов: 4, дюймов: 8 },
        baseWeight: 110,
        heightRange: [2, 20],
        weightRange: [2, 8],
        size: 'средний'
      }
    },
    triton: {
      baseHeight: { футов: 4, дюймов: 6 },
      baseWeight: 90,
      heightRange: [2, 20],
      weightRange: [2, 8],
      size: 'средний'
    },
    vedalken: {
      baseHeight: { футов: 5, дюймов: 4 },
      baseWeight: 110,
      heightRange: [2, 20],
      weightRange: [2, 8],
      size: 'средний'
    },
    verdan: {
      baseHeight: { футов: 2, дюймов: 9 },
      baseWeight: 35,
      heightRange: [2, 16],
      weightRange: [1, 1],
      size: 'маленький'
    },
    warforged: {
      baseHeight: { футов: 5, дюймов: 10 },
      baseWeight: 270,
      heightRange: [2, 12],
      weightRange: [4, 4],
      size: 'средний'
    },
    yuanTi: {
      baseHeight: { футов: 4, дюймов: 8 },
      baseWeight: 110,
      heightRange: [2, 20],
      weightRange: [2, 8],
      size: 'средний'
    }
  };
  
  export function getRaceData(race, selectedSize = null) {
    const data = raceData[race];
    if (!data) return null;
    if (data.sizeOptions) {
      const size = selectedSize || data.sizeOptions[0];
      return data[size];
    }
    if (!data.baseHeight || !data.baseWeight || !data.heightRange || !data.weightRange) {
      const sizeKey = data.size || 'средний';
      return { ...defaultSizeData[sizeKey], size: sizeKey };
    }
    return data;
  }
  