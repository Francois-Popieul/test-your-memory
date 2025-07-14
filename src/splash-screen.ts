import { displayMainMenu } from "./main-menu.js";

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
