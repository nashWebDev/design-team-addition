// document.addEventListener("DOMContentLoaded",function(){
//     var username = document.getElementById("user")
//     var valsFromLoginForm = JSON.parse(localStorage.getItem("loginFormvalsForBookingSystem"))


//     username.innerHTML = valsFromLoginForm.user;
// })



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// carasol 

var imageArray = [
    "img/pjLightning.jfif",
    "img/pjSea.jfif",
    "img/pjLastoly.jfif",
    "img/pj4.jfif",
    "img/pj5.jfif"
];

function moveCassarol() {
    let imgout = imageArray.pop();
    imageArray.unshift(imgout);

    let imgElements = document.querySelectorAll(".imgcon img");

    imgElements.forEach((img, index) => {
        img.src = imageArray[index];
        img.className = ''; // Reset classes
        if (index === Math.floor(imgElements.length / 2)) {
            img.classList.add('pop');
        } else if (index === Math.floor(imgElements.length / 2) - 1 || index === Math.floor(imgElements.length / 2) + 1) {
            img.classList.add('lesspop');
        }
    });
}

// Set the initial state
document.addEventListener("DOMContentLoaded", function() {
    moveCassarol();
    setInterval(moveCassarol, 3000); // Automatically move the carousel every 3 seconds
});




//faculatiy
// function rollout() {
//     var row = document.getElementsByClassName("row")
//     var facultyContent = document.getElementsByClassName("bookslide");
//     var facultybtn = document.getElementsByClassName("facbtn");

//     for (var i = 0; i < facultybtn.length; i++) {
//         facultybtn[i].style.display = "flex";
//         facultybtn[i].style.width = "25%"; 
//     }

//     for (var j = 0; j < facultyContent.length; j++) {
//         facultyContent[j].style.display = "flex";
//         facultyContent[j].style.width = "50%";
//     }

//     for (var k = 0; k < row.length; k++) {
//         row[k].style.width = "100%"
//     }

// }
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
