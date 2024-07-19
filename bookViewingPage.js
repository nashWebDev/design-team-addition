document.addEventListener("DOMContentLoaded", function() {
    // Load information from localStorage
    var bookTITLE = JSON.parse(localStorage.getItem("booktitle"));
    var valsFromLoginForm = JSON.parse(localStorage.getItem("loginFormvalsForBookingSystem"));

    console.log(valsFromLoginForm);
    console.log(bookTITLE.title);
    console.log(bookTITLE.cover);

    // Ensure elements with specific IDs are available in the DOM
 
    var bookName = document.getElementById("bookName");
    var putTitle = document.getElementById("booktitle");
    var bookimg = document.getElementById("bookimagehere");

    // Set values to form elements
    if (bookName) {
        
        bookName.value = bookTITLE.title;
    }

    // Set title and image
    if (putTitle) {
        putTitle.innerHTML = bookTITLE.title;
    }

    if (bookimg) {
        bookimg.src = bookTITLE.cover;
        bookimg.alt = bookTITLE.title;
    }
});
