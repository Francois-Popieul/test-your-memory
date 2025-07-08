export const languageOptions: string[] = [
  "English",
  "Français",
  "Italiano",
  "Português",
  "Русский",
  "हिन्दी",
];

export interface LanguageData {
  gameSettings: string;
  playButtonText: string;
  replayButtonText: string;
  menuButtonText: string;
  themeLabelText: string;
  difficultyLabelText: string;
  languageLabelText: string;
  victoryMessage1Text: string;
  victoryMessage2Text: string;
  difficultyOptions: string[];
}

export const languageData: LanguageData[] = [
  //====================================
  //============= ENGLISH ==============
  //====================================
  {
    difficultyOptions: ["Easy", "Medium", "Hard", "Expert"],
    gameSettings: "Settings",
    playButtonText: "Play",
    replayButtonText: "Play again",
    menuButtonText: "Menu",
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
    menuButtonText: "Menu",
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
    menuButtonText: "Menu",
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
    replayButtonText: "Jogue novamente",
    menuButtonText: "Menu",
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
    menuButtonText: "меню",
    themeLabelText: "Тема",
    difficultyLabelText: "Сложность",
    languageLabelText: "Язык",
    victoryMessage1Text: "Поздравляем!",
    victoryMessage2Text: "Вы нашли все пары карточек!",
  },

  {
    difficultyOptions: ["आसान", "मध्यम", "कठिन", "विशेषज्ञ"],
    gameSettings: "सेटिंग्स",
    playButtonText: "खेलें",
    replayButtonText: "फिर से खेलें",
    menuButtonText: "मेनू",
    themeLabelText: "थीम",
    difficultyLabelText: "कठिनाई",
    languageLabelText: "भाषा",
    victoryMessage1Text: "बधाई हो!",
    victoryMessage2Text: "आपने सभी कार्ड जोड़ियाँ ढूंढ ली हैं!",
  },
];
