<script setup lang="ts">
import {useToDoStore} from "@/stores/toDoStore";

const toDo = useToDoStore()
const newToDo = ref("")

function addToDo() {
  if (newToDo.value) {
    toDo.addToDo(newToDo.value)
    newToDo.value = ""
  }
}

let isActive = true

function sortRegistered() {
  toDo.toDoList.sort((a, b) => a.id - b.id)
  isActive = !isActive
}

function sortLatest() {
  toDo.toDoList.sort((a, b) => b.id - a.id)
  isActive = !isActive
}

function getDetail(id : number, content : string) {
  navigateTo("/" + id)
}
</script>

<template>
  <section class="w-full m-auto">
    <h1 class="mb-10 text-5xl font-bold text-center">TODO List</h1>

    <form
        class="mb-5 ml-20 mr-20"
        @submit.prevent="addToDo()">
      <div class="flex justify-between gap-5">
        <input
            v-model="newToDo"
            type="text"
            id="toDo"
            class="w-3/4 px-3 py-4 rounded text-black"
            placeholder="할 일을 입력해 주세요."/>
        <button class="w-1/4 bg-slate-500 rounded">추가</button>
      </div>
    </form>

    <div class="ml-20 mr-20" v-if="toDo.toDoList.length > 0">
      <div class="flex gap-2">
        <button
            :class="{'underline underline-offset-4' : isActive}"
            @click="sortRegistered()">등록순</button>
        <i>|</i>
        <button
            :class="{'underline underline-offset-4' : !isActive}"
            @click="sortLatest()">최신순</button>
      </div>

      <ul>
        <li
            v-for="(list, key) in toDo.toDoList"
            :key="key"
            class="flex justify-between items-center gap-5 mt-5 px-5 py-2 border rounded">
          <p
              class="flex gap-5 text-lg"
              @click="getDetail(key+1)">
            <span>{{key+1}}.</span>{{list.content}}
          </p>
          <button class="px-5 py-2 bg-slate-500 rounded" @click="toDo.deleteToDo(list.id)">삭제</button>
        </li>
      </ul>

      <button class="block w-1/3 mt-10 m-auto px-3 py-4 bg-green-400 rounded" @click="toDo.clearToDo()">전체 삭제</button>
    </div>


  </section>
</template>

<style scoped>
</style>