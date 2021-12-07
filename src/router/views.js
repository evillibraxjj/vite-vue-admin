export const routerView = () => import(/* webpackChunkName: "group-layout" */ '@/components/KeepRouterView.vue');
export const layout = () => import(/* webpackChunkName: "group-layout" */ '@/views/Layout/index.vue');
export const home = () => import(/* webpackChunkName: "group-home" */ '@/views/Home.vue');
export const login = () => import(/* webpackChunkName: "group-login" */ '@/views/Login.vue');
export const userList = () => import(/* webpackChunkName: "group-user" */ '@/views/User/List.vue');
