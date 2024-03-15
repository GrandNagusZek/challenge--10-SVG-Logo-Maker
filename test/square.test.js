const Square=require("../lib/square")
const square= new Square("IM", "blue", "black")

describe("Square", ()=>{
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor",()=>{
            
            //input is square.text = output IM
            expect(square.text).toEqual("IM")
            expect(square.textColor).toEqual("blue")
            expect(square.shapeColor).toEqual("black")
        })
    })

    describe("method (is function in an object)", ()=> {
        it("test render ()", ()=> {
            //input render() = '`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`'
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="black" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">IM</text></svg>`)
        })
    })
})