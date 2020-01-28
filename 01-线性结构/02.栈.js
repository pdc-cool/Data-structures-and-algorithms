/**
 * 栈 (stack) 是一种受限的线性表，后进先出 (LIFO)
 * 向一个栈插入元素叫做进栈、入栈或压栈，把新元素放到栈顶元素上面，使之成为新的栈顶元素
 * 从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素
 */

// 栈实现的两种实现方式：基于数组和基于链表实现

class Stack {
  constructor() {
    // 栈中的属性
    this.items = []
  }

  // 栈的相关操作
  // push(element): 添加一个新元素到栈顶位置
  // pop(): 移除栈顶的元素，同时返回被移除的元素
  // peek(): 返回栈顶的元素，不对栈做任何修改(不会移除栈顶的元素，仅仅返回它)
  // isEmpty(): 如果栈里没有任何元素就返回 true,否则返回 false
  // size(): 返回栈里的元素个数，这个方法和数组的 length 属性很相似
  // toString(): 将栈结构的内容以字符形式返回

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length -1]
  }

  isEmpty() {
    return this.items.length == 0
  }

  size() {
    return this.items.length
  }

  toString() {
    let resultString = ''
    for(var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ''
    }
  }
}

// 栈的使用
let s = new Stack()

s.push(20)
s.push(10)
s.push(77)

console.log(s.size())

// 十进制转化二进制
function dec2bin(decNumber) {
  // 1.定义栈对象
  let stack = new Stack()

  // 2. 循环操作
  while(decNumber > 0) {
    // 2.1.获取余数，并且放入到栈中
    stack.push(decNumber % 2)

    // 2.2.获取整除后的结果作为下一次的运算 
    decNumber = Math.floor(decNumber / 2)
  }

  // 3.从栈中取出0和1
  let bindaryString = '';
  while(!stack.isEmpty()) {
    bindaryString += stack.pop()
  }
  return bindaryString
}

// 测试
console.log(dec2bin(100))