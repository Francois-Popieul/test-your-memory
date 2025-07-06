let pairNumber: number = 4;
let languageIndex: number = 0;
let deckIndex: number = 2;
const images: Array<string> = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7", "image-8", "image-9"];
const pairs: Array<string> = [...images, ...images];
pairs.sort(() => Math.random() - 0.5);
const body: HTMLElement | null = document.querySelector("body");

const difficultyOptions: string[] = [];
const languageOptions: string[] = ["Français","English","Italiano","português"];
const deckOptions: string[] = ["Street Fighter", "Mortal Kombat", "Zelda"];

const deckData: any = [
    {
        deckName: "mortal-kombat",
        backgroundImagePath: "../images/backgrounds/sf-bg-1.jpg",
        cardBack: "../images/mk-cardback.svg",
    },

    {
        deckName: "street-fighter",
        backgroundImagePath: "../images/backgrounds/sf-bg-2.jpg",
        cardBack: "../images/ssf-cardback.svg",
    },

    {
        deckName: "zelda",
        backgroundImagePath: "../images/backgrounds/sf-bg-3.jpg",
        cardBack: "../images/zelda-cardback.svg",
    }
]

const languageData: any[] = [
    //====================================
    //============== FRENCH ==============
    //====================================
    {
        playButtonText: "Jouer",
        replayButtonText: "Rejouer",
        themeLabelText: "Thème",
        difficultyLabelText: "Difficulté",
        languageLabelText: "Langue",
        victoryMessage1Text: "Félicitations !",
        victoryMessage2Text: "Tu as trouvé toutes les paires !",
    },
    //====================================
    //============= ENGLISH ==============
    //====================================
    {
        playButtonText: "Play",
        replayButtonText: "Play again",
        themeLabelText: "Theme",
        difficultyLabelText: "Difficulty",
        languageLabelText: "Language",
        victoryMessage1Text: "Congratulations!",
        victoryMessage2Text: "You found all the card pairs!",
    },
    //====================================
    //============= ITALIAN ==============
    //====================================
    {
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
        playButtonText: "Jogar",
        replayButtonText: "Jogar",
        themeLabelText: "Tema",
        difficultyLabelText: "Dificuldade",
        languageLabelText: "Language",          // update required
        victoryMessage1Text: "Parabéns!",
        victoryMessage2Text: "Você encontrou todos os pares de cartas!",

    },
    //====================================
    //============== RUSSIAN =============
    //====================================
    {
        playButtonText: "Играть",
        replayButtonText: "Играть",
        themeLabelText: "Тема",
        difficultyLabelText: "Сложность",
        languageLabelText: "Language",          // update required
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
        formTitleElement.innerText = "Game Settings";
        const difficultyDiv: HTMLDivElement = document.createElement("div");
        difficultyDiv.classList.add("field-group-1");
        const difficultyLabel: HTMLLabelElement = document.createElement("label");
        difficultyLabel.classList.add("label");
        difficultyLabel.innerText = languageData[languageIndex].difficultyLabelText;
        const difficultySettingDiv: HTMLDivElement = document.createElement("div");
        difficultySettingDiv. classList.add("field-group-2");
        const difficultyLeftButton: HTMLButtonElement = document.createElement("button");
        difficultyLeftButton.classList.add("left-arrow-button");
        difficultyLeftButton.addEventListener("click", reduceDifficulty);
        const difficultyOptionText: HTMLLabelElement = document.createElement("label");
        difficultyOptionText.classList.add("option-label");
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
        languageSettingDiv. classList.add("field-group-2");
        const languageLeftButton: HTMLButtonElement = document.createElement("button");
        languageLeftButton.classList.add("left-arrow-button");
        const languageOptionText: HTMLLabelElement = document.createElement("label");
        languageOptionText.classList.add("option-label");
        const languageRightButton: HTMLButtonElement = document.createElement("button");
        languageRightButton.classList.add("right-arrow-button");        
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
        const deckOptionText: HTMLLabelElement = document.createElement("label");
        deckOptionText.classList.add("option-label");
        const deckRightButton: HTMLButtonElement = document.createElement("button");
        deckRightButton.classList.add("right-arrow-button");        
        deckSettingDiv.append(deckLeftButton, deckOptionText, deckRightButton);
        deckDiv.append(deckLabel, deckSettingDiv);



        playButton.classList.add("play-button");
        playButton.innerText = languageData[languageIndex].playButtonText;
        playButton.addEventListener("click", playGame);
        formElement.append(formTitleElement, difficultyDiv, languageDiv, deckDiv, playButton);
        mainElement.append( title, formElement)
        body.append(mainElement);
    }

    function reduceDifficulty() {
        if (pairNumber > 4) {
            pairNumber--;
        }
    }

    function increaseDifficulty() {
        if (pairNumber < 9) {
            pairNumber++;
        }
    }

    function nextLanguage() {
        if (languageIndex > 0) {
            languageIndex--;
        }
    }

    function previousLanguage() {
        if (languageIndex < languageOptions.length) {
            languageIndex++;
        }
    }

    function nextDeck() {
        if (deckIndex > 0) {
            deckIndex--;
        }
        
    }

    function previousDeck() {
        if (deckIndex < deckOptions.length) {
            deckIndex++;
        }
    }
}

function playGame(event: MouseEvent): void {
    event.preventDefault();
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
                if (foundPairs == 9) {
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