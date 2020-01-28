/**
 * 队列: 受限的线性结构
 * 先进先出(FIFO)
 * 只可在 front 进行删除操作，在表的 rear 进行插入操作
 * 实现：基于数组和基于链表两种方式
 */

// 基于数组实现
class Queue {
  // 属性
  constructor() {
    this.items = []
  }
  // 方法
  // 1.将元素加入到队列
  enqueue(element) {
    this.items.push(element)
  }

  // 2.从队列中删除前端元素
  dequeue() {
    return this.items.shift()
  }

  // 3.查看前端元素
  front() {
    return this.items[0]
  }

  // 4.查看队列是否为空
  isEmpty() {
    return this.items.length == 0
  }

  // 5.查看队列中元素的个数
  size() {
    return this.items.length
  }

  // 6.toString
  toString() {
    let resultStr = ''
    for (var i = 0; i < this.items.length; i++) {
      resultStr += this.items[i] + ''
    }
    return resultStr
  }
}

let queue = new Queue()
