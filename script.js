const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
var inputs = document.querySelectorAll('.input-box input');

inputs.forEach((input) => {    
    input.addEventListener('input', () => {        
        if(input.value == '') {
            input.classList.remove('not-empty');
        }        
        else {
            input.classList.add('not-empty');
        }
    });
});

registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup");
});