import { languageData } from "./language-data.js";
import { languageIndex } from "./main.js";

let timerStarted = false;
export let startTime: number;
let timerInterval: number;

export function startTimer(timerDisplay: HTMLElement): void {
  startTime = Date.now();
  timerInterval = window.setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    if (timerDisplay && languageIndex != 5) {
      timerDisplay.innerText = `${elapsed} ${languageData[languageIndex].timerText}`;
    }
    if (timerDisplay) {
      timerDisplay.innerText = `${elapsed.toLocaleString("hi-u-nu-deva")} ${languageData[languageIndex].timerText}`;
    }
  }, 1000);
}

export function stopTimer(): void {
  clearInterval(timerInterval);
  timerStarted = false;
}

export function activateTimer(): HTMLElement | null {
  const timerDisplay: HTMLElement | null = document.getElementById("timerID");
  if (timerDisplay && !timerStarted) {
    startTimer(timerDisplay);
    timerStarted = true;
  }
  return timerDisplay;
}