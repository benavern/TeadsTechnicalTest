const rewire = require("rewire")
const index = rewire("./index")
const buyerFactory = index.__get__("buyerFactory")
// @ponicode
describe("buyerFactory", () => {
    test("0", () => {
        let param1 = [["Quality", "Implementation", "Implementation"], ["Implementation", "Identity", "Implementation"], ["Quality", "Quality", "Identity"]]
        let callFunction = () => {
            buyerFactory(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Implementation", "Implementation", "Quality"], ["Quality", "Configuration", "Interactions"], ["Implementation", "Quality", "Configuration"]]
        let callFunction = () => {
            buyerFactory(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Configuration", "Interactions", "Quality"], ["Interactions", "Interactions", "Implementation"], ["Identity", "Configuration", "Identity"]]
        let callFunction = () => {
            buyerFactory(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Implementation", "Interactions", "Interactions"], ["Configuration", "Identity", "Identity"], ["Quality", "Implementation", "Quality"]]
        let callFunction = () => {
            buyerFactory(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Implementation", "Implementation", "Interactions"], ["Identity", "Configuration", "Implementation"], ["Configuration", "Identity", "Implementation"]]
        let callFunction = () => {
            buyerFactory(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            buyerFactory(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
