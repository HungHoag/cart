
const loginlayout = document.querySelector('.login');
const registerlayout = document.querySelector('.register');


function register() {
    loginlayout.classList.add('animationcloselogin');
    registerlayout.classList.add('animationcloselogin');
    loginlayout.classList.remove('animationcloseregister');
    registerlayout.classList.remove('animationcloseregister');
}
function login() {
    loginlayout.classList.add('animationcloseregister');
    registerlayout.classList.add('animationcloseregister');
    loginlayout.classList.remove('animationcloselogin');
    registerlayout.classList.remove('animationcloselogin');
}