//create array
const arr=[];

//add elements to array
arr.push(1);
arr.push("hello");

//access elements
arr.ar(0); //1
arr[1]; //"hello"

const arr2=['a','b','c'];

//concatenate arrays and slice array
const combined = arr.concat(arr2); // [1, "hello", "a", "b", "c"]
const sliced = combined.slice(1, 4); // ["hello", "a", "b"]


//every and some methods
const arr3=[20,22,24,93,1];

arr3.every(fun); 

function fun(value){
    return value>18;
}

//filter method
const filt= arr3.filter(fun1);

function fun1(value){
    return value>18;
}

//find
const find= arr3.find(fun1);

//find index
const index = arr3.findIndex(fun1);

//flatmap method
const arr4 = [1, 2, 3,[4,5]];
const flat= arr4.flatMap(x => [x,x*2]);

/*
other way
const flat= arr4.map(x => [x,x*2]).flat();
*/

//for each function 
arr4.forEach(fun3);

function fun3(value){
    console.log(value);
}

//from method
const str = "ved";
const arr5 = Array.from(str); // ['v', 'e', 'd']     

//for array to string 
let ans = arr5.join(); // "v,e,d"

//map function 
const map= arr4.map(x => x*2); // [2, 4, 6]

const persons = [
    {firstname:"ved", lastname:"shrimali"},
    {firstname:"raj", lastname:"patel"}
];

const map1 = persons.map(funct);

function funct(value){
    return value.firstname + " " + value.lastname;
}

console.log(map1); // ["ved shrimali", "raj patel"]

//reduce method
const sum = arr3.reduce((acc, val) => acc + val, 0); // 160