console.log("Pet Salon");
// Pet array with 3 initial pets
let pets = [
    { name: "Brownie", age: 4, gender: "Male", service: "Grooming", breed: "German Shepard" },
    { name: "Penny", age: 10, gender: "female", service: "Vaccination", breed: "Pit Bull" },
    { name: "Caesar", age: 5, gender: "male", service: "Dental", breed: "Poodle" }
];

console.log("Initial pets array:", pets);

// Function to display pet count
function updatePetCount() {
    console.log("Updating pet count...");
    console.log("Current number of pets:", pets.length);
    document.getElementById("petCount").textContent = `We have ${pets.length} pets registered.`;
}
updatePetCount();


// Function to display pet names
function displayPetNames() {
    let petList = document.getElementById("petList");
    petList.innerHTML = ""; 

    console.log("Displaying pet names...");

    for (let pet of pets) {
        console.log(`Adding pet: ${pet.name}`);
        let listItem = document.createElement("li");
        listItem.textContent = `${pet.name} - ${pet.breed} (${pet.service})`;
        petList.appendChild(listItem);
    }
}
displayPetNames();


// Function to calculate and display average age
function calculateAverageAge() {
    if (pets.length === 0) {
        document.getElementById("averageAge").textContent = "Average Age: N/A";
        return;
    }

    let totalAge = pets.reduce((sum, pet) => sum + pet.age, 0);
    let avgAge = (totalAge / pets.length).toFixed(1);
    document.getElementById("averageAge").textContent = `Average Age: ${avgAge}`;
}

// Initial function calls
updatePetCount();
displayPetNames();
calculateAverageAge();
