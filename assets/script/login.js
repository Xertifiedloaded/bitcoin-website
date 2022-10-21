const myForm = document.querySelector(".formbox")
const myInput = document.querySelectorAll(".myinput")
// console.log(myInput)

function form(e) {
    e.preventDefault()

    for (i = 0; i < myInput.length; i++) {
        let inputNew = myInput[i].value
        inputNew = ''
        console.log(inputNew)
        
    }

}
myForm.addEventListener("submit", form)
