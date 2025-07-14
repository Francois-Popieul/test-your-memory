import { languageOptions, languageData } from "./language-data.js";
import {
  stopAudio,
  mainMenuMusic,
  deckMusics,
  buttonPressSound,
  musicIndex,
  musicIsOn,
  toggleMusic,
  playButtonSoundEffect,
} from "./audio.js";
import { deckOptions, deckData } from "./decks.js";
import { timerStarted, stopTimer } from "./timer.js";
import { playGame } from "./gameboard.js";

export let difficultyIndex: number = 0;
export let languageIndex: number = 0;
export let deckIndex: number = 0;

const body: HTMLElement | null = document.querySelector("body");

export function displayMainMenu(): void {
  document.removeEventListener("click", displayMainMenu);
  if (musicIsOn) {
    mainMenuMusic.play();
  }
  stopAudio(deckMusics[deckIndex]);
  if (timerStarted === true) {
    stopTimer();
  }
  if (body) {
    body.innerHTML = "";
    const mainElement: HTMLElement = document.createElement("main");
    mainElement.classList.add("main-container");
    const title: HTMLHeadingElement = document.createElement("h1");
    title.innerText = "Test Your Memory";
    const formElement: HTMLFormElement = document.createElement("form");
    formElement.classList.add("form");

    const formTitleElement: HTMLParagraphElement = document.createElement("p");
    formTitleElement.classList.add("form-title");
    formTitleElement.innerText = languageData[languageIndex].gameSettings;
    formTitleElement.id = "gameSettingID";

    const difficultyDiv: HTMLDivElement = document.createElement("div");
    difficultyDiv.classList.add("field-group-1");

    const difficultyLabel: HTMLLabelElement = document.createElement("label");
    difficultyLabel.classList.add("label");
    difficultyLabel.innerText = languageData[languageIndex].difficultyLabelText;
    difficultyLabel.id = "difficultyLabelID";

    const difficultySettingDiv: HTMLDivElement = document.createElement("div");
    difficultySettingDiv.classList.add("field-group-2");

    const difficultyLeftButton: HTMLButtonElement =
      document.createElement("button");
    difficultyLeftButton.classList.add("left-arrow-button");
    difficultyLeftButton.type = "button";
    difficultyLeftButton.addEventListener("click", reduceDifficulty);

    const difficultyOptionText: HTMLLabelElement =
      document.createElement("label");
    difficultyOptionText.classList.add("option-label");
    difficultyOptionText.innerText =
      languageData[languageIndex].difficultyOptions[difficultyIndex];
    difficultyOptionText.id = "difficultyOptionTextID";

    const difficultyRightButton: HTMLButtonElement =
      document.createElement("button");
    difficultyRightButton.classList.add("right-arrow-button");
    difficultyRightButton.type = "button";
    difficultyRightButton.addEventListener("click", increaseDifficulty);

    difficultySettingDiv.append(
      difficultyLeftButton,
      difficultyOptionText,
      difficultyRightButton
    );
    difficultyDiv.append(difficultyLabel, difficultySettingDiv);

    const languageDiv: HTMLDivElement = document.createElement("div");
    languageDiv.classList.add("field-group-1");

    const languageLabel: HTMLLabelElement = document.createElement("label");
    languageLabel.classList.add("label");
    languageLabel.innerText = languageData[languageIndex].languageLabelText;
    languageLabel.id = "languageLabelID";

    const languageSettingDiv: HTMLDivElement = document.createElement("div");
    languageSettingDiv.classList.add("field-group-2");

    const languageLeftButton: HTMLButtonElement =
      document.createElement("button");
    languageLeftButton.classList.add("left-arrow-button");
    languageLeftButton.type = "button";
    languageLeftButton.addEventListener("click", previousLanguage);

    const languageOptionText: HTMLLabelElement =
      document.createElement("label");
    languageOptionText.classList.add("option-label");
    languageOptionText.innerText = languageOptions[languageIndex];
    languageOptionText.id = "languageOptionTextID";

    const languageRightButton: HTMLButtonElement =
      document.createElement("button");
    languageRightButton.classList.add("right-arrow-button");
    languageRightButton.type = "button";
    languageRightButton.addEventListener("click", nextLanguage);

    languageSettingDiv.append(
      languageLeftButton,
      languageOptionText,
      languageRightButton
    );
    languageDiv.append(languageLabel, languageSettingDiv);

    const deckDiv: HTMLDivElement = document.createElement("div");
    deckDiv.classList.add("field-group-1");

    const deckLabel: HTMLLabelElement = document.createElement("label");
    deckLabel.classList.add("label");
    deckLabel.innerText = languageData[languageIndex].themeLabelText;
    deckLabel.id = "deckLabelID";

    const deckSettingDiv: HTMLDivElement = document.createElement("div");
    deckSettingDiv.classList.add("field-group-2");

    const deckLeftButton: HTMLButtonElement = document.createElement("button");
    deckLeftButton.classList.add("left-arrow-button");
    deckLeftButton.type = "button";
    deckLeftButton.addEventListener("click", previousDeck);

    const deckOptionText: HTMLLabelElement = document.createElement("label");
    deckOptionText.classList.add("option-label");
    deckOptionText.innerText = deckOptions[deckIndex];
    deckOptionText.id = "deckOptionTextID";

    const deckRightButton: HTMLButtonElement = document.createElement("button");
    deckRightButton.classList.add("right-arrow-button");
    deckRightButton.type = "button";
    deckRightButton.addEventListener("click", nextDeck);

    deckSettingDiv.append(deckLeftButton, deckOptionText, deckRightButton);
    deckDiv.append(deckLabel, deckSettingDiv);

    const musicDiv: HTMLDivElement = document.createElement("div");
    musicDiv.classList.add("field-group-1");

    const musicLabel: HTMLLabelElement = document.createElement("label");
    musicLabel.classList.add("label");
    musicLabel.innerText = languageData[languageIndex].musicLabelText;
    musicLabel.id = "musicLabelID";

    const musicSettingDiv: HTMLDivElement = document.createElement("div");
    musicSettingDiv.classList.add("field-group-2");

    const musicLeftButton: HTMLButtonElement = document.createElement("button");
    musicLeftButton.classList.add("left-arrow-button");
    musicLeftButton.type = "button";
    musicLeftButton.addEventListener("click", toggleMusic);

    const musicOptionText: HTMLLabelElement = document.createElement("label");
    musicOptionText.classList.add("option-label");
    musicOptionText.innerText =
      languageData[languageIndex].musicOptions[musicIndex];
    musicOptionText.id = "musicOptionTextID";

    const musicRightButton: HTMLButtonElement =
      document.createElement("button");
    musicRightButton.classList.add("right-arrow-button");
    musicRightButton.type = "button";
    musicRightButton.addEventListener("click", toggleMusic);

    musicSettingDiv.append(musicLeftButton, musicOptionText, musicRightButton);
    musicDiv.append(musicLabel, musicSettingDiv);

    const playButton: HTMLButtonElement = document.createElement("button");
    playButton.classList.add("play-button");
    playButton.type = "button";
    playButton.innerText = languageData[languageIndex].playButtonText;
    playButton.addEventListener("click", playGame);
    playButton.id = "playButtonID";

    formElement.append(
      formTitleElement,
      deckDiv,
      difficultyDiv,
      languageDiv,
      musicDiv,
      playButton
    );
    mainElement.append(title, formElement);
    body.append(mainElement);
  }
}

