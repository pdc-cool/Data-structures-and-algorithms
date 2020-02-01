/**
 * 集合：比较常见的实现方式是哈希表
 * 集合通常是由一组无序的(不能通过下标值访问)，不能重复(即不能相同)的元素构成
 * 集合可以看成特殊的数组，类似于 ES6 中的 Set 类
 */

// 集合封装(基于 object)
function Set() {
  // 属性
  this.items = {}

  // 方法
  // 1.add 添加元素
  Set.prototype.add = function (value) {
    // 判断当年集合是否已经包含该元素
    if (this.has(value)) return false

    // 将元素添加到集合中
    this.items[value] = value
    return true
  }

  // 2.has
  Set.prototype.has = function (value) {
    this.items.hasOwnProperty(value)
  }

  // 3.remove
  Set.prototype.remove = function (value) {
    // 1.判断该集合是否包含该元素
    if (!this.has(value)) return false

    // 2.将元素删除
    delete this.items[value]
    return true
  }

  // 4.clear
  Set.prototype.clear = function () {
    this.items = {}
  }

  // 5.size
  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }

  // 6.获取集合所有值
  Set.prototype.values = function () {
    return Object.keys(this.items)
  }

  // 集合间的操作
  // 7.并集
  Set.prototype.union = function (otherSet) {
    // this: 集合对象 A
    // otherSet：集合对象 B
    // 1.创建新集合
    let unionSet = new Set()

    // 2.将 A 集合中所有的元素添加到新集合中
    let values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    // 3.取出 B 集合中的元素，判断是否需要添加到新集合
    values = otherSet.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    return unionSet
  }

  // 交集
  Set.prototype.interSection = function (otherSet) {
    // 1.创建一个新的集合
    let interSectionSet = new Set()
    
    // 2.从 A 中取出一个元素，判断是否同时在与 B 中
    let values = this.values()
    for (var i = 0; i < values.length; i++) {
      let item = values[i]
      if (otherSet.has(item)) {
        interSectionSet.add(item)
      }
    }

    return interSectionSet
  }

  // 差集
  Set.prototype.difference = function (otherSet) {
    let differenceSet = new Set()

    let values = this.values()
    for (var i = 0; i < values.length; i++) {
      let items = values[i]
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }

    return differenceSet
  }

  // 子集
  Set.prototype.subset = function (otherSet) {
    let values = this.values()
    for (var i = 0; i < values.length; i++) {
      let item = values[i]
      if (!otherSet.has(item)) {
        return false
      }
    }

    return true
  }

}