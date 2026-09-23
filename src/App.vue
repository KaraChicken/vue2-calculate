<script setup>
import { ref } from 'vue'

const current = ref('0')
const previous = ref('')
const operator = ref(null)
const operatorClicked = ref(false)

const append = (number) => {
  if (operatorClicked.value) {
    current.value = ''
    operatorClicked.value = false
  }

  current.value =
    current.value === '0'
      ? String(number)
      : current.value + String(number)
}

const setPrevious = (operation) => {
  previous.value = current.value
  operator.value = operation
  operatorClicked.value = true
}

const plus = () => setPrevious((a, b) => a + b)
const minus = () => setPrevious((a, b) => a - b)
const multiplied = () => setPrevious((a, b) => a * b)
const divided = () => setPrevious((a, b) => a / b)

const equal = () => {
  if (!operator.value || previous.value === '') return

  const result = operator.value(
    Number(previous.value),
    Number(current.value)
  )

  current.value = `Ans：${result}`
  operator.value = null
  previous.value = ''
  operatorClicked.value = false
}

const clearDisplay = () => {
  current.value = '0'
  previous.value = ''
  operator.value = null
  operatorClicked.value = false
}

const backspace = () => {
  if (current.value.startsWith('Ans：')) {
    clearDisplay()
    return
  }

  current.value = current.value.slice(0, -1) || '0'
}
</script>

<template>
  <main id="main" class="main">
    <div id="BtnCantainer" class="BtnCantainer">
      <input
        id="display"
        class="display"
        type="text"
        readonly
        :value="current"
        aria-label="計算機顯示器"
      />

      <div class="Btns">
        <button
          v-for="number in 10"
          :key="number - 1"
          type="button"
          @click="append(number - 1)"
        >
          <span>{{ number - 1 }}</span>
        </button>

        <button type="button" @click="plus"><span>+</span></button>
        <button type="button" @click="minus"><span>-</span></button>
        <button type="button" @click="multiplied"><span>×</span></button>
        <button type="button" @click="divided"><span>÷</span></button>
        <button type="button" @click="clearDisplay"><span>C</span></button>
        <button type="button" @click="backspace"><span>←</span></button>
        <button type="button" @click="equal"><span>=</span></button>
      </div>
    </div>
  </main>
</template>
