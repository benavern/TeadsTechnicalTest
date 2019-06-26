module.exports = class ObjectForSale {
  /**
   * The object for sale with potential buyers and a reserve price
   * @param {Object} args
   * @param {Integer} args.reservePrice
   * @param {Array} args.buyers
   */
  constructor ({ reservePrice = 0, buyers = [] } = {}) {
    if (!buyers.length) {
      throw new Error('Nobody is interested in this object...')
    }

    this.reservePrice = reservePrice
    // nothing to do yet with the buyers, I can sort them nom
    this.buyers = buyers.sort((a, b) => {
      return a.bestBid > b.bestBid ? -1 : 1
    })
  }

  /**
   * gets the winner and the price he'll pay for the object.
   * if no buyer wins, the auction is canceled.
   */
  getResult () {
    const winner = this.getWinner()
    const priceToPay = this.getPriceToPay()

    if (!winner) {
      return null
    }

    return { winner, priceToPay }
  }

  /**
   * Get the best buyer by bid value only if his bid is above the reserve price
   */
  getWinner () {
    const winner = this.buyers[0]
    return winner && winner.bestBid > this.reservePrice ? winner : null
  }

  /**
   * get the price to pay, it can be the second best bid if above te reserve price or the reserve price itself
   */
  getPriceToPay() {
    const secondBestBuyer = this.buyers[1]
    return secondBestBuyer && secondBestBuyer.bestBid > this.reservePrice ? secondBestBuyer.bestBid : this.reservePrice
  }
}
