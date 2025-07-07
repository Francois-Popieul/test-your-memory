import { languageData } from "./data-language.js";
import { stopAudio, mainMenuMusic, deckMusics, buttonPressSound } from "./audio.js";

let difficultyIndex: number = 0;
let languageIndex: number = 0;
let deckIndex: number = 0;

const images: Array<string> = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7", "image-8", "image-9"];
const body: HTMLElement | null = document.querySelector("body");

const languageOptions: string[] = ["English", "Français", "Italiano", "Português", "Русский"];
const deckOptions: string[] = ["Mortal Kombat", "Street Fighter", "Zelda"];

const deckData: any = [
    {
        deckName: "mortal-kombat",
        backgroundImagePath: "../images/backgrounds/sf-bg-1.jpg",
        cardBack: "../images/mk-cardback.svg",
    },

    {
        deckName: "street-fighter",
        backgroundImagePath: "../images/backgrounds/sf-bg-2.jpg",
        cardBack: "../images/street-fighter-cardback.svg",
    },

    {
        deckName: "zelda",
        backgroundImagePath: "../images/backgrounds/sf-bg-3.jpg",
        cardBack: "../images/zelda-cardback.svg",
    }
]

displayMainMenu();

function displayMainMenu(event?: MouseEvent): void {
    event?.preventDefault();
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

        const difficultyLeftButton: HTMLButtonElement = document.createElement("button");
        difficultyLeftButton.classList.add("left-arrow-button");
        difficultyLeftButton.addEventListener("click", reduceDifficulty);

        const difficultyOptionText: HTMLLabelElement = document.createElement("label");
        difficultyOptionText.classList.add("option-label");
        difficultyOptionText.innerText = languageData[languageIndex].difficultyOptions[difficultyIndex];
        difficultyOptionText.style.alignContent = "center";
        difficultyOptionText.id = "difficultyOptionTextID";

        const difficultyRightButton: HTMLButtonElement = document.createElement("button");
        difficultyRightButton.classList.add("right-arrow-button");
        difficultyRightButton.addEventListener("click", increaseDifficulty);

        const playButton: HTMLButtonElement = document.createElement("button");
        difficultySettingDiv.append(difficultyLeftButton, difficultyOptionText, difficultyRightButton);
        difficultyDiv.append(difficultyLabel, difficultySettingDiv);

        const languageDiv: HTMLDivElement = document.createElement("div");
        languageDiv.classList.add("field-group-1");

        const languageLabel: HTMLLabelElement = document.createElement("label");
        languageLabel.classList.add("label");
        languageLabel.innerText = languageData[languageIndex].languageLabelText;
        languageLabel.id = "languageLabelID";

        const languageSettingDiv: HTMLDivElement = document.createElement("div");
        languageSettingDiv.classList.add("field-group-2");

        const languageLeftButton: HTMLButtonElement = document.createElement("button");
        languageLeftButton.classList.add("left-arrow-button");
        languageLeftButton.addEventListener("click", previousLanguage);

        const languageOptionText: HTMLLabelElement = document.createElement("label");
        languageOptionText.classList.add("option-label");
        languageOptionText.innerText = languageOptions[languageIndex];
        languageOptionText.style.alignContent = "center";
        languageOptionText.id = "languageOptionTextID";

        const languageRightButton: HTMLButtonElement = document.createElement("button");
        languageRightButton.classList.add("right-arrow-button");
        languageRightButton.addEventListener("click", nextLanguage);

        languageSettingDiv.append(languageLeftButton, languageOptionText, languageRightButton);
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
        deckLeftButton.addEventListener("click", previousDeck);

        const deckOptionText: HTMLLabelElement = document.createElement("label");
        deckOptionText.classList.add("option-label");
        deckOptionText.innerText = deckOptions[deckIndex];
        deckOptionText.style.alignContent = "center";
        deckOptionText.id = "deckOptionTextID";

        const deckRightButton: HTMLButtonElement = document.createElement("button");
        deckRightButton.classList.add("right-arrow-button");
        deckRightButton.addEventListener("click", nextDeck);

        deckSettingDiv.append(deckLeftButton, deckOptionText, deckRightButton);
        deckDiv.append(deckLabel, deckSettingDiv);

        playButton.classList.add("play-button");
        playButton.innerText = languageData[languageIndex].playButtonText;
        playButton.addEventListener("click", playGame);
        playButton.id = "playButtonID";

        formElement.append(formTitleElement, difficultyDiv, languageDiv, deckDiv, playButton);
        mainElement.append(title, formElement)
        body.append(mainElement);
    }

    function reduceDifficulty(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();

        if (difficultyIndex > 0) {
            difficultyIndex--;
            const difficultyOptionText: HTMLElement | null = document.getElementById("difficultyOptionTextID");
            if (difficultyOptionText) {
                difficultyOptionText.innerText = languageData[languageIndex].difficultyOptions[difficultyIndex];
            }
        }
    }

    function increaseDifficulty(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (difficultyIndex < languageData[languageIndex].difficultyOptions.length - 1) {
            difficultyIndex++;
            const difficultyOptionText: HTMLElement | null = document.getElementById("difficultyOptionTextID");
            if (difficultyOptionText) {
                difficultyOptionText.innerText = languageData[languageIndex].difficultyOptions[difficultyIndex];
            }
        }
    }

    function previousLanguage(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (languageIndex > 0) {
            languageIndex--;
            const languageOptionText: HTMLElement | null = document.getElementById("languageOptionTextID");
            if (languageOptionText) {
                languageOptionText.innerText = languageOptions[languageIndex];
                updateMainMenuTexts();
            }
        }
    }

    function nextLanguage(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (languageIndex < languageOptions.length - 1) {
            languageIndex++;
            const languageOptionText: HTMLElement | null = document.getElementById("languageOptionTextID");
            if (languageOptionText) {
                languageOptionText.innerText = languageOptions[languageIndex];
                updateMainMenuTexts();
            }
        }
    }

    function previousDeck(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (deckIndex > 0) {
            deckIndex--;
            const deckOptionText: HTMLElement | null = document.getElementById("deckOptionTextID");
            if (deckOptionText) {
                deckOptionText.innerText = deckOptions[deckIndex];
            }
        }

    }

    function nextDeck(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (deckIndex < deckOptions.length - 1) {
            deckIndex++;
            const deckOptionText: HTMLElement | null = document.getElementById("deckOptionTextID");
            if (deckOptionText) {
                deckOptionText.innerText = deckOptions[deckIndex];
            }
        }
    }

    function updateMainMenuTexts() {
        const formTitleElement: HTMLElement | null = document.getElementById("gameSettingID");
        if (formTitleElement) {
            formTitleElement.innerText = languageData[languageIndex].gameSettings;
        }
        const difficultyLabel: HTMLElement | null = document.getElementById("difficultyLabelID");
        if (difficultyLabel) {
            difficultyLabel.innerText = languageData[languageIndex].difficultyLabelText;
        }
        const difficultyOptionText: HTMLElement | null = document.getElementById("difficultyOptionTextID");
        if (difficultyOptionText) {
            difficultyOptionText.innerText = languageData[languageIndex].difficultyOptions[difficultyIndex];
        }
        const languageLabel: HTMLElement | null = document.getElementById("languageLabelID");
        if (languageLabel) {
            languageLabel.innerText = languageData[languageIndex].languageLabelText;
        }

        const deckLabel: HTMLElement | null = document.getElementById("deckLabelID");
        if (deckLabel) {
            deckLabel.innerText = languageData[languageIndex].themeLabelText;
        }
        const playButton: HTMLElement | null = document.getElementById("playButtonID");
        if (playButton) {
            playButton.innerText = languageData[languageIndex].playButtonText;
        }
    }
}