function reduceDifficulty(): void {
  playButtonSoundEffect(difficultyIndex > 0);

  if (difficultyIndex > 0) {
    difficultyIndex--;
    const difficultyOptionText: HTMLElement | null = document.getElementById(
      "difficultyOptionTextID"
    );
    if (difficultyOptionText) {
      difficultyOptionText.innerText =
        languageData[languageIndex].difficultyOptions[difficultyIndex];
    }
  }
}

function increaseDifficulty(): void {
  playButtonSoundEffect(
    difficultyIndex < languageData[languageIndex].difficultyOptions.length - 1
  );

  if (
    difficultyIndex <
    languageData[languageIndex].difficultyOptions.length - 1
  ) {
    difficultyIndex++;
    const difficultyOptionText: HTMLElement | null = document.getElementById(
      "difficultyOptionTextID"
    );
    if (difficultyOptionText) {
      difficultyOptionText.innerText =
        languageData[languageIndex].difficultyOptions[difficultyIndex];
    }
  }
}

function previousLanguage(): void {
  playButtonSoundEffect(languageIndex > 0);
  if (languageIndex > 0) {
    languageIndex--;
    const languageOptionText: HTMLElement | null = document.getElementById(
      "languageOptionTextID"
    );
    if (languageOptionText) {
      languageOptionText.innerText = languageOptions[languageIndex];
      updateMainMenuTexts();
    }
  }
}

