export const deckOptions: string[] = [
  "Mortal Kombat",
  "Street Fighter",
  "Zelda",
];

interface DeckData {
  deckName: string;
  backgroundImagePath: string;
  cardBack: string;
}

export const deckData: DeckData[] = [
  {
    deckName: "mortal-kombat",
    backgroundImagePath: "../images/backgrounds/mortal-kombat-background.png",
    cardBack: "../images/mk-cardback.svg",
  },

  {
    deckName: "street-fighter",
    backgroundImagePath: "../images/backgrounds/street-fighter-background.jpg",
    cardBack: "../images/street-fighter-cardback.svg",
  },

  {
    deckName: "zelda",
    backgroundImagePath: "../images/backgrounds/zelda-background.jpg",
    cardBack: "../images/zelda-cardback.svg",
  },
];
