/**
 * 优先级队列：在插入一个元素时候考虑该数据优先级
 * 和其他数据优先级进行比较，比较后得出这个元素在队列中正确的位置
 * 优先级队列主要考虑的问题:
 * 每个元素不再是一个数据，而且包括数据的优先级
 * 在添加方式中，根据优先级放入正确的位置
 */

// 封装优先级队列(构造函数内部类实现)
function PriorityQueue() {
  // 在 PriorityQueue 重新创建一个类：可以理解为内部类
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  // 封装属性
  this.items = []

  // 实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1.创建 queueElement 对象
    let queueElement = new QueueElement(element, priority)

    // 2.判断队列是否为空
    if (this.items.length == 0) {
      this.items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
}

// 测试代码
let pq = new PriorityQueue()
pq.enqueue('abc', 111)
pq.enqueue('cba', 200)
pq.enqueue('nba', 50)
pq.enqueue('nba', 66)