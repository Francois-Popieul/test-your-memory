let difficultyIndex: number = 0;
let languageIndex: number = 0;
let deckIndex: number = 0;
const buttonPressSound = new Audio("../audio/button-press.wav");
const mortalKombatDeckMusic = new Audio("../audio/mortal-kombat.mp3");
const streetFighterDeckMusic = new Audio("../audio/street-fighter.mp3");
const zeldaDeckMusic = new Audio("../audio/zelda.mp3");
mortalKombatDeckMusic.loop = true;
streetFighterDeckMusic.loop = true;
zeldaDeckMusic.loop = true;
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

interface LanguageData {
    gameSettings: string,
    playButtonText: string,
    replayButtonText: string,
    themeLabelText: string,
    difficultyLabelText: string,
    languageLabelText: string,
    victoryMessage1Text: string,
    victoryMessage2Text: string,
    difficultyOptions: string[];
}

const languageData: LanguageData[] = [
    //====================================
    //============= ENGLISH ==============
    //====================================
    {
        difficultyOptions: ["Easy", "Medium", "Hard", "Expert"],
        gameSettings: "Settings",
        playButtonText: "Play",
        replayButtonText: "Play again",
        themeLabelText: "Theme",
        difficultyLabelText: "Difficulty",
        languageLabelText: "Language",
        victoryMessage1Text: "Congratulations!",
        victoryMessage2Text: "You found all the card pairs!",
    },
    //====================================
    //============== FRENCH ==============
    //====================================
    {
        difficultyOptions: ["Facile", "Intermédiaire", "Difficile", "Expert"],
        gameSettings: "Paramètres",
        playButtonText: "Jouer",
        replayButtonText: "Rejouer",
        themeLabelText: "Thème",
        difficultyLabelText: "Difficulté",
        languageLabelText: "Langue",
        victoryMessage1Text: "Félicitations !",
        victoryMessage2Text: "Tu as trouvé toutes les paires !",
    },
    //====================================
    //============= ITALIAN ==============
    //====================================
    {
        difficultyOptions: ["Facile", "Medio", "Difficile", "Esperto"],
        gameSettings: "Parametri",
        playButtonText: "Gioca",
        replayButtonText: "Nuovo gioco",
        themeLabelText: "Tema",
        difficultyLabelText: "Difficoltà",
        languageLabelText: "Lingua",
        victoryMessage1Text: "Bravo!",
        victoryMessage2Text: "Hai trovato tutte le coppie di carte!",
    },
    //====================================
    //============ PORTUGUESE ============
    //====================================
    {
        difficultyOptions: ["Fácil", "Intermediário", "Difícil", "Especialista"],
        gameSettings: "Configurações",
        playButtonText: "Jogar",
        replayButtonText: "Jogar",
        themeLabelText: "Tema",
        difficultyLabelText: "Dificuldade",
        languageLabelText: "Língua",
        victoryMessage1Text: "Parabéns!",
        victoryMessage2Text: "Você encontrou todos os pares de cartas!",

    },
    //====================================
    //============== RUSSIAN =============
    //====================================
    {
        difficultyOptions: ["Лёгкий", "Средний", "Сложный", "Эксперт"],
        gameSettings: "Настройки",
        playButtonText: "Играть",
        replayButtonText: "Играть",
        themeLabelText: "Тема",
        difficultyLabelText: "Сложность",
        languageLabelText: "Язык",
        victoryMessage1Text: "Поздравляем!",
        victoryMessage2Text: "Вы нашли все пары карточек!",
    }
]

displayMainMenu();

