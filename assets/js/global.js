window.onscroll = function() { posicionarMenu() };

let opened = false;

function openMenu() {
    if (opened) {
        closeMenu();
    } else {
        document.getElementById("menu").style.width = "100%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        opened = true;
    }

}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
    document.body.style.backgroundColor = "white";
    opened = false;
}

function posicionarMenu() {

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
}