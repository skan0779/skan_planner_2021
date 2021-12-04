const loginForm=document.querySelector("#login__form");
const loginFormInput=document.querySelector("#login__form input");
const greeting=document.querySelector("#greeting");
const savedUsername=localStorage.getItem("username");
const planForm=document.querySelector("#plan");


function paintGreeting(){
    const username=localStorage.getItem("username");
    greeting.innerText=`${username}'s Plan`;
    greeting.classList.remove("hidden");
}

function loginSubmit(event){
    event.preventDefault();
    localStorage.setItem("username",loginFormInput.value);
    loginForm.classList.add("hidden");
    planForm.classList.remove("hidden");
    paintGreeting();
}

if (savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",loginSubmit);
} else{
    planForm.classList.remove("hidden");
    paintGreeting();
}
 

