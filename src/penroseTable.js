// TODO: Iterative table scale
// TODO: Improve hash function

class PenroseTable {

  constructor(config) {

    ({ size: this.size, load: this.load, max: this.max } = config)

    this.table = Array(this.size).fill(null).map(slot => [])

    this.collisions = {}

    this.hash = (val) => {

      let hash = 0
      let stringifyVal = ''

      val instanceof Object
        ? stringifyVal = JSON.stringify(val)
        : stringifyVal = val.toString()

      for (var i = 0; i < stringifyVal.length; i++) {
        let char = stringifyVal.charCodeAt(i)
        hash = ((hash*17)-(hash+(i*13))) + (char+i)
      }

      return hash % this.size
    }

  }


  setItem(v) {

    this.table[this.hash(v)].push(v)

    this.collisions[this.hash(v)] === undefined
      ? this.collisions[this.hash(v)] = 0
      : this.collisions[this.hash(v)] += 1

    return [this.hash(v), this.getItem(v)]

  }

  getItem(v) {

    return this.table[this.hash(v)]

  }

  searchItem() {

  }

}


export default PenroseTable
