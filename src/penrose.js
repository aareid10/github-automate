import PenroseRecord from './penroseRecord'
import PenroseTable from './penroseTable'

class Penrose {

  static #configHashTable = {
    size: 1e5,
    load: 0.75,
    max: 1e6
  }

  constructor(debug) {
    this.debug        = debug || false
    this.records      = []
    this.links        = []
    this.table        = new PenroseTable(Penrose.#configHashTable) /* Hash Table */
    this.filter       = null /* BloomFilter */
    this.comprension  = {} /* Flywheel */
  }

  add(data) {

    /* update linked list */
    this.records.push(
      new PenroseRecord().prepend(data)
    )

    /* update hash table */
    this.table.setItem(data)
  }

  update(data, idx) {

    /* merge or replace properties */
    this.records[idx].append({
      ...this.records[idx].record,
      ...data
    })

    /* point record instance to list tail */
    this.records[idx] = this.records[idx].next


    /* update hash table */
    this.table.setItem({
      ...this.records[idx].record,
      ...data
    })


  }

  remove(){}
  find(){}
  retrieve(){}
  states(){}

  sync(){}
  mirror(){}
  invert(){}
  wipe(){}

}

export default Penrose
