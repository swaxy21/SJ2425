function hinzufügen() {
    
    const eingabe = document.getElementById("aufgabe");
    const prüfen = document.getElementById("aufgabe").value;
    const ul1 = document.getElementById("liste");

    if (prüfen === "" ) {
        alert("Geben sie ihre Aufgabe ein");
       return;
    } else {
        var text = eingabe.value;

        // Erstelle ein neues li-Element
        var li = document.createElement('li');
        li.innerHTML = text;


        var hallo = document.createElement('button');
        hallo.innerHTML = "Löschen";

        // Button-Klick-Event hinzufügen
        hallo.addEventListener('click', function() {
            li.remove();
            li.style.color = "red"; // Rot machen
        });

        // Füge li und Button zum ul hinzu
        li.appendChild(hallo);
        ul1.appendChild(li);

        // Eingabe zurücksetzen
        eingabe.value = '';
    }
}

window.onload(alert("Ihre To-Do Liste "))
