const btnArrow = document.querySelector(".img-arrow")
const spanYear = document.querySelector(".years-span")
const inputYear = document.querySelector(".input-year")


btnArrow.addEventListener("click", function (){
    const date = new Date()
    console.log(date)
    //  wlis gageba
    console.log(date.getFullYear())
    // ricxvis aggeba, ანუ თვის რომელი რიცხვია.
    console.log(date.getDate())
    
    const sxvaoba = date.getFullYear() - Number(inputYear.value)
    spanYear.textContent = sxvaoba
})

