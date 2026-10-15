// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for (let i = 0; i < arr.length; i++) {
//     if(num==arr[i]){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


//Count number of digits
let num=287152;
let count=0;

while(num>0){
    num=Math.floor(num/10);
    count++;
}
console.log(count);
// sum of digits
let n=287152;
let sum=0;
while(n>0){
    let rem=n%10;
    sum=rem+sum;
    n=Math.floor(n/10);
}
console.log(sum);
// Factorial of a number
let n1=prompt("Enter the number");
let fact=1;
for(let i=1;i<=n1;i++){
    fact=fact*i;
}
console.log(fact);
//Find the largest number in the array
let arr=[22,45,67,98,9,56,];
let max=0;
for(nb of arr){
    if(nb>max){
        max=nb;
    }
}
console.log(max);