function playGame(event: MouseEvent): void {
    event.preventDefault();
    stopAudio(mainMenuMusic);
    buttonPressSound.play();
    deckMusics[deckIndex].play();
    const pairs: Array<string> = createGameDeck(images);
    pairs.sort(() => Math.random() - 0.5);
    let clicks: number = 0;
    let foundPairs: number = 0;
    let deckIsLocked: boolean = false;
    let firstClickedCard: string | null = null;
    let secondClickedCard: string | null = null;
    let firstClickedElement: HTMLElement | null = null;
    let secondClickedElement: HTMLElement | null = null;


    if (body) {
        body.innerHTML = "";
        const mainElement: HTMLElement = document.createElement("main");
        mainElement.classList.add("main-container");
        mainElement.style.backgroundImage = `url(${deckData[deckIndex].backgroundImagePath})`;
        const flexContainer: HTMLDivElement = document.createElement("div");
        flexContainer.classList.add("flex-container");
        mainElement.append(flexContainer);
        body.append(mainElement);
        addCards(flexContainer, pairs);
    }

    function addCards(flexContainer: HTMLDivElement, pairs: string[]) {
        pairs.forEach(card => {
            if (body) {
                const cardContainer: HTMLDivElement = document.createElement("div");
                cardContainer.classList.add("card-container");
                cardContainer.style.backgroundImage = `url(${deckData[deckIndex].cardBack})`;
                const spanElement: HTMLSpanElement = document.createElement("span");
                spanElement.classList.add(deckData[deckIndex].deckName, card, "hidden");
                spanElement.addEventListener("click", cardClicked);
                cardContainer.append(spanElement);
                flexContainer.append(cardContainer);
            }
        })
    }

    function cardClicked(event: Event): void {
        if (deckIsLocked) {
            return;
        }
        const target: HTMLElement = event.target as HTMLElement;
        if (clicks == 0) {
            firstClickedElement = target;
            target.removeEventListener("click", cardClicked);
            target.classList.toggle("hidden")
            firstClickedCard = target.classList[1].toString();
            clicks++;
            return;
        }
        else if (clicks == 1) {
            deckIsLocked = true;
            secondClickedElement = target;
            target.removeEventListener("click", cardClicked);
            target.classList.toggle("hidden")
            secondClickedCard = target.classList[1].toString();
            clicks = 2;

            if (clicks == 2 && firstClickedCard === secondClickedCard) {
                console.log("Bravo ! Tu as trouvé une paire !");
                clicks = 0;
                foundPairs++;
                if (foundPairs == pairs.length / 2) {
                    announceVictory();
                }
                deckIsLocked = false;
                return;
            }
            else {
                console.log("Dommage !");
                setTimeout(flipBackCards, 1000)
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

    function createGameDeck(cards: Array<string>): string[] {
        const gameCards: Array<string> = [];
        for (let index = 0; index < difficultyIndex + 5; index++) {
            gameCards.push(cards[index]);
        }
        const pairs: Array<string> = [...gameCards, ...gameCards];
        return pairs;
    }

    function announceVictory() {
        const mainContainer: HTMLElement | null = document.querySelector(".main-container");
        const deck: HTMLElement | null = document.querySelector(".flex-container");
        deck?.remove();
        const victoryMessage1: HTMLParagraphElement = document.createElement("p");
        victoryMessage1.innerText = languageData[languageIndex].victoryMessage1Text;
        victoryMessage1.classList.add("victory-message");
        const victoryMessage2: HTMLParagraphElement = document.createElement("p");
        victoryMessage2.innerText = languageData[languageIndex].victoryMessage2Text;
        victoryMessage2.classList.add("victory-message");
        const replayButton: HTMLButtonElement = document.createElement("button");
        replayButton.classList.add("play-button");
        replayButton.innerText = languageData[languageIndex].replayButtonText;
        replayButton.addEventListener("click", displayMainMenu);
        mainContainer?.append(victoryMessage1, victoryMessage2, replayButton);
    }
}