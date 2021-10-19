import Vue from "vue"
import vuex from "./vuexnew.js"
Vue.use(vuex) //使用插件，默认去调用插件库的install方法。
console.log(vuex)
export default new vuex.Store({
	state: {
		hello: 'Hello World',
		age: 10
	},
	mutations: {
		miniusAge(state, payload) {
			state.age -= payload;
		},
		changeAge(state, payload) {
			state.age += payload;
		}
	},
	getters: {
		getAge(state) {
			console.log(state)
			return state.age + 10;
		}
	},
	actions: {
		minusAsync({ commit, dispatch }, payload) {
			setTimeout(() => {
				commit("miniusAge", payload)
			})
		}
	},
	modules: {
		a: {
			state: {
				x: 12
			},
			mutations: {
				miniusAge() {
					console.log("第二次走")
				}
			},
			modules: {
				c: {
					state: {
						z: 15
					},
					modules: {
						d: {
							state: {
								w: 20
							}
						}
					}
				}
			}
		},
		b: {
			state: {
				y: 13
			}
		}
	}
})


// const root = {
// 	_raw: rawModule,
// 	state: {
// 		age: 10
// 	},
// 	_children: {
// 		a: {
// 			_raw: rawModule,
// 			state: {x: 12},
// 		    _children: {}
// 		},
// 		b: {
// 			_raw: rawModule,
// 			state: {y: 10},
// 		    _children: {}
// 		}
// 	}
// }