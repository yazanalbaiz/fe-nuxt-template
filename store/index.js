import Vue from 'vue';
import Vuex from 'vuex';
import globalization from './modules/globalization';
import about from './modules/about';
import names from './modules/names';
import breadcrumbs from './modules/breadcrumbs';

Vue.use(Vuex);
export default function () {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      globalization,
      about,
      names,
      breadcrumbs,
    },
  });
}
