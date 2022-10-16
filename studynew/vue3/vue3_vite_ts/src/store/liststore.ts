import {defineStore} from "pinia"
import {getApiList} from "@server"
export const useListStore = defineStore("list",{
  state:() => {
    return {
      list: []
    }
  },
  actions: {
    async getList() {
      const result = await getApiList()
      console.log(result);
    }
  }
})