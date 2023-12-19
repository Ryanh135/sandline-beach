var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
document.addEventListener("DOMContentLoaded", function() {
  // Get the button by its id
  var bookNowButton = document.getElementById('bookNowButton');

  // Add a 'click' event listener to the button
  bookNowButton.addEventListener('click', function() {
      // Redirect to the booking page when the button is clicked
      window.location.href = 'booking.html';
  });
});