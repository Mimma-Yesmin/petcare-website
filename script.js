// 1. Real-time Search Functionality
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


function filterResults() {
    let filterValue = searchInput.value.toLowerCase();
    let boxes = document.querySelectorAll(".box-container .box");

    boxes.forEach(box => {
    
        let boxText = box.innerText.toLowerCase();
        
        if (boxText.includes(filterValue)) {
            box.style.display = "flex"; 
        } else {
            box.style.display = "none"; 
        }
    });
}


if (searchInput) {
    searchInput.addEventListener("keyup", filterResults);
}


if (searchBtn) {
    searchBtn.addEventListener("click", filterResults);
}

// 2. Modal & Appointment Functionality
const vetModal = document.getElementById("vetModal");
const bookVetBtn = document.getElementById("bookVetBtn");
const closeModal = document.getElementById("closeModal");
const appointmentForm = document.getElementById("appointmentForm");

// Only run this code if the modal exists on the current page (index.html)
if (vetModal && bookVetBtn) {
    // Open Modal
    bookVetBtn.addEventListener("click", function() {
        vetModal.style.display = "flex";
    });

    // Close Modal via 'X'
    closeModal.addEventListener("click", function() {
        vetModal.style.display = "none";
    });

    // Close Modal by clicking outside
    window.addEventListener("click", function(event) {
        if (event.target === vetModal) {
            vetModal.style.display = "none";
        }
    });

    // Handle Form Submission
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let petName = document.getElementById("petName").value;
        
        alert("Success! Vet appointment booked for " + petName + ".");
        
        vetModal.style.display = "none";
        appointmentForm.reset();
    });
}

// 3. Add to Cart Functionality for Food Store (Optional)
const cartButtons = document.querySelectorAll(".book-btn");
cartButtons.forEach(button => {
    if (button.innerText === "Add to Cart") {
        button.addEventListener("click", function() {
            alert("Item added to your cart!");
        });
    }
});

// Grooming Package Booking Functionality
const groomButtons = document.querySelectorAll(".groom-btn");

if (groomButtons.length > 0) {
    groomButtons.forEach(button => {
        button.addEventListener("click", function() {
            
            const packageName = this.parentElement.querySelector("h3").innerText;
            
           
            alert(`You have selected: ${packageName}\nRedirecting to booking confirmation...`);
        });
    });
}
// ==========================================
// 5. Authentication & Profile Functionality
// ==========================================
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const logoutBtn = document.getElementById("logoutBtn");

// Login Logic
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let email = document.getElementById("loginEmail").value;
        
        alert("Login Successful! Welcome back.");
        window.location.href = "profile.html"; 
    });
}

// Sign Up Logic
if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let name = document.getElementById("signupName").value;
        
        alert(`Account created successfully for ${name}! Please login to continue.`);
        window.location.href = "login.html"; 
    });
}

// Logout Logic (Updated to redirect to Login page)
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        let confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            window.location.href = "login.html"; 
        }
    });
}