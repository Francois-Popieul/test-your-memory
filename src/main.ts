import { languageOptions, languageData } from "./language-data.js";
import {
  stopAudio,
  mainMenuMusic,
  deckMusics,
  buttonPressSound,
} from "./audio.js";
import { deckOptions, deckData } from "./decks.js";

let difficultyIndex: number = 0;
let languageIndex: number = 0;
let deckIndex: number = 0;

const images: Array<string> = [
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

const body: HTMLElement | null = document.querySelector("body");

displayMainMenu();

function displayMainMenu(): void {
   mainMenuMusic.play();
  stopAudio(deckMusics[deckIndex]);
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
    difficultyOptionText.style.alignContent = "center";
    difficultyOptionText.id = "difficultyOptionTextID";

    const difficultyRightButton: HTMLButtonElement =
      document.createElement("button");
    difficultyRightButton.classList.add("right-arrow-button");
    difficultyRightButton.type = "button";
    difficultyRightButton.addEventListener("click", increaseDifficulty);

    const playButton: HTMLButtonElement = document.createElement("button");
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
    languageOptionText.style.alignContent = "center";
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
    deckOptionText.style.alignContent = "center";
    deckOptionText.id = "deckOptionTextID";

    const deckRightButton: HTMLButtonElement = document.createElement("button");
    deckRightButton.classList.add("right-arrow-button");
    deckRightButton.type = "button";
    deckRightButton.addEventListener("click", nextDeck);

    deckSettingDiv.append(deckLeftButton, deckOptionText, deckRightButton);
    deckDiv.append(deckLabel, deckSettingDiv);

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
      playButton
    );
    mainElement.append(title, formElement);
    body.append(mainElement);
  }
}

function reduceDifficulty(): void {
  buttonPressSound.play();

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
  buttonPressSound.play();
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
  buttonPressSound.play();
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
  buttonPressSound.play();
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
  buttonPressSound.play();
  if (deckIndex < deckOptions.length - 1) {
    deckIndex++;
    const deckOptionText: HTMLElement | null =
      document.getElementById("deckOptionTextID");
    if (deckOptionText) {
      deckOptionText.innerText = deckOptions[deckIndex];
    }
  }
}

function updateMainMenuTexts() {
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
}

function updateText(id: string, text: string): void {
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    element.innerText = text;
  }
}

function playGame(event: MouseEvent): void {
  event.preventDefault();
  stopAudio(mainMenuMusic);
  deckMusics[deckIndex].play();
  const pairs: Array<string> = createGameDeck(images);
  pairs.sort(() => Math.random() - 0.5);

  let clicks: number = 0;
  let totalPlayerClicks: number = 0;
  let foundPairs: number = 0;
  let deckIsLocked: boolean = false;
  let firstClickedCard: string | null = null;
  let secondClickedCard: string | null = null;
  let firstClickedElement: HTMLElement | null = null;
  let secondClickedElement: HTMLElement | null = null;

  if (body) {
    body.innerHTML = "";
    const mainElement: HTMLElement = document.createElement("main");
    mainElement.classList.add("game-main-container");
    mainElement.style.backgroundImage = `url(${deckData[deckIndex].backgroundImagePath})`;
    const deckFlexContainer: HTMLDivElement = document.createElement("div");
    deckFlexContainer.classList.add("deck-flex-container");
    const infoFlexContainer: HTMLDivElement = document.createElement("div");
    infoFlexContainer.classList.add("info-flex-container");
    const ruleTitle: HTMLParagraphElement = document.createElement("h2");
    ruleTitle.classList.add("information-title");
    ruleTitle.innerText = languageData[languageIndex].ruleTitle;
    const ruleText: HTMLParagraphElement = document.createElement("p");
    ruleText.classList.add("information");
    ruleText.innerText = languageData[languageIndex].ruleText;
    const timerTitle: HTMLParagraphElement = document.createElement("h2");
    timerTitle.classList.add("information-title");
    timerTitle.innerText = languageData[languageIndex].timerTitle;
    const timerValue: HTMLParagraphElement = document.createElement("p");
    timerValue.classList.add("information");
    timerValue.innerText = "0";
    timerValue.id = "timerID";
    const clickNumberTitle: HTMLParagraphElement = document.createElement("h2");
    clickNumberTitle.classList.add("information-title");
    clickNumberTitle.innerText = languageData[languageIndex].clickTitle;
    const clickNumberValue: HTMLParagraphElement = document.createElement("p");
    clickNumberValue.classList.add("information");
    clickNumberValue.innerText = "0";
    clickNumberValue.id = "clickNumberValueID";
    infoFlexContainer.append(
      ruleTitle,
      ruleText,
      timerTitle,
      timerValue,
      clickNumberTitle,
      clickNumberValue
    );
    mainElement.append(deckFlexContainer);
    body.append(mainElement, infoFlexContainer);
    addCards(deckFlexContainer, pairs);
  }

  function addCards(deckFlexContainer: HTMLDivElement, pairs: string[]) {
    pairs.forEach((card) => {
      if (body) {
        const cardContainer: HTMLDivElement = document.createElement("div");
        cardContainer.classList.add("card-container");
        cardContainer.style.backgroundImage = `url(${deckData[deckIndex].cardBack})`;
        const spanElement: HTMLSpanElement = document.createElement("span");
        spanElement.classList.add(deckData[deckIndex].deckName, card, "hidden");
        spanElement.addEventListener("click", cardClicked);
        cardContainer.append(spanElement);
        deckFlexContainer.append(cardContainer);
      }
    });
  }

  function cardClicked(event: Event): void {
    activateTimer();
    if (deckIsLocked) {
      return;
    }
    const target: HTMLElement = event.target as HTMLElement;
    const clickNumberValue: HTMLElement | null =
      document.getElementById("clickNumberValueID");
    if (clickNumberValue && !deckIsLocked) {
      totalPlayerClicks++;
      clickNumberValue.innerText = totalPlayerClicks.toString();
    }
    if (clicks == 0) {
      firstClickedElement = target;
      target.removeEventListener("click", cardClicked);
      target.classList.toggle("hidden");
      firstClickedCard = target.classList[1].toString();
      clicks++;
      return;
    } else if (clicks == 1) {
      deckIsLocked = true;
      secondClickedElement = target;
      target.removeEventListener("click", cardClicked);
      target.classList.toggle("hidden");
      secondClickedCard = target.classList[1].toString();
      clicks = 2;

      if (clicks == 2 && firstClickedCard === secondClickedCard) {
        clicks = 0;
        foundPairs++;
        if (foundPairs == pairs.length / 2) {
          announceVictory();
          totalPlayerClicks = 0;
        }
        deckIsLocked = false;
        return;
      } else {
        setTimeout(flipBackCards, 1000);
        clicks = 0;
        return;
      }
    }
  }

  function flipBackCards() {
    firstClickedElement?.addEventListener("click", cardClicked);
    secondClickedElement?.addEventListener("click", cardClicked);
    firstClickedElement?.classList.toggle("hidden");
    secondClickedElement?.classList.toggle("hidden");
    firstClickedElement = null;
    secondClickedElement = null;
    deckIsLocked = false;
  }
}

