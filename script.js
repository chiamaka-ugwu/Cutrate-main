var menuIcon = document.getElementById("menu-icon");
var close = document.getElementById("close");
var dropDown = document.getElementById("dropdown");
var blur = document.getElementById("blur");
var nav = document.getElementById("nav");
var links = document.querySelectorAll(".link");
var text = document.getElementById("text");
var hero = document.getElementById("hero");
var create = document.getElementById("create");
var pop_up = document.getElementById("pop-up");

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

create.addEventListener("click", function(){
    pop_up.style.display = "block";
})


// const togglePassword = document.getElementById('togglePassword');
// const password = document.getElementById('password');
 
// togglePassword.addEventListener('click', function (e) {
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');        

// });

// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");


// togglePassword.addEventListener('click', function () {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     this.classList.toggle('fa-eye');
// });

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');
 
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


const box_one = document.getElementById("hide");
const box_two = document.getElementById("show");
let next = document.getElementsById("buttonX");
const back = document.getElementsById("back");


// let input = document.getElementsByClassName("inputTag");
// let imageName = document.getElementsByClassName("imageName");

//     input.addEventListener("change", ()=>{
//         let inputImage = document.querySelectorAll("input[type=file]").files[0];
//         imageName.innerText = inputImage.name;
//     })

