function validateForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var month = document.getElementById('month').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage')

    
    errorMessage.textContent = '';

  
    if (name.trim() === '') {
        errorMessage.textContent = 'Full Name is required.';
        return false;
    }

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        errorMessage.textContent = 'Email is required.';
        return false;
    } else if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

 
    if (month.trim() === '') {
        errorMessage.textContent = 'Please select a travel month.';
        return false;
    }

   
    if (message.trim() === '') {
        errorMessage.textContent = 'Message is required.';
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

   
document.getElementById("gotoabout").addEventListener("click", function(e) {
    e.preventDefault(); 

    var transition = document.createElement("div");
    transition.classList.add("page-transition");

    
    document.body.appendChild(transition);

    
    setTimeout(function() {
        transition.classList.add("active");
    }, 10); 

   
    setTimeout(function() {
        window.location.href = "about.html"; 
    }, 200); 
});


