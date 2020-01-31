/**
 * 链表：同数组一样，用于存储一系列的元素的线性结构，但是链表和数组的实现机制完全不同
 * 链表的优势：
 * 在内存中不必是连续的空间
 * 每个元素由一个存储元素本身的节点和指向下一个元素的引用组成
 * 相对于数组，链表的优势：
 * 内存空间不是必须连续的，可以灵活利用计算机内存，实现灵活的内存动态管理
 * 链表不必在创建时就确定大小，并且大小可以无限延伸下去
 * 链表在插入和删除数据时，时间复杂度可以达到O(1),相对数组效率高得多
 * 相对于数组，链表的缺点：
 * 链表访问任何一个位置的元素时，都需要从头开始访问(无法跳过第一个元素访问任何一个元素)
 * 无法通过下标直接访问元素，需要从头一个个访问，直到找到对应的元素
 */

// 单向链表的实现
function LinkedList() {
  // 内部的类：节点类
  function Node(data) {
    this.data = data
    this.next = null
  }

  // 属性
  this.head = null
  this.length = 0

  // 1.追加方法
  LinkedList.prototype.append = function (data) {
    // 1.创建新节点
    let newNode = new Node(data)
    
    // 2.判断是否添加的是第一个节点
    if (this.length == 0) { // 2.1是第一个节点
      this.head = newNode
    } else {                // 2.2不是第一个节点
      let current = this.head
      while(current.next) { // 循环查找当前的 node 节点
        current = current.next
      }

      // 最后节点的 next 指向新节点
      current.next = newNode
    }

    // 3.length 变长了
    this.length += 1
  }

  // 2.toString方法
  LinkedList.prototype.toString = function () {
    // 1.定义变量
    let current = this.head
    let listString = ''

    // 2.循环获取一个个节点
    while (current) {
      listString += current.data + ' '
      current = current.next
    }

    return listString
  }

  // 3.insert 方法
  LinkedList.prototype.insert = function (position, data) {
    // 1.对 position 进行越界判断
    if (position < 0 || position > this.length) return false

    // 2.根据 data 创建 newNode
    let newNode = new Node(data)

    // 3.判断插入的位置是否是第一个
    // 个人疑问：下面的实现默认的是链表中是存在数据的，若是链表中没有数据，以下所谓的 insert 应该先将数据添加到链表中然后再是插入的逻辑
    if (position == 0) { // 这块进行了逻辑运算的处理
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }

    // 4. 长度边长
    this.length += 1
  }

  // 4.get 方法
  LinkedList.prototype.get = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null

    // 2.获取对应的 data
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }

    return current.data
  }

  // 5.indexOf 方法
  LinkedList.prototype.indexOf = function (data) {
    // 1.定义变量
    let current = this.head
    let index = 0

    // 2.开始查找
    while (current) {
      if (current.data == data) return index

      current = current.next
      index++
    }

    // 3.找到最后没有找到，返回-1
    return -1
  }

  // 6.update 修改数据
  LinkedList.prototype.update = function (position, newData) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return false
    
    // 2.查找正确的节点
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }

    // 3.将 position 位置的数据改为新数据
    current.data = newData

    // 4.告诉外界，修改成功
    return true
  }

  // 7.removeAt 方法
  LinkedList.prototype.removeAt = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null

    // 2.循环对应位置
    if (position == 0) {
      this.head = this.head.next
    } else {
      let current = this.head
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }

      // 前一个节点的 next 指向 current 的 next 即可
      previous.next = current.next
    }

    // 3.length 变短
    this.length -= 1

    // 删除成功
    return true
  }

  // 8.remove 方法
  LinkedList.prototype.remove = function (data) {
    // 1.获取 data 在列表中的位置
    let position = this.indexOf(data)

    // 2.根据位置信息删除节点
    return this.removeAt(position)
  }
}

// 测试代码
// 1.创建 linkedlist
let list = new LinkedList()

// 2.测试 append 方法
list.append('abc')
list.append('cba')
list.append('nba')
console.log(list.toString())


