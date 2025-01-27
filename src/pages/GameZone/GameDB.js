const basedPath = "/assets/gameImages/buttons/gameButtons/";
export const getLanguageGames = () => {
    return [
        {
            icon: basedPath + "spellingBee.svg",
            title: "Spelling Bee",
            //url: "/game/spelling-bee",
            url: "/game/spellingbee",
            textColor: "#000000",
            bgColor: "#F8DA22",
            bgDecoration: true,
            description:
                "You will be given a word and spell the word correctly.",
        },
        {
            icon: basedPath + "oddOneOut.svg",
            title: "Odd One Out",
            url: "/game/oddoneout",
            textColor: "#000000",
            bgColor: "#69E7FD",
            description: "Figure out which one is the odd one out.",
        },
        {
            icon: basedPath + "strawberry.svg",
            title: "Polar Pairing",
            url: "/game/polarpairing",
            textColor: "#000000",
            bgColor: "#FC716C",
            description: "Chose the antonym from the four options.",
        },
        {
            icon: basedPath + "book.svg",
            title: "Vocabulary Vortex",
            url: "/game/vocabVortex",
            textColor: "#000000",
            bgColor: "#4C88F8",
            description:
                "You will be given a word and spell the word correctly.",
        },
        {
            icon: basedPath + "spellingBee.svg",
            title: "Syllable Sorting",
            url: "/game/syllableSorting",
            textColor: "#000000",
            bgColor: "#9771EF",
        },
        {
            icon: basedPath + "storyBuilder.svg",
            title: "Definition Detective",
            url: "/game/definitionDetective",
            textColor: "#000000",
            bgColor: "#DA6301",
        },
        {
            icon: basedPath + "oddOneOut.svg",
            title: "Part of Speech",
            url: "/game/partofspeech",
            textColor: "#000000",
            bgColor: "#EAF7FD",
        },
        {
            icon: basedPath + "storyBuilder.svg",
            title: "Color Game",
            url: "/game/colorgame",
            textColor: "#000000",
            bgColor: "#769400",
        },
    ];
};

export const getMathGames = () => {
    return [
        {
            icon: basedPath + "animalAddition.svg",
            title: "Animal Addition",
            url: "/game/addition",
            textColor: "#269C9A",
            bgColor: "#DAF7F6",
        },
        {
            icon: basedPath + "subtractionSafari.svg",
            title: "Subtraction Safari",
            url: "/game/subtraction",
            textColor: "#769400",
            bgColor: "#DAF5B7",
        },
        {
            icon: basedPath + "multiplicationMadness.svg",
            title: "Multiplication Madness",
            url: "/game/multiplicationmadness",
            textColor: "#9771EF",
            bgColor: "#D5D1FF",
        },
        {
            icon: basedPath + "divisionDual.svg",
            title: "Division Duel",
            url: "game/DivisionDuel",
            textColor: "#DA6301",
            bgColor: "#FFDABA",
        },
        {
            icon: basedPath + "animalAddition.svg",
            title: "Car Counting",
            url: "/game/carcounting",
            textColor: "#5391AC",
            bgColor: "#EAF7FD",
        },
        {
            icon: basedPath + "subtractionSafari.svg",
            title: "Fruit Frenzy",
            url: "/game/fruitfrenzy",
            textColor: "#DA6301",
            bgColor: "#FFDABA",
        },
        {
            icon: basedPath + "multiplicationMadness.svg",
            title: "Monkey Madness",
            url: "/game/monkeymadness",
            textColor: "#769400",
            bgColor: "#DAF5B7",
        },
        {
            icon: basedPath + "divisionDual.svg",
            title: "Shape Shark",
            url: "/game/shapeshark",
            textColor: "#269C9A",
            bgColor: "#DAF7F6",
        },
    ];
};
