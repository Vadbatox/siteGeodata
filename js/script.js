var navbar = document.querySelector(".entete")

var logo = document.querySelector(".logo img")


window.onscroll = function() { myFunction() };

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    icon.classList.replace("fa-times", "fa-bars");
    menu.style.display = "none"
}

let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");
let menu = document.querySelector(".toggle-menu")

btn.onclick = function() {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
        menu.style.display = "block"
    } else {
        icon.classList.replace("fa-times", "fa-bars");
        menu.style.display = "none"
    }


}