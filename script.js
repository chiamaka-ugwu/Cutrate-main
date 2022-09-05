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


// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#id_password');
// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });


// const box_one = document.getElementById("hide");
// const box_two = document.getElementById("show");
// let next = document.getElementsById("buttonX");
// const back = document.getElementsById("back");


// TOGGLE PASSWORD VISIBILITY
const password = document.getElementById("password");
const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");

eye.addEventListener("click", function(){
    eye.style.display ="none";
    eyeSlash.style.display = "block";
    password.setAttribute('type', 'text');
})
eyeSlash.addEventListener("click", function(){
    eye.style.display ="block";
    eyeSlash.style.display = "none";
    password.setAttribute('type', 'password');
})


const password2 = document.getElementById("password2");
const eye2 = document.getElementById("eye2");
const eyeSlash2 = document.getElementById("eye-slash2");

eye2.addEventListener("click", function(){
    eye2.style.display ="none";
    eyeSlash2.style.display = "block";
    password2.setAttribute('type', 'text');
})
eyeSlash2.addEventListener("click", function(){
    eye2.style.display ="block";
    eyeSlash2.style.display = "none";
    password2.setAttribute('type', 'password');
})

const file = document.querySelector('#file');
file.addEventListener('change', (e) => {
  // Get the selected file
  const [file] = e.target.files;
  // Get the file name and size
  const { name: fileName, size } = file;
  // Convert size in bytes to kilo bytes
  const fileSize = (size / 1000).toFixed(2);
  // Set the text content
  const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  document.querySelector('.file-name').textContent = fileNameAndSize;
});