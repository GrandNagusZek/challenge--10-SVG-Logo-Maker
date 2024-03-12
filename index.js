const inquirer=require("inquirer")
const fs=require("fs")
const Triangle =require("./lib/triangle")
const Square =require("./lib/square")
const Circle =require("./lib/circle")


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
inquirer.prompt(questions)
.then(data=>{
    if(data.shape==="circle"){
        const circle = new Circle(data.text, data.textColor, data.shapeColor)
        fs.writeFile("./examples/circle.svg", circle.render(), err=> {
            if(err)console.error(error)
            console.log("Success!")
        })
    }
    else if(data.shape==="triangle"){
        const triangle = new Triangle(data.text, data.textColor, data.shapeColor)
        fs.writeFile("./examples/triangle.svg", triangle.render(), err=> {
            if(err)console.error(err)
            console.log("Success!")
        })
    }else{
        (data.shape==="square")
            const square = new Square(data.text, data.textColor, data.shapeColor)
            fs.writeFile("./examples/square.svg", square.render(), err=>{
                if(err)console.error(error)
                console.log("Success!")
            })
        
    }
})