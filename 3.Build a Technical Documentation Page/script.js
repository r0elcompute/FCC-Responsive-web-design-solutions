// DOM Variables

const menu = document.getElementById("menu");

// hamburger menu implementation

window.addEventListener("click", (e) => {
    if(e.target.closest("#button")) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
})