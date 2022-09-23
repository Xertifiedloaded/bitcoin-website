const myForm = document.querySelector(".formbox")
const myName = document.querySelector(".name")
const myUsername = document.querySelector(".username")
console.log(myName)
console.log(myUsername)
function loginForm(e){
    e.preventDefault()
    nameValue = myName.value
    userNameValue = myUsername.value
    console.log(nameValue)
    console.log(userNameValue)
    console.log(e)
}
myForm.addEventListener("submit" , loginForm)