function displayMainMenu(event?: MouseEvent): void {
    event?.preventDefault();
    if (body) {
        body.innerHTML = "";
        const mainElement: HTMLElement = document.createElement("main");
        mainElement.classList.add("main-container");
        const title: HTMLHeadingElement = document.createElement("h1");
        title.innerText = "Test Your Memory";
        title.style.fontSize = "5rem";
        title.style.fontWeight = "700";
        title.style.textAlign = "center";
        const formElement: HTMLFormElement = document.createElement("form");
        formElement.classList.add("form");

        const formTitleElement: HTMLParagraphElement = document.createElement("p");
        formTitleElement.classList.add("form-title");
        formTitleElement.innerText = languageData[languageIndex].gameSettings;

        const difficultyDiv: HTMLDivElement = document.createElement("div");
        difficultyDiv.classList.add("field-group-1");

        const difficultyLabel: HTMLLabelElement = document.createElement("label");
        difficultyLabel.classList.add("label");
        difficultyLabel.innerText = languageData[languageIndex].difficultyLabelText;

        const difficultySettingDiv: HTMLDivElement = document.createElement("div");
        difficultySettingDiv.classList.add("field-group-2");

        const difficultyLeftButton: HTMLButtonElement = document.createElement("button");
        difficultyLeftButton.classList.add("left-arrow-button");
        difficultyLeftButton.addEventListener("click", reduceDifficulty);

        const difficultyOptionText: HTMLLabelElement = document.createElement("label");
        difficultyOptionText.classList.add("option-label");
        difficultyOptionText.id = "difficultyOptionText";
        difficultyOptionText.innerText = languageData[languageIndex].difficultyOptions[difficultyIndex];
        difficultyOptionText.style.alignContent = "center";

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
        const languageSettingDiv: HTMLDivElement = document.createElement("div");
        languageSettingDiv.classList.add("field-group-2");

        const languageLeftButton: HTMLButtonElement = document.createElement("button");
        languageLeftButton.classList.add("left-arrow-button");
        languageLeftButton.addEventListener("click", previousLanguage);

        const languageOptionText: HTMLLabelElement = document.createElement("label");
        languageOptionText.classList.add("option-label");
        languageOptionText.id = "languageOptionText";
        languageOptionText.innerText = languageOptions[languageIndex];
        languageOptionText.style.alignContent = "center";

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

        const deckSettingDiv: HTMLDivElement = document.createElement("div");
        deckSettingDiv.classList.add("field-group-2");

        const deckLeftButton: HTMLButtonElement = document.createElement("button");
        deckLeftButton.classList.add("left-arrow-button");
        deckLeftButton.addEventListener("click", previousDeck);

        const deckOptionText: HTMLLabelElement = document.createElement("label");
        deckOptionText.classList.add("option-label");
        deckOptionText.id = "deckOptionText";
        deckOptionText.innerText = deckOptions[deckIndex];
        deckOptionText.style.alignContent = "center";

        const deckRightButton: HTMLButtonElement = document.createElement("button");
        deckRightButton.classList.add("right-arrow-button");
        deckRightButton.addEventListener("click", nextDeck);

        deckSettingDiv.append(deckLeftButton, deckOptionText, deckRightButton);
        deckDiv.append(deckLabel, deckSettingDiv);



        playButton.classList.add("play-button");
        playButton.innerText = languageData[languageIndex].playButtonText;
        playButton.addEventListener("click", playGame);
        formElement.append(formTitleElement, difficultyDiv, languageDiv, deckDiv, playButton);
        mainElement.append(title, formElement)
        body.append(mainElement);
    }

    function reduceDifficulty(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();

        if (difficultyIndex > 0) {
            difficultyIndex--;
            const difficultyOptionText: HTMLElement | null = document.getElementById("difficultyOptionText");
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
            const difficultyOptionText: HTMLElement | null = document.getElementById("difficultyOptionText");
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
            const languageOptionText: HTMLElement | null = document.getElementById("languageOptionText");
            if (languageOptionText) {
                updateMainMenuTexts(languageOptionText);
            }
        }
    }

    function nextLanguage(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (languageIndex < languageOptions.length - 1) {
            languageIndex++;
            const languageOptionText: HTMLElement | null = document.getElementById("languageOptionText");
            if (languageOptionText) {
                updateMainMenuTexts(languageOptionText);
            }
        }
    }

    function previousDeck(event?: MouseEvent): void {
        event?.preventDefault();
        buttonPressSound.play();
        if (deckIndex > 0) {
            deckIndex--;
            const deckOptionText: HTMLElement | null = document.getElementById("deckOptionText");
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
            const deckOptionText: HTMLElement | null = document.getElementById("deckOptionText");
            if (deckOptionText) {
                deckOptionText.innerText = deckOptions[deckIndex];
            }
        }
    }

    function updateMainMenuTexts(languageOptionText: HTMLElement) {
        languageOptionText.innerText = languageOptions[languageIndex];
    }
}

function playGame(event: MouseEvent): void {
    event.preventDefault();
    buttonPressSound.play();
    switch (deckIndex) {
        case 0:
            mortalKombatDeckMusic.play();
            break;
        case 1:
            streetFighterDeckMusic.play();
            break;
        case 2:
            zeldaDeckMusic.play();
            break;
        default:
            break;
    }
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
        victoryMessage1.style.color = "white";
        victoryMessage1.style.fontSize = "5rem";
        victoryMessage1.style.color = "white";
        victoryMessage1.style.fontWeight = "700";
        victoryMessage1.style.textAlign = "center";
        const victoryMessage2: HTMLParagraphElement = document.createElement("p");
        victoryMessage2.innerText = languageData[languageIndex].victoryMessage2Text;
        victoryMessage2.style.color = "white";
        victoryMessage2.style.fontSize = "5rem";
        victoryMessage2.style.color = "white";
        victoryMessage2.style.fontWeight = "700";
        victoryMessage2.style.textAlign = "center";
        const replayButton: HTMLButtonElement = document.createElement("button");
        replayButton.classList.add("play-button");
        replayButton.innerText = languageData[languageIndex].replayButtonText;
        replayButton.addEventListener("click", displayMainMenu);
        mainContainer?.append(victoryMessage1, victoryMessage2, replayButton);
    }
}