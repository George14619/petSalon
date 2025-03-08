// Salon Object
let salon = {
    name: "Pet Salon",
    address: "1111 Godzilla Park, NewYork, NY 10031",
    phone: "212-555-1234",
    pets: []
};

// Display salon details on the page
document.getElementById("salonName").textContent = salon.name;
document.getElementById("salonAddress").textContent = salon.address;
document.getElementById("salonPhone").textContent = salon.phone;

// Get input elements
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

// Pet Constructor
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

// Register function
function register() {
    if (inputName.value && inputAge.value && inputBreed.value) {
        // Create the pet object
        let newPet = new Pet(
            inputName.value,
            inputAge.value,
            inputGender.value,
            inputBreed.value,
            inputService.value,
            inputType.value
        );

        // Add the pet to the salon's array
        salon.pets.push(newPet);
        console.log(salon.pets);

        // Update the UI
        displayPets();

        // Clear inputs
        clearInputs();
    } else {
        alert("Please fill in all required fields.");
    }
}

// Function to clear the form inputs
function clearInputs() {
    inputName.value = "";
    inputAge.value = "";
    inputBreed.value = "";
}

// Function to display registered pets
function displayPets() {
    let petList = document.getElementById("petsDisplay");
    petList.innerHTML = ""; // Clear the list

    salon.pets.forEach((pet, index) => {
        let petItem = document.createElement("li");
        petItem.classList.add("list-group-item");
        petItem.innerHTML = `<strong>${pet.name}</strong> (${pet.age} years old, ${pet.gender}) - ${pet.breed}, ${pet.service} Service`;
        petList.appendChild(petItem);
    });
}

// Init function to load initial pets
function init() {
    let pet1 = new Pet("Scooby", 99, "Male", "Dane", "Grooming", "Dog");
    let pet2 = new Pet("Scrappy", 89, "Male", "Mixed", "Bathing", "Dog");
    let pet3 = new Pet("Speedy", 99, "Male", "Mixed", "Nail Trimming", "Dog");

    salon.pets.push(pet1, pet2, pet3);
    displayPets();
}

// Wait for the page to load before initializing
window.onload = init;




