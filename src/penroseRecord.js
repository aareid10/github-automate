class PenroseRecord {

  constructor() {
    this.head = null
    this.tail = null
    this.states = 0
    this.length = 0
  }

  append(data) {
    let node = this.create(data)
    switch (true) {
      case this.states === 0:
        this.head = node
        this.tail = node
        break;
      case this.states !== 0:
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        break;
      default:
    }
    this.states += 1
    return node
  }

  prepend(data) {
    let node = this.create(data)
    switch (true) {
      case this.states === 0:
        this.head = node
        this.tail = node
        break;
      case this.states !== 0:
        this.head.prev = node
        node.next = this.head
        this.head = node
        break;
      default:
    }
    this.states += 1
    return node
  }

  access(idx) {
    let node = this.head
    if(idx >= 0 && idx < this.states) {
      while(idx--) { node = node.next }
    }
    else throw new Error('list index out of range')
    return node
  }

  create(data) {
   const list = this

   let node = {
     record: data,
     prev: null,
     next: null,
     states: this.states,
     remove: function() {
       this.prev !== null ? this.prev.next = this.next : ''
       this.next !== null ? this.next.prev = this.prev : ''
       list.head === this ? list.head = this.next : ''
       list.tail === this ? list.tail = this.prev : ''
     },
     prepend: function(data) {
       if (list.head === this) return list.prepend(data)
       let node       = list.create(data)
       node.prev      = this.prev
       node.next      = this
       this.prev.next = node
       this.prev      = node
       this.states += 1
       return node
     },
     append: function(data) {
       if (list.tail === this) return list.append(data)
       let node       = list.create(data)
       node.next      = this.next
       node.prev      = this
       this.next.prev = node
       this.next      = node
       this.states += 1
       return node
     },
   }

   return node

  }

}

export default PenroseRecord
