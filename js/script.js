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
}

let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");

btn.onmouseenter = function() {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}

btn.onmouseleave = function() {
    if (icon.classList.contains("fa-times")) {
        icon.classList.replace("fa-times", "fa-bars");
    } else {
        icon.classList.replace("fa-bars", "fa-times");
    }
}