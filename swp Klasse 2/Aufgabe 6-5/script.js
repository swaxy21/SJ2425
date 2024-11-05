let gesamtSumme = 1.00;


function hinzufügen() {
    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const produktName = selectedOption.getAttribute("data-name");
    const preis = parseFloat(selectedOption.value);

    if (preis > 0) { 
        const table = document.getElementById("warenkorb");
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.innerHTML = produktName;
        cell2.innerHTML = preis.toFixed(2) + "€";


        gesamtSumme += preis;
        document.getElementById("gesm").innerHTML = `<p>Gesamtsumme: ${gesamtSumme.toFixed(2)}€</p>`;
    }


    
}


 
function vergleicheInhalt(meinInhalt) {
    if (meinInhalt === "Blumengeschäft") {
        alert("Richtig");
    } else {
        alert("Falsch, ihre Website wird jetzt Geschlossen");
        window.close();
    }
}

let meinInhalt = prompt("Was soll dort stehen? (Blumengeschäft)");
vergleicheInhalt(meinInhalt);
   


