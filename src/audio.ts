import { languageData } from "./language-data.js";
import { languageIndex } from "./main-menu.js";

const mortalKombatDeckMusic = new Audio("../assets/audio/mortal-kombat.mp3");
const streetFighterDeckMusic = new Audio("../assets/audio/street-fighter.mp3");
const zeldaDeckMusic = new Audio("../assets/audio/zelda.mp3");
export const mainMenuMusic = new Audio("../assets/audio/main-menu.mp3");
export let musicIsOn: boolean = true;
export let musicIndex: number = 0;
mainMenuMusic.loop = true;
mortalKombatDeckMusic.loop = true;
streetFighterDeckMusic.loop = true;
zeldaDeckMusic.loop = true;

export function stopAudio(audio: HTMLAudioElement): void {
  audio.pause();
  audio.currentTime = 0;
}

export const buttonPressSound = new Audio("../assets/audio/button-press.mp3");
export const buttonPressError = new Audio("../assets/audio/error.mp3");

export const deckMusics: HTMLAudioElement[] = [
  mortalKombatDeckMusic,
  streetFighterDeckMusic,
  zeldaDeckMusic,
];

export function toggleMusic(): void {
  buttonPressSound.play();
  const musicOptionText: HTMLElement | null =
    document.getElementById("musicOptionTextID");
  if (musicIsOn === true) {
    musicIsOn = false;
    musicIndex = 1;
    if (musicOptionText) {
      musicOptionText.innerText = languageData[languageIndex].musicOptions[1];
    }
    stopAudio(mainMenuMusic);
  } else {
    musicIsOn = true;
    musicIndex = 0;
    if (musicOptionText) {
      musicOptionText.innerText = languageData[languageIndex].musicOptions[0];
    }
    mainMenuMusic.play();
  }
}

export function playButtonSoundEffect(state: boolean) {
  if (state === true) {
    buttonPressSound.play();
  } else {
    buttonPressError.play();
  }
}
