const mortalKombatDeckMusic = new Audio("../audio/mortal-kombat.mp3");
const streetFighterDeckMusic = new Audio("../audio/street-fighter.mp3");
const zeldaDeckMusic = new Audio("../audio/zelda.mp3");
export const mainMenuMusic = new Audio("../audio/main-menu.mp3");
mainMenuMusic.loop = true;
mortalKombatDeckMusic.loop = true;
streetFighterDeckMusic.loop = true;
zeldaDeckMusic.loop = true;

export function stopAudio(audio: HTMLAudioElement) {
  audio.pause();
  audio.currentTime = 0;
}

export const buttonPressSound = new Audio("../audio/button-press.wav");

export const deckMusics: HTMLAudioElement[] = [
  mortalKombatDeckMusic,
  streetFighterDeckMusic,
  zeldaDeckMusic,
];
