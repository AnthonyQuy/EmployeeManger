const common = require("./common")
// @ponicode
describe("common.onLoading", () => {
    test("0", () => {
        let callFunction = () => {
            common.onLoading(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            common.onLoading(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            common.onLoading(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
