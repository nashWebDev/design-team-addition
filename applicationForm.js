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

    document.querySelector("img").src = bookTITLE.cover;
    document.querySelector("img").alt = bookTITLE.title;

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

// Prevent submit and validate dates
document.addEventListener("submit", function(event){
    event.preventDefault();

    let bookRented = false;
    if (bookRented) {
        alert("Book is currently being rented, will be available by return date");
    }

    let rentDate = document.getElementById("rentDate").value;
    let returnDate = document.getElementById("returnDate").value;

    dataValidation(rentDate, returnDate);


});



//footer to appear at bottom
function getBodyHeight() {
let body = document.body, html = document.documentElement;
return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

document.getElementById("foot").style.top = (getBodyHeight()/5)+"px";
