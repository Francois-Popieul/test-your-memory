export interface LanguageData {
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

export const languageData: LanguageData[] = [
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
        replayButtonText: "Jogue novamente",
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