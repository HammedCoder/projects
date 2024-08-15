const sum = document.getElementById('sum')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const text1= document.getElementById('txt1')
const text2= document.getElementById('txt2')

function add() {
    let num1 = +text1.value
    let num2 = +text2.value
    const total = num1 + num2
    document.querySelector('.display').textContent=total
    text1.value = ""
    text2.value=""
    console.log(total);
}

function times() {
    let num1 = +text1.value
    let num2 = +text2.value
    const total = num1 * num2
    document.querySelector('.display').textContent=total
    text1.value = ""
    text2.value=""
    console.log(total);
}function subtract() {
    let num1 = +text1.value
    let num2 = +text2.value
    const total = num1 - num2
    document.querySelector('.display').textContent=total
    text1.value = ""
    text2.value=""
    console.log(total);
}

function quotient() {
    let num1 = +text1.value
    let num2 = +text2.value
    const total = num1 / num2
    document.querySelector('.display').textContent=total
    text1.value = ""
    text2.value=""
    console.log(total);
}