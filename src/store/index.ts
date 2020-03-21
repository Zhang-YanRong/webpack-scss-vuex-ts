import Vue from "vue";
import Vuex from "vuex";
import theme from "./theme/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: ""
  },
  mutations: {},
  actions: {},
  modules: {
    theme
  }
});
