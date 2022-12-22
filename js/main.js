let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let sumNumber = document.getElementById("sumNumber")
sumNumber.addEventListener("click", function () {
    let firstNum = num1.value
    let secondNum = num2.value
    const sum = parseFloat(firstNum) + parseFloat(secondNum)
    console.log(`${sum}`);
    let rowNumber = `
    <div class="result" >
        <p>${sum}</p> 
    </div>
    `
    document.getElementById("resultNumber").innerHTML = rowNumber
    clearInp()
})
function clearInp(){
    num1.value = "";
    num2.value = "";
}

