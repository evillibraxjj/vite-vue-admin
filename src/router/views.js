import { h, resolveComponent } from 'vue';

export const routerView = {
  render() {
    return h(resolveComponent('router-view'));
  },
};

export const layout = () => import('@/views/Layout/index.vue');
export const home = () => import('@/views/Home.vue');
export const login = () => import('@/views/User/Login.vue');
export const userList = () => import('@/views/User/List.vue');
