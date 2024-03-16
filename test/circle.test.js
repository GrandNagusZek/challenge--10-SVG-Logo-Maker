//importing the circle class from the lib directory
const Circle=require("../lib/circle")
//creating a new circle object with specified parameters
const circle= new Circle("IM", "blue", "black")

//test suite for the Circle class
describe("Circle", ()=>{
    //subsuite to test properties of the Circle object
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor",()=>{
            
            //testing if the properties are set correctly 
            expect(circle.text).toEqual("IM")
            expect(circle.textColor).toEqual("blue")
            expect(circle.shapeColor).toEqual("black")
        })
    })

    //subsuite to test methods of the Circle object
    describe("method (is function in an object)", ()=> {
        it("test render ()", ()=> {
            //testing the render method of the Circle object
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">IM</text></svg>`)
        })
    })
})