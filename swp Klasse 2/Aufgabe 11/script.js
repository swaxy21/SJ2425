let counter = 0;
let multiplier = 1;
let normalClickercount = 0;
let rareClickercount = 0;
let epicClickercount = 0;
let legendClickercount = 0;
let normalClickerActive = false;
let rareClickerActive = false;
let epicClickerActive = false;
let legendClickerActive = false;

function loadProgress() {
    const savedCounter = localStorage.getItem("counter");
    const savedNormalClicker = localStorage.getItem("normalClickerActive");
    const savedRareClicker = localStorage.getItem("rareClickerActive");
    const savedEpicClicker = localStorage.getItem("epicClickerActive");
    const savedLegendClicker = localStorage.getItem("legendClickerActive");

    const savedNormalClickercount = localStorage.getItem("normalClickercount");
    const savedRareClickercount = localStorage.getItem("rareClickercount");
    const savedEpicClickercount = localStorage.getItem("epicClickercount");
    const savedLegendClickercount = localStorage.getItem("legendClickercount");

    if (savedCounter !== null) counter = parseInt(savedCounter);
    if (savedNormalClicker === "true") activateNormalClicker();
    if (savedRareClicker === "true") activateRareClicker();
    if (savedEpicClicker === "true") activateEpicClicker();
    if (savedLegendClicker === "true") activateLegendClicker();

    if (savedNormalClickercount !== null) normalClickercount = parseInt(savedNormalClickercount);
    if (savedRareClickercount !== null) rareClickercount = parseInt(savedRareClickercount);
    if (savedEpicClickercount !== null) epicClickercount = parseInt(savedEpicClickercount);
    if (savedLegendClickercount !== null) legendClickercount = parseInt(savedLegendClickercount);

    updateCounterLabel();
    updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
}

function saveProgress() {
    localStorage.setItem("counter", counter);
    localStorage.setItem("normalClickerActive", normalClickerActive);
    localStorage.setItem("rareClickerActive", rareClickerActive);
    localStorage.setItem("epicClickerActive", epicClickerActive);
    localStorage.setItem("legendClickerActive", legendClickerActive);

    localStorage.setItem("normalClickercount", normalClickercount);
    localStorage.setItem("rareClickercount", rareClickercount);
    localStorage.setItem("epicClickercount", epicClickercount);
    localStorage.setItem("legendClickercount", legendClickercount);
}

function updateCounterLabel() {
    document.getElementById("counter").innerHTML = counter + " Cookie's gesammelt";
    saveProgress(); // Speichere den Fortschritt bei jeder Aktualisierung
}

function updateClickerCount() {
    document.getElementById("normal").innerHTML = `${normalClickercount}/100`;
    document.getElementById("rare").innerHTML = `${rareClickercount}/50`;
    document.getElementById("epic").innerHTML = `${epicClickercount}/25`;
    document.getElementById("legend").innerHTML = `${legendClickercount}/10`;
}

function showAlert(message) {
    const modal = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");
    alertMessage.textContent = message;
    modal.style.display = "block";
}

function closeAlert() {
    const modal = document.getElementById("customAlert");
    modal.style.display = "none";
}

function myCookie() {
    const picture = document.getElementById("picture1");
    picture.classList.add("animate");

    picture.addEventListener(
        "animationend",
        function () {
            picture.classList.remove("animate");
        },
        { once: true }
    );
    counter += multiplier; 
    updateCounterLabel();
}

function myMultiplier() {
    if (counter < 10000) {
        showAlert("Du hast nicht genug Cookies");
    } else {
        counter -= 10000; // Ziehe die Kosten für den Multiplikator ab
        multiplier += 5; // Erhöhe den Multiplikator um 5
        updateCounterLabel();
        showAlert("Cookie Multiplikator gekauft! Deine Klicks sind jetzt x" + multiplier);
        document.getElementById("multiplier").textContent = "Aktueller Multiplikator: " + multiplier;
    }
}

function activateNormalClicker() {
    if (!normalClickerActive) {
        normalClickerActive = true;
        setInterval(() => {
            counter += 1;
            updateCounterLabel();
        }, 1000);
    }
}

function activateRareClicker() {
    if (!rareClickerActive) {
        rareClickerActive = true;
        setInterval(() => {
            counter += 5;
            updateCounterLabel();
        }, 1000);
    }
}

function activateEpicClicker() {
    if (!epicClickerActive) {
        epicClickerActive = true;
        setInterval(() => {
            counter += 10;
            updateCounterLabel();
        }, 1000);
    }
}

function activateLegendClicker() {
    if (!legendClickerActive) {
        legendClickerActive = true;
        setInterval(() => {
            counter += 50;
            updateCounterLabel();
        }, 1000);
    }
}

function myNormalClicker() {
    if (counter < 100) {
        showAlert("Du hast nicht genug Cookies");
    } else {
        counter -= 100;
        normalClickercount++; // Erhöhe die Anzahl der normalen Autoklicker
        updateCounterLabel();
        updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
        showAlert("Normaler Autoklicker gekauft für 100 Cookies");
        activateNormalClicker();
    }
}

function myRareClicker() {
    if (counter < 250) {
        showAlert("Du hast nicht genug Cookies");
    } else {
        counter -= 250;
        rareClickercount++; // Erhöhe die Anzahl der seltenen Autoklicker
        updateCounterLabel();
        updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
        showAlert("Seltener Autoklicker gekauft für 250 Cookies");
        activateRareClicker();
    }
}

function myEpicClicker() {
    if (counter < 1) {
        showAlert("Du hast nicht genug Cookies");
    } else {
        counter -= 1;
        epicClickercount++; // Erhöhe die Anzahl der epischen Autoklicker
        updateCounterLabel();
        updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
        showAlert("Epischer Autoklicker gekauft für 500 Cookies");
        activateEpicClicker();
    }
}

function myLegendClicker() {
    if (counter < 1000) {
        showAlert("Du hast nicht genug Cookies");
    } else {
        counter -= 1000;
        legendClickercount++; // Erhöhe die Anzahl der legendären Autoklicker
        updateCounterLabel();
        updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
        showAlert("Legendärer Autoklicker gekauft für 1000 Cookies");
        activateLegendClicker();
    }
}

function updateClickerCount() {
    document.getElementById("normal").innerHTML = `${normalClickercount}/100`;
    document.getElementById("rare").innerHTML = `${rareClickercount}/50`;
    document.getElementById("epic").innerHTML = `${epicClickercount}/25`;
    document.getElementById("legend").innerHTML = `${legendClickercount}/10`;
}

//window.onload = loadProgress