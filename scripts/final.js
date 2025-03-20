// Pet Constructor
class Pet {
    constructor(name, age, gender, breed, service, type, id = Date.now()) {
        this.id = id; // Unique ID
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
    let name = document.getElementById("txtName").value.trim();
    let age = document.getElementById("txtAge").value.trim();
    let gender = document.getElementById("txtGender").value;
    let breed = document.getElementById("txtBreed").value.trim();
    let service = document.getElementById("txtService").value;
    let type = document.getElementById("txtType").value;

    if (!name || !age || !breed) {
        alert("Please fill in all required fields.");
        return;
    }

    if (editingPetId !== null) {
        let petIndex = pets.findIndex(p => p.id === editingPetId);
        if (petIndex !== -1) {
            pets[petIndex] = new Pet(name, age, gender, breed, service, type, editingPetId);
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

document.addEventListener("DOMContentLoaded", function () {

    // Service price calculation
    function calculateTotal() {
        const serviceSelect = document.getElementById("serviceSelect");
        const totalCost = document.getElementById("totalCost");

        let price = 0;
        switch (serviceSelect.value) {
            case "Grooming": price = 50; break;
            case "Bathing": price = 30; break;
            case "Nail Trimming": price = 20; break;
            case "Vet Check": price = 70; break;
            case "Vaccination": price = 60; break;
            case "Training": price = 100; break;
        }
        totalCost.textContent = `${price}`;
    }

    // Attach event listener to service select
    const serviceSelect = document.getElementById("serviceSelect");
    if (serviceSelect) {
        serviceSelect.addEventListener("change", calculateTotal);
    }

    // Checkout function
    document.getElementById("checkoutBtn")?.addEventListener("click", function () {
        let selectedService = document.getElementById("serviceSelect").value;
        let paymentMethod = document.getElementById("paymentMethod").value;
        let totalCost = document.getElementById("totalCost").textContent.replace("$", "");

        if (!selectedService) {
            alert("Please select a service before proceeding to payment.");
            return;
        }

        let confirmationMessage = `You have selected the ${selectedService} service.\nTotal Cost: $${totalCost}\nPayment Method: ${paymentMethod.toUpperCase()}\n\nProceed with payment?`;

        if (confirm(confirmationMessage)) {
            alert("Thank you for your payment! Your booking is confirmed.");
        }
    });

    // Initial calculation on page load
    calculateTotal();
});

// Function to display notifications
function showNotification(message, type = "success") {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = `notification ${type}`;

    setTimeout(() => {
        notification.textContent = "";
        notification.className = "";
    }, 3000);
}

// Function to add a new service
function addService() {
    let serviceName = document.getElementById("serviceName").value.trim();
    
    if (serviceName === "") {
        showNotification("Service name cannot be empty!", "error");
        return;
    }

    let services = JSON.parse(localStorage.getItem("services")) || [];
    
    if (services.includes(serviceName)) {
        showNotification("Service already exists!", "error");
        return;
    }

    services.push(serviceName);
    localStorage.setItem("services", JSON.stringify(services));

    document.getElementById("serviceName").value = ""; // Clear input
    showNotification("Service added successfully!");
    displayServices();
}

// Function to display services on services.html
function displayServices() {
    let services = JSON.parse(localStorage.getItem("services")) || [];
    let serviceList = document.getElementById("serviceList");
    
    if (serviceList) {
        serviceList.innerHTML = services.map(service => `<li>${service}</li>`).join("");
    }
}

// Function to populate the service dropdown in register.html
function loadServices() {
    let services = JSON.parse(localStorage.getItem("services")) || [];
    let serviceSelect = document.getElementById("serviceSelect");

    if (serviceSelect) {
        serviceSelect.innerHTML = services.length 
            ? services.map(service => `<option value="${service}">${service}</option>`).join("")
            : `<option value="">No services available</option>`;
    }
}

// Function to register a pet
function registerPet() {
    let petName = document.getElementById("petName").value.trim();
    let serviceSelected = document.getElementById("serviceSelect").value;

    if (petName === "" || serviceSelected === "") {
        showNotification("Please enter pet name and select a service!", "error");
        return;
    }

    showNotification(`Pet "${petName}" registered for "${serviceSelected}" successfully!`);
}

// Ensure functions run on respective pages
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("serviceList")) {
        displayServices();
    }
    if (document.getElementById("serviceSelect")) {
        loadServices();
    }
});

