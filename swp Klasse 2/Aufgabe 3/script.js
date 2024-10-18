let zahl1 = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;

function auszahlen() {
    const wert = parseInt(document.getElementById('geld').value);
    

    


    let text;   
    switch(wert) {
        
        default:
            text = "Kein geld ausgezahlt, geben sie ein Vielfaches von 10 ein";
    }

    document.getElementById('display').innerHTML = text;

    if (wert % 10 === 0 && wert >= 10 && wert <= 400) {
        zahl1 = zahl1 + wert;
        zahl();

        
    } else {
        if (wert > 400)
        document.getElementById('display').innerText = "Betrag von " + wert + " € konnte nicht ausgezahlt werden, Abhebelimit erreicht!";
    }

    document.getElementById('money').disabled = true;
}



function zahl() {
    document.getElementById('display').innerText = "Bargeld zurzeit: " + zahl1;

 
}


window.onload = zahl;