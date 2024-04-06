const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const loginlayout=document.querySelector('.login');
const registerlayout=document.querySelector('.register');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
})
btnPopup.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
})
function register(){
    loginlayout.classList.add('animationcloselogin');
    registerlayout.classList.add('animationcloselogin');
    loginlayout.classList.remove('animationcloseregister');
    registerlayout.classList.remove('animationcloseregister');
}
function login(){
    loginlayout.classList.add('animationcloseregister');
    registerlayout.classList.add('animationcloseregister');
    loginlayout.classList.remove('animationcloselogin');
    registerlayout.classList.remove('animationcloselogin');
}
