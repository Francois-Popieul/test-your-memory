const difficulty: number = 9;
const deck: string = "mortal-kombat";
const images: Array<string> = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7", "image-8", "image-9"];
const pairs: Array<string> = [...images, ...images];
pairs.sort(() => Math.random() - 0.5);

displayMainMenu();

function displayMainMenu(event?: MouseEvent): void {
    event?.preventDefault();
    const body: HTMLElement | null = document.querySelector("body");
    const main: HTMLElement | null = document.querySelector("main");
    if (main) {
        main.remove();
    }
    if (body) {
        const mainElement: HTMLElement = document.createElement("main");
        mainElement.classList.add("main-container");
        const title: HTMLHeadingElement = document.createElement("h1");
        title.innerText = "Test Your Memory";
        title.style.fontSize = "5rem";
        title.style.fontWeight = "700";
        title.style.textAlign = "center";
        const formElement: HTMLFormElement = document.createElement("form");
        formElement.classList.add("form");
        const playButton: HTMLButtonElement = document.createElement("button");
        playButton.classList.add("play-button");
        playButton.innerText = "JOUER";
        playButton.addEventListener("click", playGame);
        formElement.append(playButton);
        mainElement.append(title, formElement)
        body.append(mainElement);
    }
}

function playGame(event: MouseEvent): void {
    event.preventDefault();
    let clicks: number = 0;
    let foundPairs: number = 0;
    let boardLocked: boolean = false;
    let firstClickedCard: string | null = null;
    let secondClickedCard: string | null = null;
    let firstClickedElement: HTMLElement | null = null;
    let secondClickedElement: HTMLElement | null = null;
    
    const body: HTMLElement | null = document.querySelector("body");
    const main: HTMLElement | null = document.querySelector("main");

    if (body && main) {
        main.remove();
        const mainElement: HTMLElement = document.createElement("main");
        mainElement.classList.add("main-container");
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
                const spanElement: HTMLSpanElement = document.createElement("span");
                spanElement.classList.add(deck, card, "hidden");
                spanElement.addEventListener("click", cardClicked);
                cardContainer.append(spanElement);
                flexContainer.append(cardContainer);
            }
        })
    }

    function cardClicked(event: Event): void {
        if (boardLocked) {
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
            boardLocked = true;
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
                boardLocked = false;
                return;
            }
            else {
                console.log("Dommage !");
                setTimeout(flipBackCards, 1000)
                clicks = 0;
                return;
            }
        }

        function flipBackCards() {
            firstClickedElement?.addEventListener("click", cardClicked);
            secondClickedElement?.addEventListener("click", cardClicked);
            firstClickedElement?.classList.toggle("hidden");
            secondClickedElement?.classList.toggle("hidden");
            firstClickedElement = null;
            secondClickedElement = null;
            boardLocked = false;
        }

        function announceVictory() {
            const mainContainer: HTMLElement | null = document.querySelector(".main-container");
            const deck: HTMLElement | null = document.querySelector(".flex-container");
            deck?.remove();
            const victoryMessage1: HTMLParagraphElement = document.createElement("p");
            victoryMessage1.innerText = "Félicitations !";
            victoryMessage1.style.color = "white";
            victoryMessage1.style.fontSize = "5rem";
            victoryMessage1.style.color = "white";
            victoryMessage1.style.fontWeight = "700";
            victoryMessage1.style.textAlign = "center";
            const victoryMessage2: HTMLParagraphElement = document.createElement("p");
            victoryMessage2.innerText = "Tu as trouvé toutes les paires !";
            victoryMessage2.style.color = "white";
            victoryMessage2.style.fontSize = "5rem";
            victoryMessage2.style.color = "white";
            victoryMessage2.style.fontWeight = "700";
            victoryMessage2.style.textAlign = "center";
            const replayButton: HTMLButtonElement = document.createElement("button");
            replayButton.classList.add("play-button");
            replayButton.innerText = "Rejouer";
            replayButton.addEventListener("click", displayMainMenu);
            mainContainer?.append(victoryMessage1, victoryMessage2, replayButton);
        }
    }
}