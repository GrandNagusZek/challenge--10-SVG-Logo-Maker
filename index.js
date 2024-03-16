//importing required modules
const inquirer=require("inquirer")
const fs=require("fs")
const Triangle =require("./lib/triangle")
const Square =require("./lib/square")
const Circle =require("./lib/circle")

//array of questions for user input
const questions =[
    {
        type:"list",
        message:"Choose a shape:",
        name:"shape", 
        choices:["circle", "triangle", "square"]
    }, 
    {
        type:"input",
        message:"Enter 3 letter text:",
        name:"text", 
    }, 
    {
        type:"input",
        message:"Enter text color:",
        name:"textColor", 
    }, 
    {
        type:"input",
        message:"Enter shape color:",
        name:"shapeColor", 
    }, 
]

//prompting user with questions
inquirer.prompt(questions)
.then(data=>{
    //handling user input based on selected shape
    if(data.shape==="circle"){
        //creating a new circle object
        const circle = new Circle(data.text, data.textColor, data.shapeColor)
        //writing SVG file for Circle
        fs.writeFile("./examples/circle.svg", circle.render(), err=> {
            if(err)console.error(error)
            console.log("Success!")
        })
    }
    else if(data.shape==="triangle"){
        //creating a new Triangle object
        const triangle = new Triangle(data.text, data.textColor, data.shapeColor)
        //writing SVG file for Triangle
        fs.writeFile("./examples/triangle.svg", triangle.render(), err=> {
            if(err)console.error(err)
            console.log("Success!")
        })
    }else{
        (data.shape==="square")
        //creating a new Square object
            const square = new Square(data.text, data.textColor, data.shapeColor)
            //writing SVG file for Square
            fs.writeFile("./examples/square.svg", square.render(), err=>{
                if(err)console.error(error)
                console.log("Success!")
            })
        
    }
})