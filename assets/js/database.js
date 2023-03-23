//
//

// Database com todos os itens do jogo
const dropList = {
  item: {
    "Item-1": {
      monsters: {
        "Monstro-1": {
          level: "Level 1 ao 40",
          map: "Junon",
        },
      },
    },
    "Item-2": {
      monsters: {
        "Monstro-2": {
          level: "Level 40 ao 50",
          map: "Junon",
        },
        "Monstro-3": {
          level: "Level 50 ao 60",
          map: "Eucar",
        },
      },
    },
  },
  mob: {
    "Monster-1": {
      level: "Level 1 ao 40",
      map: "Junon",
      drops: ["Item-1", "Item-2", "Item-3"],
    },
    "Monster-2": {
      level: "Level 40 ao 50",
      map: "Eucar",
      drops: [
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
      ],
    },
    "Monster-3": {
      level: "Level 240 ao 250",
      map: "Oro",
      drops: [
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
        "Item-6",
        "Item-7",
        "Item-8",
      ],
    },
  },
};