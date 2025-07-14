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
import { activateTimer, timerStarted, stopTimer, startTime } from "./timer.js";

let difficultyIndex: number = 0;
export let languageIndex: number = 0;
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

const mainElement: HTMLElement = document.createElement("main");
mainElement.classList.add("splash-screen");
const logoContainer: HTMLDivElement = document.createElement("div");
logoContainer.classList.add("logo-container");
const logo: HTMLImageElement = document.createElement("img");
logo.src = "../assets/images/popeye-productions.png";
logo.classList.add("logo");
const flash: HTMLDivElement = document.createElement("div");
flash.classList.add("flash");
const present: HTMLParagraphElement = document.createElement("p");
present.innerText = "PRESENT";
present.classList.add("present");
const gameTitle: HTMLParagraphElement = document.createElement("p");
gameTitle.innerText = "Test Your Memory";
gameTitle.classList.add("game-title");
const clickToPlay: HTMLParagraphElement = document.createElement("p");
clickToPlay.innerText = "CLICK TO PLAY";
clickToPlay.classList.add("click-to-play");
logoContainer.append(logo);
mainElement.append(logoContainer, present, gameTitle, flash, clickToPlay);
body?.append(mainElement);
const myDocument = document;
document.addEventListener("click", displayMainMenu);

setTimeout(() => {
  logo.classList.add("visible");
}, 500);

setTimeout(() => {
  present.classList.add("visible");
}, 2000);

setTimeout(() => {
  gameTitle.classList.add("visible");
}, 3000);

setTimeout(() => {
  flash.style.opacity = "0.8";

  setTimeout(() => {
    flash.style.opacity = "0";
  }, 100);
}, 4000);

setTimeout(() => {
  clickToPlay.classList.add("visible");
}, 5000);

setTimeout(() => {
  clickToPlay.classList.add("blinking");
}, 5100);

function displayMainMenu(): void {
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

function playGame(event: MouseEvent): void {
  event.preventDefault();
  stopAudio(mainMenuMusic);
  if (musicIsOn) {
    deckMusics[deckIndex].play();
  }
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
    if (languageIndex != 5) {
      timerValue.innerText = "0";
    } else {
      timerValue.innerText = "०";
    }
    timerValue.id = "timerID";
    const clickNumberTitle: HTMLParagraphElement = document.createElement("h2");
    clickNumberTitle.classList.add("information-title");
    clickNumberTitle.innerText = languageData[languageIndex].clickTitle;
    const clickNumberValue: HTMLParagraphElement = document.createElement("p");
    clickNumberValue.classList.add("information");
    if (languageIndex != 5) {
      clickNumberValue.innerText = "0";
    } else {
      clickNumberValue.innerText = "०";
    }
    clickNumberValue.id = "clickNumberValueID";
    const menuButton: HTMLButtonElement = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.type = "button";
    menuButton.innerText = languageData[languageIndex].menuButtonText;
    menuButton.addEventListener("click", displayMainMenu);
    infoFlexContainer.append(
      menuButton,
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
    displayCards();
  }

  function addCards(deckFlexContainer: HTMLDivElement, pairs: string[]): void {
    pairs.forEach((card) => {
      if (body) {
        const cardContainer: HTMLDivElement = document.createElement("div");
        cardContainer.classList.add("card-container");
        const innerCard: HTMLDivElement = document.createElement("div");
        innerCard.classList.add(
          "card-inner",
          deckData[deckIndex].deckName,
          card
        );
        const cardBack: HTMLDivElement = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.addEventListener("click", cardClicked);
        cardBack.style.backgroundImage = `url(${deckData[deckIndex].cardBack})`;
        const cardFront: HTMLDivElement = document.createElement("div");
        cardFront.classList.add("card-front", card);
        innerCard.append(cardBack, cardFront);
        cardContainer.append(innerCard);
        deckFlexContainer.append(cardContainer);
      }
    });
  }

  function displayCards(): void {
    setTimeout(() => {
      const cards = document.querySelectorAll(".card-container");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("card-distribution");
        }, index * 200);
      });
    }, 100);
  }

  function cardClicked(event: MouseEvent): void {
    activateTimer();
    if (deckIsLocked) {
      return;
    }
    const targetCardBack: HTMLElement = event.target as HTMLElement;
    const cardContainer = targetCardBack.closest(
      ".card-container"
    ) as HTMLElement;
    cardContainer.classList.toggle("flipped");
    const targetCardFront: HTMLElement = targetCardBack.closest(".card-inner")
      ?.children[1] as HTMLElement;
    const clickNumberValue: HTMLElement | null =
      document.getElementById("clickNumberValueID");
    if (clickNumberValue && !deckIsLocked) {
      totalPlayerClicks++;
      if (languageIndex != 5) {
        clickNumberValue.innerText = totalPlayerClicks.toString();
      } else {
        clickNumberValue.innerText =
          totalPlayerClicks.toLocaleString("hi-u-nu-deva");
      }
    }
    if (clicks == 0) {
      firstClickedElement = targetCardBack;
      targetCardBack.removeEventListener("click", cardClicked);
      firstClickedCard = targetCardFront.classList[1].toString();
      clicks++;
      return;
    } else if (clicks == 1) {
      deckIsLocked = true;
      secondClickedElement = targetCardBack;
      targetCardBack.removeEventListener("click", cardClicked);
      secondClickedCard = targetCardFront.classList[1].toString();
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

  function flipBackCards(): void {
    if (firstClickedElement) {
      firstClickedElement.addEventListener("click", cardClicked);
      const cardContainer = firstClickedElement.closest(
        ".card-container"
      ) as HTMLElement;
      cardContainer.classList.toggle("flipped");
    }
    if (secondClickedElement) {
      secondClickedElement.addEventListener("click", cardClicked);
      const cardContainer = secondClickedElement.closest(
        ".card-container"
      ) as HTMLElement;
      cardContainer.classList.toggle("flipped");
    }
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

function announceVictory(): void {
  const mainContainer: HTMLElement | null = document.querySelector(
    ".game-main-container"
  );
  const deck: HTMLElement | null = document.querySelector(
    ".deck-flex-container"
  );
  deck?.remove();
  const victoryMessage: HTMLParagraphElement = document.createElement("p");
  const elapsedTime: number = Math.floor((Date.now() - startTime) / 1000);
  let completevictoryMessage: string = "";
  if (languageIndex != 5) {
    completevictoryMessage = `${languageData[languageIndex].victoryMessage1Text}\n${languageData[languageIndex].victoryMessage2Text} ${elapsedTime} ${languageData[languageIndex].victoryMessage3Text}`;
  } else {
    completevictoryMessage = `${
      languageData[languageIndex].victoryMessage1Text
    }\n${
      languageData[languageIndex].victoryMessage2Text
    } ${elapsedTime.toLocaleString("hi-u-nu-deva")} ${
      languageData[languageIndex].victoryMessage3Text
    }`;
  }
  victoryMessage.innerText = completevictoryMessage;
  victoryMessage.classList.add("victory-message");

  const buttonContainer: HTMLDivElement = document.createElement("div");
  buttonContainer.classList.add("button-flex-container");
  const replayButton: HTMLButtonElement = document.createElement("button");
  replayButton.classList.add("replay-button");
  replayButton.type = "button";
  replayButton.innerText = languageData[languageIndex].replayButtonText;
  replayButton.addEventListener("click", playGame);
  buttonContainer.append(replayButton);
  mainContainer?.append(victoryMessage, buttonContainer);
  stopTimer();
}
