function hinzufügen() {
    
    const eingabe = document.getElementById("aufgabe");
    const prüfen = document.getElementById("aufgabe").value;
    const ul1 = document.getElementById("liste");

    if (prüfen === "") {
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
            ul1.removeChild(li); // Entferne das li-Element
        });

        
        li.appendChild(hallo);
        ul1.appendChild(li);

        // Eingabe zurücksetzen
        eingabe.value = '';
    }
}
