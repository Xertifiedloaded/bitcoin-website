
let form = document.querySelector(".formbox")
let input = document.querySelectorAll(".myinput")
// console.log(form)
function showForm(e) {
    e.preventDefault()
    for (i = 0; i < input.length; i++) {
        newInput = input[i].value
        console.log(newInput)
        newInput =""
    }
}
form.addEventListener("submit", showForm)