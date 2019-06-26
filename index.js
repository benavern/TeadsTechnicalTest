const Buyer = require('./Buyer')
const ObjectForSale = require('./ObjectForSale')

// The buyers
const a = new Buyer({ name: 'A', bids: [110, 130] })
const b = new Buyer({ name: 'B', bids: [] })
const c = new Buyer({ name: 'C', bids: [125] })
const d = new Buyer({ name: 'D', bids: [105, 115, 90] })
const e = new Buyer({ name: 'E', bids: [132, 135, 140] })

// The Auction
const auction = new ObjectForSale( {
  reservePrice: 100,
  buyers: [a, b, c, d, e]
})

// Result
const result = auction.getResult()

if (!result) {
    console.error('Nobody wins the object.')
} else {
    console.info(`The winner is buyer ${result.winner.name} with a bid at ${result.winner.bestBid}, he will pay ${result.priceToPay} for this object.`)
}
