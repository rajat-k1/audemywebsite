const basedPath = "/assets/gameImages/buttons/gameButtons/";
export const getLanguageGames = () => {
    return [
        {
            icon: basedPath + "spellingBee.svg",
            title: "Spelling Bee",
            //url: "/game/spelling-bee",
            url: "/game/spellingbee",
            textColor: "#000000",
            bgColor: "#F7DA21",
            bgDecoration: true,
            description:
                "You will be given a word and spell the word correctly.",
        },
        {
            icon: basedPath + "oddOneOut.svg",
            title: "Odd One Out",
            url: "/game/oddoneout",
            textColor: "#000000",
            bgColor: "#FF82E0",
            description: "Figure out which one is the odd one out.",
        },
        {
            icon: basedPath + "strawberry.svg",
            title: "Polar Pairing",
            url: "/game/polarpairing",
            textColor: "#000000",
            bgColor: "#FF9A22",
            description: "Chose the antonym from the four options.",
        },
        {
            icon: basedPath + "book.svg",
            title: "Vocabulary Vortex",
            url: "/game/vocabVortex",
            textColor: "#000000",
            bgColor: "#F56A6C",
            description:
                "You will be given a word and spell the word correctly.",
        },
        {
            icon: basedPath + "book.svg",
            title: "Syllable Sorting",
            url: "/game/syllableSorting",
            textColor: "#000000",
            bgColor: "#6B7FFF",
        },
        {
            icon: basedPath + "definition.svg",
            title: "Definition Detective",
            url: "/game/definitionDetective",
            textColor: "#000000",
            bgColor: "#28B8CA",
        },
        {
            icon: basedPath + "pos.svg",
            title: "Part of Speech",
            url: "/game/partofspeech",
            textColor: "#000000",
            bgColor: "#00C275",
        },
        {
            icon: basedPath + "color-game.svg",
            title: "Color Game",
            url: "/game/colorgame",
            textColor: "#000000",
            bgColor: "#0EA1EA",
        },
    ];
};

export const getMathGames = () => {
    return [
        {
            icon: basedPath + "addition.svg",
            title: "Animal Addition",
            url: "/game/addition",
            textColor: "#000000",
            bgColor: "#FF82E0",
        },
        {
            icon: basedPath + "subtraction.svg",
            title: "Subtraction Safari",
            url: "/game/subtraction",
            textColor: "#000000",
            bgColor: "#28B8CA",
        },
        {
            icon: basedPath + "mul.svg",
            title: "Multiplication Madness",
            url: "/game/multiplicationmadness",
            textColor: "#000000",
            bgColor: "#6B7FFF",
        },
        {
            icon: basedPath + "div.svg",
            title: "Division Duel",
            url: "game/DivisionDuel",
            textColor: "#000000",
            bgColor: "#00C275",
        },
        {
            icon: basedPath + "cc.svg",
            title: "Car Counting",
            url: "/game/carcounting",
            textColor: "#000000",
            bgColor: "#F7DA21",
        },
        {
            icon: basedPath + "ff.svg",
            title: "Fruit Frenzy",
            url: "/game/fruitfrenzy",
            textColor: "#000000",
            bgColor: "#FF9A22",
        },
        {
            icon: basedPath + "mm.svg",
            title: "Monkey Madness",
            url: "/game/monkeymadness",
            textColor: "#000000",
            bgColor: "#F56A6C",
        },
        {
            icon: basedPath + "ss.svg",
            title: "Shape Shark",
            url: "/game/shapeshark",
            textColor: "#000000",
            bgColor: "#0EA1EA",
        },
    ];
};
