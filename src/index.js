import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Num = {
    props: ['number'],
    template: `
      <button
          v-bind:class="getClass(number)"
          v-on:click="click"
      >
      {{ number }}
      </button>
    `,

    methods: {
        click(number) {
            this.$emit('chosen', this.number)
        },
        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red'
        },
        isEven(number) {
            return number % 2 === 0
        }
    }
}
// ********************************************************************
const app = Vue.createApp({
    components: {
        Num
    },

    // generally want to keep template as clean as possible, by moving logic into other properties
    template: `
      <num
          v-for="number in numbers"
          v-bind:number="number"
          v-on:chosen="addNumber"
      />

      <hr/>

      <num
          v-for="number in numberHistory"
          v-bind:number="number"
      />
    `,

    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            numberHistory: []
        }
    },
    // all computed properties are going to be functions that take no arguments
    computed: {
        evenList() {
            return this.numbers.filter(num => this.isEven(num))
        }
    },

    methods: {
        addNumber(number) { // parameter is whatever you emitted in payload
            this.numberHistory.push(number)
        }
    }
})

app.mount('#app')