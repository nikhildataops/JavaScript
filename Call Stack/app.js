// function hello(){
//     console.log("Inside hello function");
    
//     console.log("hello");
    
// }
// hello();


// function demo(){
//     hello();
// }
// console.log("calling demo function");

// demo();
// console.log("done bhaiii");

// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//    let ans=two()+one();
//    console.log(ans);
   
// }
// three();


// let a=276;
// console.log(a);

// let b=376;
// console.log(b);

// let sum=a+b;
// console.log(sum);


// setTimeout(function(){
//     console.log("Nikhil");
    
// },2000);
// setTimeout(function(){
//     console.log("Nikhil Yadav");
    
// },2000);
// console.log("hello");


// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let speed=Math.floor(Math.random()*10)+1;
//         if(speed>4){
//             resolve("data was saved");
//         }
//         else{
//             reject("failure:weak connection");
//         }

//     });
// }
// saveToDb("Nikhil")
//  .then((result)=>{
//     console.log("result:",result);
    
//     console.log("data1  saved :resolve");
//     return saveToDb("Yadav");
//  })

//  .then((result)=>{
//     console.log("result:",result);
    
//         console.log("data2 resolved");
        
//  })
//     .catch((error)=>{
//         console.log("error:",error);
        
//     console.log("data not saved:reject");
    
// });

// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//           let num=Math.floor(Math.random()*5)+1;
//           if(num>3){
//             reject("promise rejected")
//           }
//         h1.style.color=color;
//         console.log(`color changed to ${color}`);
        
//         resolve("color changed");
        
//     },delay);

//     });
// }

// async function show() {
  
//   try{
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("pink",1000);
//   } catch(err){
//     console.log("error caught");
//     console.log(err );
    
    

//   }
  
//   let a=5;
//   console.log(a);
//   console.log("New Number=",a+3);
  
  
// }
// show();
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// }).
//   then(()=>{
//     console.log("orange color changed");
//     return changeColor("green",1000);
    
//   })
//   .then(()=>{
//     console.log("green color changed");
    
//   })
  
  

// // call back nesting => callback hell
// changeColor("red",1000,()=>{
//     changeColor("blue",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("orange",1000);
//         });
//     });

// });
// let demo=async()=>{

// }

// let jsonData='{"fact":"Nikhil Yadav","length":47}';
// let jsonToJs=JSON.parse(jsonData);
// console.log(jsonToJs);
// console.log(jsonToJs.fact);

let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
  console.log(response);
  

})
.catch((err)=>{
  console.log("error".err);
  
})