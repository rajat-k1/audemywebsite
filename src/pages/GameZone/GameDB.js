const basedPath = "./src/assets/gameImages/buttons/gameButtons/";
export const getLanguageGames = () => {
  return [
    {
      icon: basedPath + "spellingBee.svg",
      title: "Spelling Bee",
      //url: "/game/spelling-bee",
      url: "/game/spellingbee",
      textColor: "#5391AC",
      bgColor: "#EAF7FD",
    },
    {
      icon: basedPath + "oddOneOut.svg",
      title: "Odd One Out",
      url: "/game/oddoneout",
      textColor: "#DA6301",
      bgColor: "#FFDABA",
    },
    {
      icon: basedPath + "storyBuilder.svg",
      title: "Polar Pairing",
      url: "/game/polarpairing",
      textColor: "#769400",
      bgColor: "#DAF5B7",
    },
    {
      icon: basedPath + "vocabularyVortex.svg",
      title: "Vocabulary Vortex",
      url: "/game/vocabVortex",
      textColor: "#269C9A",
      bgColor: "#DAF7F6",
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
  ];
};
