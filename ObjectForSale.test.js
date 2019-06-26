const Buyer = require('./Buyer')
const ObjectForSale = require('./ObjectForSale')

describe('ObjectForSale', () => {
  describe('Cancelled auction', () => {
    test('Nobody is interested in this object...', () => {
      expect(() => new ObjectForSale()).toThrow('Nobody is interested in this object...')
    })
  })

  describe('Successful auction', () => {
    test('1 buyer & 1 bid above the reserve price', () => {
      const testBuyer1 = new Buyer({ bids: [20]})
      const testObject = new ObjectForSale({ reservePrice: 10, buyers: [testBuyer1] })
      expect(testObject.getResult()).toEqual({ winner: testBuyer1, priceToPay: 10 })
    })

    test('1 buyer &multiple bids above the reserve price', () => {
      const testBuyer1 = new Buyer({ bids: [20, 30]})
      const testObject = new ObjectForSale({ reservePrice: 10, buyers: [testBuyer1] })
      expect(testObject.getResult()).toEqual({ winner: testBuyer1, priceToPay: 10 })
    })

    test('multiple buyers & 1 bid above the reserve price', () => {
      const testBuyer1 = new Buyer({ bids: [20]})
      const testBuyer2 = new Buyer({ bids: [5]})
      const testObject = new ObjectForSale({ reservePrice: 10, buyers: [testBuyer1, testBuyer2] })
      expect(testObject.getResult()).toEqual({ winner: testBuyer1, priceToPay: 10 })
    })

    test('multiple buyers & multiple bids above the reserve price', () => {
      const testBuyer1 = new Buyer({ bids: [20, 30]})
      const testBuyer2 = new Buyer({ bids: [5, 15, 35]})
      const testObject = new ObjectForSale({ reservePrice: 10, buyers: [testBuyer1, testBuyer2] })
      expect(testObject.getResult()).toEqual({ winner: testBuyer2, priceToPay: 30 })
    })
  })

  describe('No winner auction', () => {
    test('nobody bids above the reserve price', () => {
      const testBuyer1 = new Buyer({ bids: [2]})
      const testObject = new ObjectForSale({ reservePrice: 10, buyers: [testBuyer1] })
      expect(testObject.getResult()).toEqual(null)
    })
  })
})
