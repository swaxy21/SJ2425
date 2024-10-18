function addNumbers() {
    
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    if (!isInteger(num1) || !isInteger(num2)){
        errorElement.innerHTML = "Bitte gerade Zahl eingeben";
        resultElement.innerHTML = " ";
        return;
    }

    const sum = parseInt(num1) + parseInt(num2);

    resultElement.innerHTML = `Das Ergebnis ist: ${sum}`;
    errorElement.innerHTML = '';

    function isInteger(value) {
        return /^-?\d+$/.test(value); 
    }

}

