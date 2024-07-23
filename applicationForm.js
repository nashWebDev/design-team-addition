var studId,email,Fname,valsFromLoginForm ,btc ,bct ,bookName ,rentdate ,returndate; 

Fname = document.getElementById("name")
studId = document.getElementById("studentId");
email = document.getElementById("email")
btc = document.getElementById("btc")
bct = document.getElementById("bct")
bookName = document.getElementById("bookname")


document.addEventListener("DOMContentLoaded",function(){ //LOADS INFO FROM LOGIN PAGE HERE,HENCE I WONT NEED MORE FORM VALIDATION SINCE IT WAS ALREADY VALIDATED ON THE LOGIN PAGE
    var bookTITLE = JSON.parse(localStorage.getItem("booktitle"))
    valsFromLoginForm = JSON.parse(localStorage.getItem("loginFormvalsForBookingSystem"))
    console.log(valsFromLoginForm)    
    console.log(bookTITLE.title);
    console.log(valsFromLoginForm.studentID)

    studId.value=valsFromLoginForm.studentID

    email.value = valsFromLoginForm.email
    bookName.value = bookTITLE.title

    var putTitle = document.getElementsByClassName("formH")
    for (var i = 0; i < putTitle.length; i++) {
        putTitle[i].innerHTML = bookTITLE.title ;
    }
    console.log(bookTITLE.cover)


})

function autofiller(){
    var prtname, prtstudentID, prtemail , prtcampus , prtrentdate ,prtreturndate;
        prtname = document.getElementById("prtname")
        prtstudentID = document.getElementById("prtStudentId")
        prtemail = document.getElementById("prtEmail")
        prtcampus = document.getElementById("prtcampus")
        prtrentdate = document.getElementById("prtRentDate")
        prtreturndate = document.getElementById("prtReturnDate")

            prtname.innerHTML ="Name : " +Fname.value;
            prtstudentID.innerHTML = "Student ID : " + studId.value;
            prtemail.innerHTML = "Email : " + email.value;

                if (btc.checked) {
                    console.log("btc")
                    prtcampus.innerHTML = "Campus : btc";
                } else if (bct.checked) {
                    console.log("bct")
                    prtcampus.innerHTML = "Campus : bct";
                }
                rentdate = document.getElementById("rentDate").value
                returndate = document.getElementById("returnDate").value

                prtrentdate.innerHTML = "pickup date : " + rentdate;
                prtreturndate.innerHTML = "return date : " + returndate;


}


// function formfill(){
//     var prtname, prtstudentID, prtemail , prtcampus , prtrentdate,bookSeleted ;
//     var bookTITLE = JSON.parse(localStorage.getItem("booktitle"))
//         prtname = document.getElementById("sname")
//         prtstudentID = document.getElementById("sstudentId")
//         prtemail = document.getElementById("semail")
//         prtcampus = document.getElementById("campused")
//         bookSeleted = document.getElementById("sbookname")
//         prtrentdate = document.getElementById("srentDate")

//             prtname.value =Fname.value;
//             prtstudentID.value =  studId.value;
//             prtemail.value =  email.value;

//                 if (btc.checked) {
                    
//                     prtcampus.value = " btc";
//                 } else if (bct.checked) {
                
//                     prtcampus.value = " bct";
//                 }
//                 rentdate.value = document.getElementById("rentDate").value
//                 bookSeleted.value = bookTITLE.title

//                 prtrentdate.value = + rentdate;
        


// }




function dataValidation(rentDate, returnDate) {
    // Create Date objects from the input values
    let pickupcal = new Date(rentDate);
    let returndatecal = new Date(returnDate);

    // Calculate the time difference in milliseconds
    let timedif = returndatecal - pickupcal;

    // Convert time difference from milliseconds to days
    let dayDif = timedif / (1000 * 60 * 60 * 24);

    // Validate the time difference
    if (dayDif < 0) {
        alert('You can\'t go back in time');
    }else{
    autofiller()
    let revealafter = document.getElementById("revealafter");
    let begonAfter = document.getElementById("begone")
    begonAfter.style.display = "none"
    revealafter.style.display="block"
    }

}
var send = document.getElementById("sub")
var altsend = document.getElementById("sendto")


function formfill() {
    // Get user input from custom form
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const email = document.getElementById('email').value;
    const bookname = document.getElementById('bookname').value;
    const campus = document.querySelector('input[name="campus"]:checked').value;
    const rentDate = document.getElementById('rentDate').value;

    // Get iframe and its document
    const iframe = document.getElementById('googleForm');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Find the input fields in the Google Form iframe
    // Replace entry.XXXXXX with actual entry IDs from the Google Form
    const googleNameField = iframeDoc.querySelector('input[name="entry.825025494"]'); // Replace with actual entry ID
    const googleStudentIdField = iframeDoc.querySelector('input[name="entry.1500682795"]'); // Replace with actual entry ID
    const googleEmailField = iframeDoc.querySelector('input[name="entry.51807876"]'); // Replace with actual entry ID
    const googleBooknameField = iframeDoc.querySelector('input[name="entry.342186377"]'); // Replace with actual entry ID
    const googleCampusField = iframeDoc.querySelector('input[name="entry.418446264"][value="' + campus + '"]'); // Replace with actual entry ID
    const googleRentDateField = iframeDoc.querySelector('input[name="entry.1820651005"]'); // Replace with actual entry ID

    // Set the values of the Google Form fields
    googleNameField.value = name;
    googleStudentIdField.value = studentId;
    googleEmailField.value = email;
    googleBooknameField.value = bookname;
    googleCampusField.checked = true;
    googleRentDateField.value = rentDate;

    // Find the submit button and click it
    const submitButton = iframeDoc.querySelector('form').querySelector('input[type="submit"]');
    submitButton.click();
}





// Prevent submit and validate dates
// send.addEventListener("submit", function(event){
//     event.preventDefault();

//     let bookRented = false;
//     if (bookRented) {
//         alert("Book is currently being rented, will be available by return date");
//     }

//     let rentDate = document.getElementById("rentDate").value;
//     let returnDate = document.getElementById("returnDate").value;

//     dataValidation(rentDate, returnDate);

//     autofiller()




// });

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



//footer to appear at bottom
function getBodyHeight() {
let body = document.body, html = document.documentElement;
return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

document.getElementById("foot").style.top = (getBodyHeight()/5)+"px";
