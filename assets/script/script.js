const hamburger = document.querySelector(".hamburger")
const hide = document.querySelector(".hide")
function showMenu() {
    hide.classList.replace("hide", "show")

}
hamburger.addEventListener("click", showMenu)

const closeBtn = document.querySelector(".close-btn")
function closeMenu() {
hide.classList.replace("show","hide")
}
closeBtn.addEventListener("click" , closeMenu)
