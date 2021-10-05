// Composable file typically starts with "use"
// reusable part of code.
// can reuse and create large complex components

import {computed, ref, watch} from "vue";

export function useNumbers() {
    const a = ref(0)
    const b = ref(0)
// can't pass array into reactive, must use object for reactive'
    const history = ref([])


// need to specify what you want to watch
// cannot use reactive values
    watch([a, b], ([newA, newB], [oldA, oldB]) => {
        if (newA !== oldA) {
            history.value.push(`A: ${oldA} -> ${newA}`)
        }

        if (newB !== oldB) {
            history.value.push(`B: ${oldB} -> ${newB}`)
        }
        // can set immediate to true to watch immediately
    })

// can watch anything you like and is immediate
//     watchEffect(() => {
//       console.log('a:', numbers.a)
//     })

    const total = computed(() => {
        // if using ref, must use value
        return a.value + b.value
    })

    return {
        a, b, history, total
    }
}
