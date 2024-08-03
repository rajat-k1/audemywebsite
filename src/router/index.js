import { createWebHistory, createRouter } from "vue-router";


import About from "../pages/About/About.vue"
import Home from "../pages/Home/Home.vue"
import Initiatives from "../pages/Initiatives/Initiatives.vue"
// import Impact from "../pages/Impact/Impact.vue"
import Sponsors from "../pages/Sponsors/Sponsors.vue"
// import Gallery from "../pages/Gallery/Gallery.vue"
import Technology from "../pages/Technology/Technology.vue"
import Press from "../pages/Press/Press.vue"
import Team from "../pages/Team/Team.vue"
// import Play from "../pages/Play/Play.vue"
import NotFound from "../pages/NotFound/NotFound.vue"

const routes = [
  { path: "/home", redirect:"/"},
  { path: "/", name: "Home", component:Home},
  { path: "/about", name: "About", component:About },
  { path: "/gallery", name: "Gallery", component:() => import("../pages/Gallery/Gallery.vue") },
  { path: "/contact", name: "Contact" },
  { path: "/impact", name: "Impact", component:() => import("../pages/Impact/Impact.vue") },
  { path: "/initiatives", name: "Initiatives", component:Initiatives },
  { path: "/play", name: "Play", component: () => import("../pages/Play/Play.vue") },
  { path: "/press", name: "Press", component:Press },
  { path: "/sponsors", name: "Sponsors", component:Sponsors },
  { path: "/team", name: "Team", component:Team },
  { path: "/technology", name: "Technology", component:Technology },
  { path: "/:pathMatch(.*)*", name: "not-found", component:NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
