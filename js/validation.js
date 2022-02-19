validateForm = function () {
    return check();
}

function check() {
    var x = document.myForm;
    var input = x.name.value;
    var phone = x.phone.value;
    var email = x.email.value;
    var disabledButton = document.getElementById('validateTestButton');
    var errMsgHolder = document.getElementById('nameErrMsg');
    var errMsgHolder2 = document.getElementById('nameErrMsg2');
    var errMsgHolder3 = document.getElementById('nameErrMsg3');
    var successMsg;


   if(input.length == 0 || input.indexOf(' ')>=0) {
        errMsgHolder.innerHTML = "Empty field is not allowed!"
        errMsgHolder.style.display = 'block';
        
   }
   else if(input.length > 0) {
        errMsgHolder.innerHTML = "";
   }
   if(phone.length == 0 || phone.indexOf(' ')>=0) {
            errMsgHolder2.innerHTML = "Empty field is not allowed!";
            errMsgHolder2.style.display = 'block';
    }
    else if(phone.length > 0) {
        errMsgHolder2.innerHTML = "";
    }

    if(email.length == 0 || email.indexOf(' ')>=0) {
            errMsgHolder3.innerHTML = "Empty field is not allowed!";
            errMsgHolder3.style.display = 'block';
    }
    else if(email.length > 0) {
        errMsgHolder3.innerHTML = "";
    }

    if(input.length > 0 && input.indexOf(' ')<0) {
        if(phone.length > 0 && phone.indexOf(' ')<0) {
            if(email.length > 0 && email.indexOf(' ')<0)  {
                 disabledButton.removeAttribute("disabled");
                 disabledButton.classList.add("successMsg")
                 successMsg = document.querySelector(".successMsg");
                 successMsg.onclick = function() {
                     document.write("You have successfully submited data!")
                 }
            }
            else {
                disabledButton.setAttribute("disabled","");
            }
        }
        else {
            disabledButton.setAttribute("disabled","");
        }
   }
    else {
        disabledButton.setAttribute("disabled","");
    }
}