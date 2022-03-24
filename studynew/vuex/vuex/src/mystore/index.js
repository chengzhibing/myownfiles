import Vuex from "./myVuex"
import Vue from "vue"
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		age: 10
	},
	mutations: {
      changeAgeOfMutations(state, payload) {
        state.age += payload;
	  },
	  minusAgeOfMutations(state, payload) {
        state.age -= payload;
	  }
	},
	actions: {
		minusAgeOfAction({commit}, payload) {
           commit("minusAgeOfMutations", payload)
		}
	},
	getters: {
		age(state) {
			return state.age * 20;
		}
	},
	modules: {
		state: {
			name: "子组件的state"
		},
		mutations: {
			
		},
		actions: {

		},
		modules: {

		}
	}
})
console.log()