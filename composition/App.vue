<!--Composition API-->
<template>
  <!--  anything inside template, you don't need to specify value (count.value) because of ref unwrapping-->
  <!--  <button @click="increment">{{ count }}</button>-->
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  <p>Total: {{ total }}</p>
  <h2>History (Old Value - > New Value):</h2>
  <div v-for="number in history" :key="number">
    {{ number }}
  </div>
</template>

<script>
import {ref, reactive, computed, watch, watchEffect} from 'vue'
import {useNumbers} from "./useNumbers.js";

export default {
  // everything is done in setup and all variables must be returned
  // like created
  // options API is built on top of composition API

  setup() {
    // ref -> number, string
    // const count = ref(0)

    // reactive -> {}
    // const increment = () => {
    //   count.value++
    // }

    return useNumbers()
  }
}
</script>

<style scoped>
button {
  height: 200px;
  width: 200px;
  font-size: 40px;
}

p {
  width: 200px;
  font-size: 40px;
}
</style>