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
  musicLabelText: string;
  musicOptions: string[];
  victoryMessage1Text: string;
  victoryMessage2Text: string;
  victoryMessage3Text: string;
  difficultyOptions: string[];
  ruleTitle: string;
  ruleText: string;
  timerTitle: string;
  timerText: string;
  clickTitle: string;
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
    musicLabelText: "Music",
    musicOptions: ["On", "Off"],
    victoryMessage1Text: "Congrats!",
    victoryMessage2Text: "You found all the matches in ",
    victoryMessage3Text: "seconds!",
    ruleTitle: "How to Play",
    ruleText: "Click on two cards to find matches.",
    timerTitle: "Time",
    timerText: "sec",
    clickTitle: "Clicks",
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
    musicLabelText: "Musique",
    musicOptions: ["Activée", "Désactivée"],
    victoryMessage1Text: "Félicitations !",
    victoryMessage2Text: "Tu as trouvé toutes les paires en ",
    victoryMessage3Text: "secondes !",
    ruleTitle: "Règles",
    ruleText: "Clique sur deux cartes pour trouver les paires.",
    timerTitle: "Temps",
    timerText: "s",
    clickTitle: "Clics",
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
    musicLabelText: "Musica",
    musicOptions: ["Attiva", "Disattiva"],
    victoryMessage1Text: "Bravo!",
    victoryMessage2Text: "Hai trovato tutte le coppie di carte in ",
    victoryMessage3Text: "secondi!",
    ruleTitle: "Regole",
    ruleText: "Clicca su due carte per scoprire le coppie.",
    timerTitle: "Tempo",
    timerText: "s",
    clickTitle: "Clic",
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
    musicLabelText: "Música",
    musicOptions: ["Ligada", "Desligada"],
    victoryMessage1Text: "Parabéns!",
    victoryMessage2Text: "Você encontrou todos os pares de cartas in ",
    victoryMessage3Text: "segundos!",
    ruleTitle: "Regras",
    ruleText: "Clique em duas cartas para encontrar os pares.",
    timerTitle: "Tempo",
    timerText: "s",
    clickTitle: "Cliques",
  },
  //====================================
  //============== RUSSIAN =============
  //====================================
  {
    difficultyOptions: ["Лёгкий", "Средний", "Сложный", "Эксперт"],
    gameSettings: "Настройки",
    playButtonText: "Играть",
    replayButtonText: "Играть",
    menuButtonText: "Меню",
    themeLabelText: "Тема",
    difficultyLabelText: "Сложность",
    languageLabelText: "Язык",
    musicLabelText: "Музыка",
    musicOptions: ["Вкл", "Выкл"],
    victoryMessage1Text: "Поздравляем!",
    victoryMessage2Text: "Вы нашли все пары карточек",
    victoryMessage3Text: "секунд!",
    ruleTitle: "Правила",
    ruleText: "Нажми на две карты, чтобы найти пары.",
    timerTitle: "время",
    timerText: "s",
    clickTitle: "щелчки",
  },
  //====================================
  //=============== HINDI ==============
  //====================================
  {
    difficultyOptions: ["आसान", "मध्यम", "कठिन", "बहुत मुश्किल"],
    gameSettings: "सेटिंग्स",
    playButtonText: "खेलें",
    replayButtonText: "फिर से खेलें",
    menuButtonText: "मेनू",
    themeLabelText: "थीम",
    difficultyLabelText: "कठिनाई",
    languageLabelText: "भाषा",
    musicLabelText: "संगीत",
    musicOptions: ["चालू", "बंद"],
    victoryMessage1Text: "बधाई हो!",
    victoryMessage2Text: "आपने",
    victoryMessage3Text: " सेकंड में कार्ड के सभी जोड़े ढूंढ लिए!",
    ruleTitle: "नियम",
    ruleText: "जोड़ी खोजने के लिए दो कार्ड पर क्लिक करें।.",
    timerTitle: "समय",
    timerText: "s",
    clickTitle: "क्लिक",
  },
];
