import Login from "./components/Login";

const Home = () => import("./components/Home.vue")
import Register from "./components/Register"
import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        name: "home",
        path: "/home",
        component: Home,
    },
    {
        name: "login",
        path: "/login",
        component: Login,
    },
    {
        name: "register",
        path: "/register",
        component: Register,
    },
    {path: '/', redirect: '/home'}
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
