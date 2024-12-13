function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        phonenumber : document.getElementById('phone').value,
        email : document.getElementById('email').value
      
    }

    emailjs.send("service_7h9df8h", "template_71tpyyc",parms).then(alert("Email Sent!!"))
   
}