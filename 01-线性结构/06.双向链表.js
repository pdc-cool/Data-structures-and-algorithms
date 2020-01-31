/**
 * 单向链表:
 * 只能从头遍历到尾或者从尾遍历到头(一般从头到尾)
 * 也就是链表相连的过程是单向的
 * 实现的原理是上一个链表中有一个指向下一个的引用
 * 单向链表缺点：
 * 可以轻松的到达下一个节点，但是回到前一个节点是很难的，但是，在实际开发中，经常遇到需要回到上一个节点的情况
 */

 /**
  * 双向链表：
  * 既可以从头遍历到尾，也可以从尾遍历到头
  * 一个节点既有向前连接的引用，也有向后连接的引用
  * 双向链表的缺点：
  * 每次插入或者删除时，需要处理四个引用
  * 相对于单向链表，占用内存更大
  * 双向链表的特点：
  * 可以使用一个 head 和一个 tail 分别指向头部和尾部的节点
  * 每个节点都由三部分组成：前一个节点的指针(prev)/保存的元素(item)/后一个节点的指针(next)
  * 双向链表的第一个节点的 prev 是 null,最后的节点的 next 是 null
  */

// 双向链表封装
function DoublyLinkedList() {
  // 内部类：创造节点
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  // 属性
  this.head = null
  this.tail = null
  this.length = 0

  // 常见的操作：方法
  // 1.append 方法
  DoublyLinkedList.prototype.append = function (data) {
    // 1.根据 data 创建节点
    let node = new Node()

    // 2.判断添加的是否是第一个节点
    if (this.length == 0) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node 
      this.tail = node 
    }

    // 3.length + 1
    this.length += 1
  } 

  // 2.将链表转成字符串形式
  // 2.1.toString 方法
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString()
  }

  // 2.2.forwardString
  DoublyLinkedList.prototype.forwardString = function () {
    // 1.定义变量
    let current = this.tail
    let resultString = ''

    // 2.依次向前遍历，获取每一个节点
    while (current) {
      resultString += current.data + ' '
      current = current.prev
    }

    return resultString
  }

  // 2.3.backwardString
  DoublyLinkedList.prototype.backwardString = function () {
    // 1.定义变量
    let current = this.head
    let resultString = ''

    // 2.依次向后遍历，获取每一个节点
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }

    return resultString
  }

  // 3.insert 方法
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 1.越界判断
    if (position < 0 || position > this.length) return false

    // 2.创建节点
    let node = new Node(data)

    // 3.判断原来列表是否为空
    if (this.length == 0) {
      this.head = node
      this.tail = node 
    } else {
      // 3.1.判断 position 是否为 0
      if (position == 0) {
        // 原来的第一个节点.prev = node
        this.head.prev = node

        node.next = this.head

        this.head = node
      } else if (position == this.length) { // 3.2.position == length
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
      } else { // 3.3.其他情况
        let current = this.head
        // let previous = null  单向链表需要，但是双向链表内部有 prev ，所以不需要 previous 变量
        let index = 0

        while (index++ < position) {
          current = current.next
        }

        // 修改指针
        node.next = current
        node.prev = current.prev
        current.prev.next = node
        current.prev = node
      }
    }

     // 4.length + 1
     this.length += 1

     return true
  }

  // 4.get 方法
  DoublyLinkedList.prototype.get = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null

    // 该方法效率不高可以使用 2 分法优化
    // this.length / 2 > position: 从头向后遍历
    // this.length / 2 < position: 从后向头遍历

    // 2.循环遍历
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }

    return current.data
  }

  // 5.indexOf
  DoublyLinkedList.prototype.indexOf = function (data) {
    // 1.定义变量
    let current = this.head
    let index = 0

    // 2.查找和 data 相同的节点
    while (current) {
      if (current.data == data) {
        return index
      }

      current = current.next
      index += 1
    }

    return -1
  }

  // 6.update 方法
  DoublyLinkedList.prototype.update = function (position, data) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return false

    // 2.寻扎正确节点
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }

    // 3.修改找到节点的数据
    current.data = data

    return true
  }

  // 7.removeAt 方法
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null

    // 2.判断是否只有一个节点
    let current = this.head

    if (this.length == 1) {
      this.head = null
      this.tail = null
    } else {
      if (position == 0) { // 判断是否删除的是第一个节点
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position == this.length - 1) {
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        // let current = this.head
        let index = 0
        while (index++ < position) {
          current = current.next
        }

        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }

    // 3.length - 1
    this.length -= 1

    return current.data
  }

  // 8.remove 方法
  DoublyLinkedList.prototype.remove = function (data) {
    // 1.根据 data 获取下标值
    let index = this.indexOf(data)

    // 2.根据 index 删除对应节点
    return this.removeAt(index)
  }
}