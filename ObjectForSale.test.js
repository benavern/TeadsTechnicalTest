const Buyer = require('./Buyer')
const ObjectForSale = require('./ObjectForSale')

describe('ObjectForSale', () => {
  describe('Cancelled auction', () => {
    test('Nobody is interested in this object...', () => {
      expect(() => new ObjectForSale()).toThrow('Nobody is interested in this object...')
    })
  })

  describe('Successful auction', () => {
    test.todo('1 buyer 1 bid above the reserve price')
    test.todo('1 buyer multiple bids above the reserve price')
    test.todo('multiple buyers 1 bid above the reserve price')
    test.todo('multiple buyers multiple bids above the reserve price')
  })

  describe('No winner auction', () => {
    test.todo('nobody bids above the reserve price')
  })
})
