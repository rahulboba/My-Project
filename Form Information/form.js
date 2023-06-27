let FirstName=document.getElementById("fname");
let LastName=document.getElementById("lname");
let email=document.getElementById("Email");
let phone=document.getElementById("Phone");
let form=document.querySelector("form");

console.log(email,FirstName,LastName,phone);

function validateInput(){
//first name    
    if(FirstName.value ===""){
       onError(FirstName,"First Name cannot be empty");
    }else{
        onSuccess(FirstName);
    }
//last name
	if(LastName.value ===""){
       onError(LastName,"Last Name cannot be empty");
    }else{
        onSuccess(LastName);
    }
//email
    if(email.value ===""){
        onError(email,"Email cannot be empty");
    }else{
        //console.log(isValidEmail());
        if(EmailValidation(email.value)){
            //console.log(email.value)
            onSuccess(email);
        }else{
            onError(email,"Email is not valid!");
        }
    }
//phone
    if(phone.value.trim()===""){
        onError(phone,"Phone number cannot be empty");
     }else{
         onSuccess(phone);
     }
}
// event onclick submit button
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="hidden";  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("span");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
}

function EmailValidation(email){
    //console.log(email);
    let emailTest = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
   //console.log(emailTest);
    return emailTest
}








//(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
