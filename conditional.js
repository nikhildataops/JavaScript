 let name=prompt("enter your name:");
 console.log(name)
console.log("code before if statement");
let age=46;
if(age>=18){
    console.log("you can vote")
    console.log("You can drive")
    
}
 else if(age<18){
    console.log("you cannot drive")
}
else{
    console.log("wrong input")
}

console.log("code after if statement");

//traffic light system
let color = "red";

if(color=="red"){
    console.log('stop');
}
 else if(color=="yellow"){
    console.log("slow down");
}
 else if(color=="green"){
    console.log("go");
}
else{
    console.log("traffic light is broken")
}
//Question
let str = "apple";
if(str[0]==='a' && str.length>3){
    console.log("Good string");
}
else{
    console.log("bad string");
}

if(NaN || 0 || ""|| undefined){
    console.log("it has true value");
}
else{
    console.log("it has false value");
}
//switch-case statements
let colors="red";
switch(colors){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("broken light");
}
//Alert and Prompt in JS
// alert("something is wrong!");
// console.log("hii");
// console.error("this is an error!");
// console.warn("this is simple warning!");

// input from user
// prompt("enter the name :");



