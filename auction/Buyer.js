module.exports = class Buyer {
  /**
   * A potential buyer
   * @param {Object} args
   * @param {String} name - the buyers name
   * @param {Array} bids - the bids the buyer makes
   */
  constructor ({ name = 'Anonymous', bids = []} = {}) {
    this.name = name
    this.bids = bids

    console.info(`Buyer ${name} bids ${JSON.stringify(bids)}, his best bid is ${this.bestBid}`)
  }

  /**
   * Gets the best bid into the list of bids
   * @returns {Integer} - the value of the best bid
   */
  get bestBid () {
    if (!this.bids.length) return 0
    return Math.max.apply(Math, this.bids)
  }
}
