//importing the Triangle class from the lib directory
const Triangle=require("../lib/triangle")
//creating a new circle object with specified parameters
const triangle= new Triangle("IM", "blue", "black")

//test suite for the Triangle class
describe("Triangle", ()=>{
    //subsuite to test properties of the Triangle object
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor",()=>{
            
            //testing if the properties are set correctly
            expect(triangle.text).toEqual("IM")
            expect(triangle.textColor).toEqual("blue")
            expect(triangle.shapeColor).toEqual("black")
        })
    })

    //subsuite to test methods of the Triangle object
    describe("method (is function in an object)", ()=> {
        it("test render ()", ()=> {
            //testing the render method of the Triangle object
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">IM</text></svg>`)
        })
    })
})