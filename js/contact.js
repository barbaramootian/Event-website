function validateform() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("comment").value;
    if (email !== "" && name !== "" && message !== "") {
        alert(
            "Hello" + "" + ""  + name +  " Thanks for reaching out to Endless Events. We have received your Message!."
        );
    } else if (email == "" || name !== ""  || phone !== "" || message !== "") {
        alert("Please fill in  all the field");
    }
}