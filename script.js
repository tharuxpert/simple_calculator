function select() {
    var num1 = document.querySelector('#num1').value;
    var num2 = document.querySelector('#num2').value;
    var answer = document.querySelector('.answer');
    var select = document.getElementById('select').value;
    console.log(num1, num2, answer, select);
    
    var a = Number(num1);
    var b = Number(num2);
    var select1 = a + b;
    var select2 = a - b;
    var select3 = a / b;
    var select4 = a * b;
    if (num1 === '' || b === '' && select === '+') {
        alert('Please Fill All the Fields!😕')
    }
    else if (select === '*') {
        answer.textContent = select4;
        console.log(select4);
    }
    else if (select === '/') {
        answer.textContent = select3;
        console.log(select3);
    }
    else if (select === '-') {
        answer.textContent = select2;
        console.log(select2);
    }
    else if (select === '+') {
        answer.textContent = select1;
        console.log(select1);
    }

    var reset = document.querySelector('#reset').addEventListener('click', reset);

    var num1 = document.querySelector('#num1');
    var num2 = document.querySelector('#num2');

    function reset() {
        
        
        num1.value = '';
        num2.value = '';
        answer.textContent = '';
    }
    
    
}