const countAddButton = document.getElementById("add")
const countLessButton = document.getElementById("less")
const valueElement = document.getElementById("value")

valueElement.innerText = 100

countAddButton.addEventListener("click",()=>{
    valueElement.innerText = Number(valueElement.textContent)+1
})

countLessButton.addEventListener("click",()=>{
    valueElement.innerText = Number(valueElement.textContent)-1
})