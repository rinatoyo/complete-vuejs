<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <!--  : is short for v-bind, and is a directive used to bind one or more attributes-->
  <!--  @ is short for v-on, and is a directive for how you run JavaScript in response to DOM events-->
  <!--  v-model is a directive that provides a 2-way data binding between an input and form data or between 2 components-->
  <input
      :id="name"
      :value="value"
      :type="type"
      @input="input"
  />
</template>

<script>
export default {
  emits: ['update'],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    rules: {
      // min: number
      // required: boolean
      type: Object,
      default: {}
    },
    error: {
      type: String
    }
  },
  // props end

  created() {
    this.$emit('update', {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value)
    })
  },
  // created end

  methods: {
    input($event) {
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value)
      })
    },

    validate(value) {
      if (this.rules.required && value.length === 0) {
        return 'Value is required.'
      }

      if (this.rules.min && value.length < this.rules.min) {
        return `The min length is ${this.rules.min}.`
      }
    }
  }
  //methods end
}
// export end
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}

.error {
  color: red;
}

.label {
  display: flex;
  justify-content: space-between;
}

input {
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
}
</style>