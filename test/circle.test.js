const Circle=require("../lib/circle")
describe("Circle", ()=>{
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor",()=>{
            const circle= new Circle("IM", "blue", "black")
            //input is circle.text = output IM
            expect(circle.text).toEqual("IM")
            expect(circle.textColor).toEqual("blue")
            expect(circle.shapeColor).toEqual("black")
        })
    })

    describe("method (is function in an object)", ()=> {
        it("test render ()", ()=> {

        })
    })
})