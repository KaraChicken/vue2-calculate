// button功能部分
Vue.createApp({
  data() {
    return {
      // 定義按鈕
      // 目前數值
      current: 0,
      // 之前的數值
      previous: '',
      // 傳入的運算子
      operator: null,
      // 當前運算子使用與否
      operatorClicked: false,
    }
  },
  methods: {
    Append(number) {
      // 如果已點選任何運算子，則清空目前的值
      if (this.operatorClicked) this.current = ''
      // 重置 operatorClicked 的值，讓第二個數字也能正常輸入
      this.operatorClicked = false
      // 檢查目前值是否為 0，如果不是的話就直接與 current 連接
      if (this.current === 0) {
        this.current = number
      } else {
        this.current = `${this.current}${number}`
      } 
    },
    Plus() {
      // 傳入運算函數
      this.operator = (a, b) => a + b
      // 呼叫設定 setPrevious 的函數
      this.SetPrevious()
    },
    Minus() {
      // 傳入運算函數
      this.operator = (a, b) => a - b
      // 呼叫設定 setPrevious 的函數
      this.SetPrevious()
    },
    Multiplied() {
      // 傳入運算函數
      this.operator = (a, b) => a * b
      // 呼叫設定 setPrevious 的函數
      this.SetPrevious()
    },
    Divided() {
      // 傳入運算函數
      this.operator = (a, b) => a / b
      // 呼叫設定 setPrevious 的函數
      this.SetPrevious()
    },
    SetPrevious() {
      // 將目前的值存在previous(按下個數字前要清空目前的 current)
      this.previous = this.current
      // 表示使用者確實按下任何一個運算子
      this.operatorClicked = true
    },
    equal() {
      console.log(this.current, this.previous)
      this.current = `Ans：${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`
      this.operator = null
      this.operatorClicked = false
    },
    ClearDisplay() {
      // 歸零
      this.current = 0
    },
    BackSpace() {
      this.current = this.current.substring(0, this.current.length - 1)
    }
  }
})
.mount('#app')