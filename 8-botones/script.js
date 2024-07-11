const buttonLeft = document.getElementById("hide-button-left")
const buttonRight = document.getElementById("hide-button-right")
const divToHide = document.querySelector(".box-left")
const divToShow = document.querySelector(".box-right")

function hideAndShow () {
    divToHide.classList.toggle("hidden")
    divToShow.classList.toggle("hidden")
}

buttonLeft.addEventListener("click", hideAndShow)
buttonRight.addEventListener("click", hideAndShow)