// Add a submit event listener to the form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from being submitted immediately

    var fields = ['exampleFormControlInput1', 'exampleFormControlSelect1', 'exampleFormControlInput3', 'exampleFormControlTextarea1'];
    var allFilled = fields.every(function(fieldId) {
        var field = document.getElementById(fieldId);
        if (!field || !field.value) {
            alert('Please fill out all fields before submitting.');
            return false;
        }
        return true;
    });

    if (allFilled) {
        alert('Form submitted successfully!');
        // Here, you can add an AJAX call to your server to actually submit the form
    }
});

// Add click event listeners to the buttons
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        alert(this.innerText + ' button clicked!');
    });
});

document.getElementById('myForm').onsubmit = function() {
    var inputEmail = document.getElementById('exampleFormControlInput1');
    var inputSubject = document.getElementById('exampleFormControlInput3');
    var inputMessage = document.getElementById('exampleFormControlTextarea1');

    if (!inputEmail.value || !inputSubject.value || !inputMessage.value) {
        alert('Please fill out all fields before submitting.');
        return false;
    }
}

document.getElementsByClassName('btn btn-outline-light me-2')[0].onclick = function() {
    alert('Login button clicked!');
}

document.getElementsByClassName('btn btn-warning')[0].onclick = function() {
    alert('Signup button clicked!');
}

