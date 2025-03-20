$(document).ready(function() {
    let options = {
        fruits: ["Apple", "Banana", "Orange"],
        vegetables: ["Carrot", "Broccoli", "Spinach"]
    };

    $('#category').on('change', function() {
        let category = $(this).val();
        let itemsDropdown = $('#items');
        itemsDropdown.empty().append('<option value="">Select an Item</option>');

        if (options.hasOwnProperty(category)) {
            options[category].forEach(function(item) {
                itemsDropdown.append('<option value="' + item.toLowerCase() + '">' + item + '</option>');
            });
        }
    });
    $('#toggleTheme').on('click', function() {
        $('body').toggleClass('dark-mode');
    });
});


