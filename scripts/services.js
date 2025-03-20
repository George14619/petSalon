$(document).ready(function () {
    // Service price 
    const servicePrices = {
        "Grooming": 50,
        "Bathing": 30,
        "Nail Trimming": 20,
        "Vet Check": 70,
        "Vaccination": 60,
        "Training": 100
    };
    document.addEventListener("DOMContentLoaded", function () {
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
            totalCost.textContent = price;
        }
    
        document.getElementById("serviceSelect").addEventListener("change", calculateTotal);
    
        document.getElementById("checkoutBtn").addEventListener("click", function () {
            alert("Proceeding to payment...");
            // Implement payment logic here
        });
    });

    // Function to calculate the total price
    $("#serviceSelect").change(function () {
        let selectedService = $(this).val();
        let totalCost = servicePrices[selectedService] || 0;
        $("#totalCost").text(totalCost);
    });

    // Checkout function
    $("#checkoutBtn").click(function () {
        let selectedService = $("#serviceSelect").val();
        let paymentMethod = $("#paymentMethod").val();
        let totalCost = $("#totalCost").text();

        if (!selectedService) {
            alert("Please select a service before proceeding to payment.");
            return;
        }

        let confirmationMessage = `You have selected the ${selectedService} service.\nTotal Cost: $${totalCost}\nPayment Method: ${paymentMethod.toUpperCase()}\n\nProceed with payment?`;

        if (confirm(confirmationMessage)) {
            alert("Thank you for your payment! Your booking is confirmed.");
        }
    });
});

