import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home/Home.vue";
import OurProjects from "../pages/OurProjects/OurProjects.vue";
import GameZone from "../pages/GameZone/GameZone.vue";
import LogIn from "../pages/LogIn/LogIn.vue";
import NotFound from "../pages/NotFound/NotFound.vue";
import SignUp from "../pages/SignUp/SignUp.vue";
import AboutUs from "../pages/AboutUs/AboutUs.vue";
import Impact from "../pages/Impact/Impact.vue";
import AdditionGame from "../pages/GameZone/GameZoneList/AdditionGame.vue";
import MultiplicationMadness from "../pages/GameZone/GameZoneList/MultiplicationMadness.vue";
import SubtractionGame from "../pages/GameZone/GameZoneList/SubtractionGame.vue";
import DivisionDuel from "../pages/GameZone/GameZoneList/DivisionDuel.vue";
import Vocab from "../pages/GameZone/GameZoneList/Vocab.vue";
import OddOneOut from "../pages/GameZone/GameZoneList/OddOneOut.vue";
import PolarPairing from "../pages/GameZone/GameZoneList/PolarPairing.vue";
// import SpellingBee from "../pages/GameZone/GameZoneList/SpellingBee/SpellingBee.vue";
import SpellingBee from "../pages/GameZone/GameZoneList/SpellingBee.vue";
import CarCounting from "../pages/GameZone/GameZoneList/CarCounting.vue";
import FruitFrenzy from "../pages/GameZone/GameZoneList/FruitFrenzy.vue";
import MonkeyMadness from "../pages/GameZone/GameZoneList/MonkeyMadness.vue";
import ShapeShark from "../pages/GameZone/GameZoneList/ShapeShark.vue";
import SyllableSorting from "../pages/GameZone/GameZoneList/SyllableSorting.vue";
import DefinitionDetective from "../pages/GameZone/GameZoneList/DefinitionDetective.vue";
import PartOfSpeech from "../pages/GameZone/GameZoneList/PartOfSpeech.vue";
import ColorGame from "../pages/GameZone/GameZoneList/ColorGame.vue";

const routes = [
    { path: "/home", redirect: "/" },
    { path: "/", name: "Home", component: Home },
    { path: "/game-zone", name: "Game-Zone", component: GameZone },
    { path: "/our-projects", name: "Our-Projects", component: OurProjects },
    { path: "/impact", name: "Impact", component: Impact },
    { path: "/about-us", name: "About-Us", component: AboutUs },
    { path: "/login", name: "LogIn", component: LogIn },
    { path: "/signup", name: "Sign Up", component: SignUp },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
    {
        path: "/game/addition",
        name: "AdditionGame",
        component: AdditionGame,
    },
    {
        path: "/game/multiplicationmadness",
        name: "MultiplicationMadness",
        component: MultiplicationMadness,
    },
    {
        path: "/game/subtraction",
        name: "SubtractionGame",
        component: SubtractionGame,
    },
    {
        path: "/game/vocabVortex",
        name: "vocabVortex",
        component: Vocab,
    },
    {
        path: "/game/divisionDuel",
        name: "DivisionDuel",
        component: DivisionDuel,
    },
    {
        path: "/game/oddoneout",
        name: "OddOneOut",
        component: OddOneOut,
    },
    {
        path: "/game/polarpairing",
        name: "PolarPairing",
        component: PolarPairing,
    },
    {
        path: "/game/spelling-bee",
        name: "SpellingBee",
        component: SpellingBee,
    },
    {
        path: "/game/spellingbee",
        name: "SpellingBee",
        component: SpellingBee,
    },
    {
        path: "/game/carcounting",
        name: "CarCounting",
        component: CarCounting,
    },
    {
        path: "/game/fruitfrenzy",
        name: "FruitFrenzy",
        component: FruitFrenzy,
    },
    {
        path: "/game/monkeymadness",
        name: "MonkeyMadness",
        component: MonkeyMadness,
    },
    {
        path: "/game/shapeshark",
        name: "ShapeShark",
        component: ShapeShark,
    },
    {
        path: "/game/syllableSorting",
        name: "SyllableSorting",
        component: SyllableSorting,
    },
    {
        path: "/game/definitionDetective",
        name: "DefinitionDetective",
        component: DefinitionDetective,
    },
    {
        path: "/game/partofspeech",
        name: "PartOfSpeech",
        component: PartOfSpeech,
    },
    {
        path: "/game/colorgame",
        name: "ColorGame",
        component: ColorGame,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