function nextLanguage(): void {
  playButtonSoundEffect(languageIndex < languageOptions.length - 1);

  buttonPressSound.play();
  if (languageIndex < languageOptions.length - 1) {
    languageIndex++;
    const languageOptionText: HTMLElement | null = document.getElementById(
      "languageOptionTextID"
    );
    if (languageOptionText) {
      languageOptionText.innerText = languageOptions[languageIndex];
      updateMainMenuTexts();
    }
  }
}

function previousDeck(): void {
  playButtonSoundEffect(deckIndex > 0);
  if (deckIndex > 0) {
    deckIndex--;
    const deckOptionText: HTMLElement | null =
      document.getElementById("deckOptionTextID");
    if (deckOptionText) {
      deckOptionText.innerText = deckOptions[deckIndex];
    }
  }
}

function nextDeck(): void {
  playButtonSoundEffect(deckIndex < deckData.length - 1);

  if (deckIndex < deckOptions.length - 1) {
    deckIndex++;
    const deckOptionText: HTMLElement | null =
      document.getElementById("deckOptionTextID");
    if (deckOptionText) {
      deckOptionText.innerText = deckOptions[deckIndex];
    }
  }
}

function updateMainMenuTexts(): void {
  updateText("gameSettingID", languageData[languageIndex].gameSettings);
  updateText(
    "difficultyLabelID",
    languageData[languageIndex].difficultyLabelText
  );
  updateText(
    "difficultyOptionTextID",
    languageData[languageIndex].difficultyOptions[difficultyIndex]
  );
  updateText("languageLabelID", languageData[languageIndex].languageLabelText);
  updateText("deckLabelID", languageData[languageIndex].themeLabelText);
  updateText("playButtonID", languageData[languageIndex].playButtonText);
  updateText("musicLabelID", languageData[languageIndex].musicLabelText);
  updateText(
    "musicOptionTextID",
    languageData[languageIndex].musicOptions[musicIndex]
  );
}

function updateText(id: string, text: string): void {
  const element: HTMLElement | null = document.getElementById(id);
  // const languageOptionText: HTMLElement | null = document.getElementById("languageOptionTextID");
  // if (element && languageIndex != 5 && languageOptionText) {
  if (element) {
    element.innerText = text;
    // element.style.fontWeight = "400";
    // element.style.fontSize = "1rem";
    // element.style.fontStyle = "normal";
    // languageOptionText.style.fontSize = "1rem";
    // languageOptionText.style.fontWeight = "400";
  }
  // else if (element && languageIndex == 5 && languageOptionText) {
  //   element.innerText = text;
  //   element.style.fontWeight = "700";
  //   element.style.fontSize = "1.5rem";
  //   element.style.textTransform = "translateY(-20px)";
  //   languageOptionText.style.fontSize = "1.5rem";
  //   languageOptionText.style.fontWeight = "700";
  // }
}
