const Triangle=require("../lib/triangle")
const triangle= new Triangle("IM", "blue", "black")

describe("Triangle", ()=>{
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor",()=>{
            
            //input is square.text = output IM
            expect(triangle.text).toEqual("IM")
            expect(triangle.textColor).toEqual("blue")
            expect(triangle.shapeColor).toEqual("black")
        })
    })

    describe("method (is function in an object)", ()=> {
        it("test render ()", ()=> {
            //input render() = '`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`'
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">IM</text></svg>`)
        })
    })
})