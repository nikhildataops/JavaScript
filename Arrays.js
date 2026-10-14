//Arrays
let students=["Nikhil","sankit","Aman"];
console.log(students);
console.log(students[0]);

let even=[2,4,6,8];
console.log(even);

let info=['aman',93,5.9];
console.log(info);
console.log|(info[0]='Nikhil');
//Arrays Methods
let cars=['audi','bmw','xuv','maruti'];
console.log(cars);
console.log(cars.push("toyoto"));

let primary=['red','yellow','blue'];
console.log(primary.indexOf('red'));
console.log(primary.indexOf('green'));
console.log(primary.indexOf('Yellow'));

console.log(primary.includes('red'));
console.log(primary.includes('green'));

let secondary=['orange','green','violet'];
let colors=primary.concat(secondary);

console.log(colors);
console.log(primary.reverse());
console.log(primary);
console.log(primary.slice(1,2));
console.log(primary.slice(-2));

console.log(colors.splice(5))
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,2,"black","grey"));
console.log(colors);
console.log(colors.sort());

let marks=[22,32,44,53,543,35,1,2,3,46,4,68,5];
console.log(marks.sort());
let start=['january','july','march','august'];
console.log(start.splice(0,1,'july'));
console.log(start.splice(1,1,'june'));
console.log(start);
//Arrays References
let arr=[2,3,4];
let arrCopy=arr;
arr.push('q');
console.log(arrCopy);
//Constant Arrays
const arr1=[1,2,3];
arr1.push(4);
console.log(arr1);
//Nested Arrays
let nums=[[1,3],[2,6],[3,9]];
console.log(nums);
console.log(nums[0]);
//tic-tac toe game 
let tic=[['x',null,'o'],[null,'x',null],['o',null,'x']]
console.log(tic);


