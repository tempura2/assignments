
function validateForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var month = document.getElementById('month').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage')

    
    errorMessage.textContent = '';

    //Name
    if (name.trim() === '') {
        errorMessage.textContent = 'Full Name is required.';
        return false;
    }
    //Email
    if (email.trim() === '') {
        errorMessage.textContent = 'Email is required.';
        return false;
        //Assures that email is entered in a correct format by user
    } else if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

     //Month
    if (month.trim() === '') {
        errorMessage.textContent = 'Please select a travel month.';
        return false;
    }

    //Message
    if (message.trim() === '') {
        errorMessage.textContent = 'Message is required.';
        return false;
    }
    //Alert that form is submitted if every content is entered correctly
    alert("Form submitted successfully!");
    return true;
}

function gotoaboutpage() {
    window.location.href='about.html'
}

function toculturepage() {
    window.location.href='#culture'
}

function toactivitiespage() {
    window.location.href='activities.html'
}

function backtoaboutpage() {
    window.location.href='about.html'
}
   
function toattractionpage() {
    window.location.href='attraction.html'
}

function backtofoodpage() {
    window.location.href='activities.html'
}

function toplanpage() {
    window.location.href='plan.html'
}

function backtoactivitiespage() {
    window.location.href='activities.html'
}


