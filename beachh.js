document.addEventListener("DOMContentLoaded", function() {
    // Get the button by its id
    var bookNowButton = document.getElementById('bookNowButton');

    // Add a 'click' event listener to the button
    bookNowButton.addEventListener('click', function() {
        // Redirect to the booking page when the button is clicked
        window.location.href = 'booking.html';
    });
});
