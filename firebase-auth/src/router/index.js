import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/sign-in",
    component: () => import("../views/SignView.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/feed",
    component: () => import("../views/FeedView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}
// user login email : matt@learnvue.com
// user login password : 993697307

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have success");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
