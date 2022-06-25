var menuIcon = document.getElementById("menu-icon");
var close = document.getElementById("close");
var dropDown = document.getElementById("dropdown");
var blur = document.getElementById("blur");
var nav = document.getElementById("nav");
var links = document.querySelectorAll(".link");
var text = document.getElementById("text");
var hero = document.getElementById("hero");

menuIcon.addEventListener("click", function(){    
    dropDown.style.display = "block";
    menuIcon.style.display = "none";
    close.style.display = "block";
    blur.style.display = "block";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    nav.style.borderBottom = "1px solid rgba(0, 0, 0, 0.01)";
})


close.addEventListener("click", function(){    
    dropDown.style.display = "none";
    menuIcon.style.display = "block";
    close.style.display = "none"
    blur.style.display = "none";
    nav.style.backgroundColor = "#fff";
    nav.style.borderBottom = "1px solid #BF9553";
})


const x = window.matchMedia("(max-width: 1000px)");
if(x.matches){
    document.onclick = function(e){
        if(e.target.id !== "dropdown" && e.target.id !== "menu-icon" && e.target.id !== "dropdownMenuLink"){
            dropDown.style.display = "none";
            menuIcon.style.display = "block";
            close.style.display = "none"
            blur.style.display = "none";
            nav.style.backgroundColor = "#fff";
            nav.style.borderBottom = "1px solid #BF9553";      
        }
    }
}


const active = window.matchMedia("(max-width: 2000px)");
if(active.matches){
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace("active", "");
        }
        this.className += " active";
        });
      }
}


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');
 
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#id_password2');
 
togglePassword2.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});





const box_one = document.getElementById("hide");
const box_two = document.getElementById("show");
let next = document.getElementsById("buttonX");
const back = document.getElementsById("back");




document.querySelectorAll(".image-container img").forEach(image => {
    image.onclick = () => {

    }
})
