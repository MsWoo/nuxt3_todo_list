import {defineStore} from "pinia";

interface ItoDo {
  id: number,
  content: string
}
export const toDoList = [] as ItoDo[]

export const useToDoStore = defineStore('toDo', {
  state: () => ({
    toDoList: toDoList
  }),
  actions: {
    addToDo(content: string) {
      this.toDoList.push({id: Date.now(), content: content})
    },
    deleteToDo(id: number) {
      const index = this.toDoList.findIndex(list => list.id === id)
      if (index > -1) {
        this.toDoList.splice(index, 1)
      }
    },
    clearToDo() {
      if (window.confirm('리스트를 모두 삭제하시겠습니까?')) {
        this.toDoList = []
      }
    }
  }
})