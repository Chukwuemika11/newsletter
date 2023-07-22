const email = document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the input

    const emailValue    =  email.value.trim();


    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
      
    }
    else{
        setSuccessFor(email);
        window.location.href = 'success.html';
    }

     
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside the small tag
    small.innerText= message;
    
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';

}



function isEmail(email){
    return  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
//   return /^([a-z\d\.-]+@([a-z/d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i.test(email);
}


function changeSvgForMobile(){
    const svgImage = document.querySelector('.svg-image');
    const mobileSvgPath = './assets/images/illustration-sign-up-mobile.svg';
    svgImage.src = mobileSvgPath;
    svgImage.alt = 'Mobile Svg Image';
}

//check if the current screen width is 375px or less and change the SVG image accordinly
function checkScreenWidth() {
    if(window.innerWidth <= 375){
        changeSvgForMobile();
    }
}

//Call the function on page load and on window resize
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;










// function validateEmail(){
//     const emailInput = document.getElementById('emailInput');
//     const errorMessage = document.getElementById('errorMessage');

//     //Regular expression to chck for the validaty of the email
//     const emailRegex =/^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/;

//     if (!emailRegex.test(emailInput.value)){
//         errorMessage.textContent = 'Please enter a valid email address.';
//         errorMessage.style.display = 'block';
//         return false; //Prevent form submission if email is invalid
//     }
//     else{
//         errorMessage.style.display='none';
//         //here, you can implement your code to handle the submission a valid email address
//         alert('Email is valid and ready for submission: ' + emailInput.value);
//         return false; 
//     }
// }














