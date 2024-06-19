// Get all your buttons
const nums = document.querySelectorAll('.num');

const ops = document.querySelectorAll('.op');

// Get your input field
const input = document.getElementById('display');
let currentInput = '';

const clear = document.getElementById('clear');

const result = document.getElementById('result');

const del = document.getElementById('del');

nums.forEach((num) => {
    num.addEventListener('click', () => {

        currentInput += num.textContent;
        input.value = currentInput;
    })
})

ops.forEach((op) => {
    op.addEventListener('click', () => {

        if(!currentInput.includes(op.textContent)){
            currentInput += op.textContent;
            input.value = currentInput;
        }
        else{
            input.value = "error, please clear and reset";
        }
    })
})
        
clear.addEventListener('click', () => {
    currentInput = '';
    input.value = currentInput;
})

result.addEventListener('click', () => {
    try{
    let text = splitString(input.value);
    let result = calculateResult(text);
    input.value = result;
    currentInput = result.toString();
    }
    catch(err){
        input.value = "Error, dont equals before operator";
        currentInput = ""
    }
})

del.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    input.value = currentInput;
})

function splitString(text){
    const operatorRegex = /([+\-X/=%])/;
    const splitString = text.split(operatorRegex);

    return splitString;
}

function calculateResult(arrText){
    a = arrText[0]
    b = arrText[2]

    if(arrText[1] == '+'){
        return parseFloat(a) + parseFloat(b);
    }
    else if(arrText[1] == '-'){
        return parseFloat(a) - parseFloat(b);
    }
    else if(arrText[1] == 'X'){
        return parseFloat(a) * parseFloat(b);
    }
    else if(arrText[1] == '/'){
        return parseFloat(a) / parseFloat(b);
    }
    else if(arrText[1] == '%'){
        return parseInt(a) % parseInt(b);
    }
}
