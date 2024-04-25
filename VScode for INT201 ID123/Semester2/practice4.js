class Stock {
    constructor() {
      this.stockitems = []  
    }
  
    findItemIndex(id) {
      for (let i = 0; i < this.stockitems.length; i++) {
        if (this.stockitems[i].itemld === id) {
          return i
        }
      }
      return -1
    }
  
    addItem(id, amount) {
      if (id === null || id === undefined || amount === null || amount === undefined) {
        return -1
      }
  
      const index = this.findItemIndex(id)
      if (index !== -1) {
        this.stockitems[index].quantity += amount
        return amount
      }
  
      this.stockitems.push({ itemld: id, quantity: amount })
      return amount
    }
  
    addItems(items) {
      let successfulAdditions = 0
      for (const item of items) {
        const addedAmount = this.addItem(item.itemld, item.quantity)
        if (addedAmount !== -1) {
          successfulAdditions++
        }
      }
      return successfulAdditions
    }
  
    sell(id, amount) {
      const index = this.findItemIndex(id)
      if (index === -1) {
        return -1
      }
  
      const currentQuantity = this.stockitems[index].quantity
      const sellAmount = Math.min(currentQuantity, amount)
      this.stockitems[index].quantity -= sellAmount
      return sellAmount
    }
  
    getAllStockAmount() {
      let totalStock = 0
      for (const item of this.stockitems) {
        totalStock += item.quantity
      }
      return totalStock
    }
  }


newstock = new Stock()

console.log(newstock.addItems([ { itemld: 102, quantity: 2 }, { itemld: 103, quantity: 5 }, { itemld: 103, quantity: 2 } ]))
console.log(newstock.addItem(104,10))
console.log(newstock.addItem(105,10))
console.log(newstock.addItem(104,10))
console.log(newstock)

console.log(newstock.sell(103,7))
console.log(newstock)

console.log(newstock.getAllStockAmount())