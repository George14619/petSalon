// Pet Constructor
class Pet {
    constructor(name, age, gender, breed, service, type) {
        this.id = Date.now(); // Unique ID
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.type = type;
    }
}

let pets = [];
let editingPetId = null; // Track if a pet is being edited

// Register a new pet
function register() {
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let gender = document.getElementById("txtGender").value;
    let breed = document.getElementById("txtBreed").value;
    let service = document.getElementById("txtService").value;
    let type = document.getElementById("txtType").value;

    if (!name || !age || !breed) {
        alert("Please fill in all required fields.");
        return;
    }

    if (editingPetId !== null) {
        let petIndex = pets.findIndex(p => p.id === editingPetId);
        if (petIndex !== -1) {
            pets[petIndex] = new Pet(name, age, gender, breed, service, type);
            pets[petIndex].id = editingPetId;
        }
        editingPetId = null; 
    } else {
        let newPet = new Pet(name, age, gender, breed, service, type);
        pets.push(newPet);
    }

    clearInputs();
    displayPets();
}

// Display registered pets
function displayPets() {
    let petList = document.getElementById("petList");
    petList.innerHTML = "";

    pets.forEach(pet => {
        let petCard = document.createElement("div");
        petCard.classList.add("col-md-4");

        petCard.innerHTML = `
            <div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title">${pet.name} (${pet.type})</h5>
                    <p class="card-text"><strong>Age:</strong> ${pet.age} | <strong>Gender:</strong> ${pet.gender}</p>
                    <p class="card-text"><strong>Breed:</strong> ${pet.breed}</p>
                    <p class="card-text"><strong>Service:</strong> ${pet.service}</p>
                    <button class="btn btn-secondary btn-sm" onclick="editPet(${pet.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deletePet(${pet.id})">Delete</button>
                </div>
            </div>
        `;

        petList.appendChild(petCard);
    });
}

// Edit pet
function editPet(id) {
    let pet = pets.find(p => p.id === id);
    if (pet) {
        document.getElementById("txtName").value = pet.name;
        document.getElementById("txtAge").value = pet.age;
        document.getElementById("txtGender").value = pet.gender;
        document.getElementById("txtBreed").value = pet.breed;
        document.getElementById("txtService").value = pet.service;
        document.getElementById("txtType").value = pet.type;
        editingPetId = id;
    }
}

// Delete pet
function deletePet(id) {
    pets = pets.filter(pet => pet.id !== id);
    displayPets();
}

// Clear inputs
function clearInputs() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "Male";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtService").value = "Grooming";
    document.getElementById("txtType").value = "Dog";
    editingPetId = null;
}

// Navigation function
function navigate(page) {
    window.location.href = page;
}










