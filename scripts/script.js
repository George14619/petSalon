console.log("Welcome to FSDI 104");

// global variable
let globalVariable = " I am a global variable";

function exampleFunction(){
    // local variable
    let localVariable = "I am a local variable";
    console.log(globalVariable);
    console.log(localVariable);
    if(true){
        let blockVariable="This is a block variable";
        console.log(blockVariable);
    }
    //console.log(blockVariable);
}
console.log(globalVariable);
// console.log(localVariable);
// console.log(blockVariable);

exampleFunction();

//---- ARRAYS ----- 
let fruits = ["apple","banana","orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1]="cherry";

console.log(fruits);

//array length
console.log(fruits.length); // output 3

//add and remove items
fruits.push("watermelon");// adding the item to the end
console.log(fruits);

fruits.pop();// removing from the end
fruits.pop();// removing from the end

console.log(fruits);

fruits.unshift("grapes");// adding to the beginning
console.log(fruits);

fruits.shift();// removing from the beginning
console.log(fruits);


// CHALLENGE 1 . using arrays []
// 1. Create an array of students names
// 2. use a for loop to iterate through the array
// 3. log each student name

let studentNames = ["Isai","George","Jeffrey","Erick","Rafael","John"];

for(let i=0;i<studentNames.length;i++){
    console.log(studentNames[i]);
}

// ======  OBJECTS {} ======
// An obj is a collection of key-value pairs.
// it allow us to have the data together in an structured way.
/* 
    let objectName = {
        key1:value1,
        key2:value2,
        key3:value3
    }
*/
// obj literal 

let person = {
    name:"Mike",
    lastName:"Scott",
    age:40,
    isStudent:false
}

//access to properties of an obj
console.log(`The person name is ${person.name}`);
console.log(person['age']);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
    name:"Leo",
    email:"leo@gmail.com",
    age:80,
    address:"742 evergreen terrace springfliend, USA"
}

// create another 3 students
let student2 = {
    name:"bruce",
    email:"bruce@gmail.com",
    age:50,
    address:"123 maple street, apartment 4b"
}
let student3 = {
    name:"pam",
    email:"pam@gmail.com",
    age:20,
    address:"123 maple street, apartment 4b"
}
let student4 = {
    name:"peter",
    email:"peter@gmail.com",
    age:60,
    address:"123 maple street, apartment 4b"
}
let studentList = [student1,student2,student3,student4];
console.log("student list: " + studentList.length);

document.getElementById("studentsCounter").innerHTML=`
We have ${studentList.length} students in the system`;

console.log(`email:${studentList[1].email}, address:${studentList[1].address}`);

function getStudentsNames(){
    let list = document.getElementById("studentNames");
    for(let i=0;i<studentList.length;i++){
        console.log(studentList[i].name);
        list.innerHTML+=`<li> ${studentList[i].name} </li>`
    }
}

getStudentsNames();