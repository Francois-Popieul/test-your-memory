export const deckOptions: string[] = [
  "Mortal Kombat",
  "Street Fighter",
  "Zelda",
];

export const images: Array<string> = [
  "image-1",
  "image-2",
  "image-3",
  "image-4",
  "image-5",
  "image-6",
  "image-7",
  "image-8",
  "image-9",
];

interface DeckData {
  deckName: string;
  backgroundImagePath: string;
  cardBack: string;
}

export const deckData: DeckData[] = [
  {
    deckName: "mortal-kombat",
    backgroundImagePath:
      "../assets/images/backgrounds/mortal-kombat-background.png",
    cardBack: "../assets/images/mk-cardback.svg",
  },

  {
    deckName: "street-fighter",
    backgroundImagePath:
      "../assets/images/backgrounds/street-fighter-background.jpg",
    cardBack: "../assets/images/street-fighter-cardback.svg",
  },

  {
    deckName: "zelda",
    backgroundImagePath: "../assets/images/backgrounds/zelda-background.jpg",
    cardBack: "../assets/images/zelda-cardback.svg",
  },
];
