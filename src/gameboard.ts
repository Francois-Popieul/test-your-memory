import { languageData } from "./language-data.js";
import { stopAudio, mainMenuMusic, deckMusics, musicIsOn } from "./audio.js";
import { images, deckData } from "./decks.js";
import { activateTimer, stopTimer, startTime } from "./timer.js";
import {
  deckIndex,
  languageIndex,
  difficultyIndex,
  displayMainMenu,
} from "./main-menu.js";

const body: HTMLElement | null = document.querySelector("body");

export function playGame(event: MouseEvent): void {
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
