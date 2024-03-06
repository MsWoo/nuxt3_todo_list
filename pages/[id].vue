<script setup lang="ts">
const route = useRoute()
console.log(route.params.id)
const id = route.params.id
</script>
<template>
  <section>
    <h1 class="mt-6 mb-12 md:mt-10 text-5xl font-bold text-center">TODO Detail</h1>

    <div class="p-4 md:p-6 border rounded">
      <p class="block">No.{{id}}</p>
    </div>

    <NuxtLink to="/">Go To List</NuxtLink>
  </section>
</template>