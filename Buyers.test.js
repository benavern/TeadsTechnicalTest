const Buyer = require('./Buyer')

describe('Buyer', () => {
  test('create a new buyer with default properties', () => {
    const testBuyer = new Buyer()
    expect(testBuyer.name).toBe('Anonymous')
    expect(testBuyer.bids).toEqual([])
    expect(testBuyer.bestBid).toBe(0)
  })

  test('create a new buyer with a name', () => {
    const testBuyer = new Buyer({ name: 'X'})
    expect(testBuyer.name).toBe('X')
  })

  test('create a new buyer with 1 bid', () => {
    const testBuyer = new Buyer({ bids: [10]})
    expect(testBuyer.bids).toEqual([10])
    expect(testBuyer.bestBid).toBe(10)
  })

  test('create a new buyer with multiple bids', () => {
    const testBuyer = new Buyer({ bids: [10, 30, 20]})
    expect(testBuyer.bids).toEqual([10, 30, 20])
    expect(testBuyer.bestBid).toBe(30)
  })
})
