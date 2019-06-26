const Buyer = require('./Buyer')
const ObjectForSale = require('./ObjectForSale')

// The buyers
const rawBuyers = [
  { name: 'A', bids: [110, 130] },
  { name: 'B', bids: [] },
  { name: 'C', bids: [125] },
  { name: 'D', bids: [105, 115, 90] },
  { name: 'E', bids: [132, 135, 140] }
]

function buyerFactory(listRawBuyers) {
  return listRawBuyers.map((buyer) => new Buyer(buyer))
}

// The Auction
const auction = new ObjectForSale( {
  reservePrice: 100,
  buyers: buyerFactory(rawBuyers)
})

// Result
const result = auction.getResult()

if (!result) {
    console.error('Nobody wins the object.')
} else {
    console.info(`The winner is buyer ${result.winner.name} with a bid at ${result.winner.bestBid}, he will pay ${result.priceToPay} for this object.`)
}
