//importing the square class from teh lib directory
const Square=require("../lib/square")
//creating a new square object with specified parameters
const square= new Square("IM", "blue", "black")

//test suite for the Square class
describe("Square", ()=>{
    //subsuit to test properties of the Square object
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor",()=>{
            
            //testing if the properties are set correctly
            expect(square.text).toEqual("IM")
            expect(square.textColor).toEqual("blue")
            expect(square.shapeColor).toEqual("black")
        })
    })

    //subsuite to test methods of the Square object
    describe("method (is function in an object)", ()=> {
        it("test render ()", ()=> {
            //testing the render method of the Square object
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="black" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">IM</text></svg>`)
        })
    })
})