function createGameDeck(cards: Array<string>): string[] {
  const gameCards: Array<string> = [];
  for (let index = 0; index < difficultyIndex + 6; index++) {
    gameCards.push(cards[index]);
  }
  const pairs: Array<string> = [...gameCards, ...gameCards];
  return pairs;
}

function announceVictory() {
  const mainContainer: HTMLElement | null = document.querySelector(
    ".game-main-container"
  );
  const deck: HTMLElement | null = document.querySelector(
    ".deck-flex-container"
  );
  deck?.remove();
  const victoryMessage1: HTMLParagraphElement = document.createElement("p");
  victoryMessage1.innerText = languageData[languageIndex].victoryMessage1Text;
  victoryMessage1.classList.add("victory-message");
  const victoryMessage2: HTMLParagraphElement = document.createElement("p");
  const victoryMessage2Text = `${languageData[languageIndex].victoryMessage2Text} ${Math.floor((Date.now() - startTime) / 1000)} ${languageData[languageIndex].victoryMessage3Text}`;
  victoryMessage2.innerText = victoryMessage2Text;
  victoryMessage2.classList.add("victory-message");
  const buttonContainer: HTMLDivElement = document.createElement("div");
  buttonContainer.classList.add("button-flex-container");
  const replayButton: HTMLButtonElement = document.createElement("button");
  replayButton.classList.add("replay-button");
  replayButton.type = "button";
  replayButton.innerText = languageData[languageIndex].replayButtonText;
  replayButton.addEventListener("click", playGame);
  const menuButton: HTMLButtonElement = document.createElement("button");
  menuButton.classList.add("menu-button");
  menuButton.type = "button";
  menuButton.innerText = languageData[languageIndex].menuButtonText;
  menuButton.addEventListener("click", displayMainMenu);
  buttonContainer.append(replayButton, menuButton);
  mainContainer?.append(victoryMessage1, victoryMessage2, buttonContainer);
  stopTimer();
}

let timerStarted = false;
let startTime: number;
let timerInterval: number;

function startTimer(timerDisplay: HTMLElement) {
  startTime = Date.now();
  timerInterval = window.setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    if (timerDisplay) {
      timerDisplay.innerText = `${elapsed} ${languageData[languageIndex].timerText}`;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerStarted = false;
}

function activateTimer(): HTMLElement | null {
  const timerDisplay: HTMLElement | null = document.getElementById("timerID");
  if (timerDisplay && !timerStarted) {
    startTimer(timerDisplay);
    timerStarted = true;
  }
  return timerDisplay;
}