//Arithmetic operators
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//unary operators
console.log(a++);
console.log(a)
console.log(--a);
//Assignment operators
console.log(a+=20);
console.log(a-=20);
//comparison operator
let age=67;
console.log(age>18);
console.log(age<18);
console.log(age!=67)
 
let num=5;
let str='5';
console.log(num==str);
console.log(num===str);
//comparision for non numbers

// 'a'<'b' because they have their unicode values
//logical operators
let marks=90;
if(marks>=33 && marks>=80){ // both condition should be true
    console.log("pass");
}
else if(marks==50 || marks<=80){ // one value should be true
    console.log("pass with second grade");
}
else if((!marks<33)){
    print("pass");
}
