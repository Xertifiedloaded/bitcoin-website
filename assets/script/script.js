const toggleMenu = document.querySelector(".toggle-menu")
const hide = document.querySelector(".hide")
const solid = document.querySelector(".fa-solid")
let isActive = false
function showMenu() {
    if (isActive == false) {
        isActive = true
        hide.classList.replace("show", "hide")
        solid.classList.replace("fa-xmark", "fa-bars")
    } else {
        hide.classList.replace("hide", "show")
        solid.classList.replace("fa-bars", "fa-xmark")
        isActive = false
    }
}
toggleMenu.addEventListener("click", showMenu)
 