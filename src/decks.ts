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
    backgroundImagePath: "../assets/images/backgrounds/mortal-kombat-background.png",
    cardBack: "../assets/images/mk-cardback.svg",
  },

  {
    deckName: "street-fighter",
    backgroundImagePath: "../assets/images/backgrounds/street-fighter-background.jpg",
    cardBack: "../assets/images/street-fighter-cardback.svg",
  },

  {
    deckName: "zelda",
    backgroundImagePath: "../assets/images/backgrounds/zelda-background.jpg",
    cardBack: "../assets/images/zelda-cardback.svg",
  },
];
