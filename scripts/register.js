// getting the inputs from the HTML
let pets=[];
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");

// constructor
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}
//register function
function register(){
    // create the obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    //push the obj into array
    pets.push(newPet);
    console.log(pets);
}
function clearInputs(){
    
}

//init function
function init(){
    // create three obj
    let pet1 = new Pet("Scooby",99,"Male","Dane");
    let pet2 = new Pet("Scrappy",89,"Male","Mixed");
    let pet3 = new Pet("Speedy",99,"Male","Mixed");

    // push the obj to the array
    pets.push(pet1,pet2,pet3);

    console.log(pets);
}

window.onload=init;// wait to render the HTML



