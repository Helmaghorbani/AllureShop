const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.getElementById('email');
const noUserData = document.getElementById('noUserData');
const noPasswordData = document.getElementById('noPasswordData');
const noEmailData = document.getElementById('noEmailData');
const noAgeData = document.getElementById('noAgeData');
const age = document.getElementById('age');
const btnSend = document.getElementsByTagName('button')[1];
const approve = document.querySelector('#approve');
const dayNight = document.getElementById('dayNight');
const Body = document.getElementsByTagName('body')[0];
const favColor = document.getElementById('favColor');
const male = document.getElementById('male');
const female = document.getElementById('female');
const gender = document.getElementById('gender');



function radioInp(e){
    debugger
    let innerInput = e.id;
    if(innerInput == 'male'){
                Body.classList.add('male');
                Body.classList.remove('female');
    }else if(innerInput == 'female'){
                Body.classList.add('female');
                Body.classList.remove('male');
            }
}



function btnClick(){
    debugger
    if(username.value != '' && username.value != null){
        alert('well done!');
    }else{
        noUserData.innerText = 'Oops! enter Username ...'
    }

    if(password.value != '' && password.value != null){
        alert('well done!');
    }else{
        noPasswordData.innerText = 'Oops! write your password ...'
    }    
}

username.addEventListener('blur', function(){
    let User = username.value;
    console.log(User);
})


function setPassword(){
    let Pass = password.value;
    if(Pass.length > 10){
        noPasswordData.innerText = 'Is your password a novel?';
    }

    if(Pass.length < 4){
        noPasswordData.innerText = 'Make it harder';
    }
    
}

password.addEventListener('blur', setPassword);

function blr(){
    let User = username.value;
     console.log(User);
}



age.addEventListener('blur', function(){
    let Age = age.value;
    if(isNaN(Age) == true){
        noAgeData.innerText='Number are required, not optional!';
    }else{
        Age = Number(Age);
    }
    
    debugger
})

approve.addEventListener('change', function(){
    if(approve.checked == true){
        btnSend.removeAttribute('disabled');
    }else if(approve.checked == false){
        btnSend.setAttribute('disabled', true);
    }    
})


