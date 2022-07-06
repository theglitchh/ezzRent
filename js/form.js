//select inputs
const loader = document.querySelector('.loader');
const submitBtn =  document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#termscond');
const notification = document.querySelector('label[for="notification"]');


submitBtn.addEventListener('click',() =>{
    if(name!=null){
   if(name.value.length < 3){
       showAlert('Name must be at least 3 characters long');

   } else if(!email.value.length ){
       showAlert('Email is required');
   }  else if(!number.value.length){
       showAlert('Number is required');
   } else if(!Number(number.value) || number.value.length < 10){
       showAlert('Number must be at least 10 digits long');

   } else if(password.value.length < 8){
       showAlert(('Password must be at least 8 characters long'));
   } else if(!tac.checked){
       showAlert('You must agree to our terms and conditions');
   } else {
       loader.style.display = 'block';
       sendData('/signup',{
           name: name.value,
           email: email.value,
           password: password.value,
           number: number.value,
           tac: tac.checked,
           notification: notification.checked,
           seller: false
       })
    }
    }else{
        // login page 
        if (!email.value.length || !password.value.length){
            showAlert("fill all the inputs");
        }else{

        }
    }


} )
// send data  function
const sendData=(path, data) =>{
    fetch(path,{
        method:'post',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(data)
    }) .then((res) => res.json())
        .then(response => {
          processData(response);
        })
}


const processData = (data) =>{
    loader.style.display = null;
    if (data.alert){
        showAlert(data.alert);
    } else if (data.name){
        
        //create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user =JSON.stringify(data);
        location.replace('/');
    }
}
// calling alert function

const showAlert = (msg) =>{
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() =>{
        alertBox.classList.remove('show');
    },2000);
}