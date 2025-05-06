let counter = 0;
let multiplier = 0;
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

  if (savedNormalClickercount !== null)
    normalClickercount = parseInt(savedNormalClickercount);
  if (savedRareClickercount !== null)
    rareClickercount = parseInt(savedRareClickercount);
  if (savedEpicClickercount !== null)
    epicClickercount = parseInt(savedEpicClickercount);
  if (savedLegendClickercount !== null)
    legendClickercount = parseInt(savedLegendClickercount);

  updateCounterLabel();
  updateClickerCount();
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
  document.getElementById("counter").innerHTML =
    counter + " Cookie's gesammelt";
  saveProgress();
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
  if (multiplier >= 5) {
    counter += multiplier;
  } else{
    counter += 1;
  }
  
  updateCounterLabel();
}

function myMultiplier() {
  if (counter < 1) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 1;
    multiplier += 5;
    updateCounterLabel();
    showAlert(
      "Cookie Multiplikator gekauft! Deine Klicks sind jetzt x" + multiplier
    );
    document.getElementById("multiplier").textContent =
      "Aktueller Multiplikator: " + multiplier;
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
  if (counter < 1) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 1;
    normalClickercount++; // Erhöhe die Anzahl der normalen Autoklicker
    updateCounterLabel();
    updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
    showAlert("Normaler Autoklicker gekauft für 100 Cookies");
    activateNormalClicker();
  }
}

function myRareClicker() {
  if (counter < 25) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 25;
    rareClickercount++; // Erhöhe die Anzahl der seltenen Autoklicker
    updateCounterLabel();
    updateClickerCount(); // Aktualisiere die Anzeige der Autoklicker
    showAlert("Seltener Autoklicker gekauft für 250 Cookies");
    activateRareClicker();
  }
}

function myEpicClicker() {
  if (counter < 5) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 5;
    epicClickercount++;
    updateCounterLabel();
    updateClickerCount();
    showAlert("Epischer Autoklicker gekauft für 500 Cookies");
    activateEpicClicker();
  }
}

function myLegendClicker() {
  if (counter < 10) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 10;
    legendClickercount++;
    updateCounterLabel();
    updateClickerCount();
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

function myReset() {
    localStorage.clear();
    location.reload();
  }

function Skins() {
    let normalSkinGekauft = false;
    let epicSkinGekauft = false;
    let legendSkinGekauft = false;
  
    function changeCookieSkin(imageUrl) {
      const cookieImage = document.querySelector("#picture1 image");
      cookieImage.setAttribute("href", imageUrl);
    }
  
    document.getElementById("normalCookie").addEventListener("click", function() {
      if (!normalSkinGekauft) {
        if (counter >= 5) {
          counter -= 5;
          updateCounterLabel();
          changeCookieSkin("grauCo.png");
          showAlert("Normaler Skin gekauft!");
          normalSkinGekauft = true;
        } else {
          showAlert("Nicht genug Cookies für Normalen Skin!");
        }
      } else {
        showAlert("Normaler Skin bereits gekauft!");
      }
    });
  
    document.getElementById("epicCookie").addEventListener("click", function() {
      if (!epicSkinGekauft) {
        if (counter >= 10) {
          counter -= 10;
          updateCounterLabel();
          changeCookieSkin("epicCo.png");
          showAlert("Epischer Skin gekauft!");
          epicSkinGekauft = true;
        } else {
          showAlert("Nicht genug Cookies für Epischen Skin!");
        }
      } else {
        showAlert("Epischer Skin bereits gekauft!");
      }
    });
  
    document.getElementById("legendCookie").addEventListener("click", function() {
      if (!legendSkinGekauft) {
        if (counter >= 5) {
          counter -= 5;
          updateCounterLabel();
          changeCookieSkin("legendCo.png");
          showAlert("Legendärer Skin gekauft!");
          legendSkinGekauft = true;
        } else {
          showAlert("Nicht genug Cookies für Legendären Skin!");
        }
    }else {
        showAlert("Legendärer Skin bereits gekauft!");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", Skins);

window.onload = loadProgress
