import  {routes}  from '@/router/index'
import { createStore, Store, Module } from "vuex";


const state = {
    routes: routes // 路由数组，存放菜单栏的路由数据
}

export type State = typeof state;


const mutations = {

}
// function getMenuList(routes) { }
const actions = {
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
} ;