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
    close.style.display = "block"
    blur.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    blur.style.zIndex = "100";
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    nav.style.zIndex = "100000";
})


close.addEventListener("click", function(){    
    dropDown.style.display = "none";
    menuIcon.style.display = "block";
    close.style.display = "none"
    blur.style.backgroundColor = "rgba(50, 12, 94, 0.2)";
    blur.style.zIndex = "1";
    nav.style.backgroundColor = "#fff";
    nav.style.zIndex = "1000000";

})


const x = window.matchMedia("(max-width: 1000px)");
if(x.matches){
    document.onclick = function(e){
        if(e.target.id !== "dropdown" && e.target.id !== "menu-icon"){
            dropDown.style.display = "none";
            menuIcon.style.display = "block";
            close.style.display = "none"
            blur.style.backgroundColor = "rgba(50, 12, 94, 0.2)";
            blur.style.zIndex = "1";
            nav.style.backgroundColor = "#fff";
            nav.style.zIndex = "1000000";
            
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


const togglePassword = document.querySelector('.togglePassword');
const password = document.querySelector('#password');
 
togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');        

});


const box_one = document.getElementById("hide");
const box_two = document.getElementById("show");
let next = document.getElementsById("buttonX");
const back = document.getElementsById("back");

// let currentAccount = 0;
// showAccount(currentAccount);

// function showAccount(i){
//     let account = document.getElementsByClassName("account");

// }


next.addEventListener("click", function(){
    box_one.style.display = "none";
    box_two.style.display = "block"; 
})
back.addEventListener("click", function(){
    box_two.style.display = "none";
    box_one.style.display = "block";
})



let input = document.getElementsByClassName("inputTag");
let imageName = document.getElementsByClassName("imageName");

for(i = 0; i < input.length; i++){
    input[i].addEventListener("change", ()=>{
        let inputImage = document.querySelectorAll("input[type=file]").files[0];
        for(j = 0; j < imageName.length; j++){
            imageName[j].innerText = inputImage.name;
        }
    })
}
