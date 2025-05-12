let counter = 0;
let multiplier = 0;
let normalClickercount = 0;
let rareClickercount = 0;
let epicClickercount = 0;
let legendClickercount = 0;
let resetcount = 0;

function loadProgress() {
  const savedCounter = localStorage.getItem("counter");
  const savedNormalClickercount = localStorage.getItem("normalClickercount");
  const savedRareClickercount = localStorage.getItem("rareClickercount");
  const savedEpicClickercount = localStorage.getItem("epicClickercount");
  const savedLegendClickercount = localStorage.getItem("legendClickercount");

  if (savedCounter !== null) counter = parseInt(savedCounter);
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
  updateCookiesPerSecond();
}

function saveProgress() {
  localStorage.setItem("counter", counter);
  localStorage.setItem("normalClickercount", normalClickercount);
  localStorage.setItem("rareClickercount", rareClickercount);
  localStorage.setItem("epicClickercount", epicClickercount);
  localStorage.setItem("legendClickercount", legendClickercount);
}

function updateCounterLabel() {
  document.getElementById("counter").innerHTML =
    counter + " Cookie's gesammelt";
  saveProgress();
  Medal1();
  Medal2();
}

function updateClickerCount() {
  document.getElementById("normal").innerHTML = `${normalClickercount}/100`;
  document.getElementById("rare").innerHTML = `${rareClickercount}/50`;
  document.getElementById("epic").innerHTML = `${epicClickercount}/25`;
  document.getElementById("legend").innerHTML = `${legendClickercount}/10`;
 
}

function updateCookiesPerSecond() {
  const cookiesPerSecond =
    normalClickercount * 1 +
    rareClickercount * 5 +
    epicClickercount * 10 +
    legendClickercount * 25;

  document.getElementById("perSecond").innerHTML =
    cookiesPerSecond + " Cookies pro Sekunde";

  
  counter += cookiesPerSecond;
  updateCounterLabel();
}


setInterval(updateCookiesPerSecond, 1000);

function showAlert(message) {
  const modal = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.textContent = message;
  modal.style.display = "block";
  setTimeout(() => {
    closeAlert();
  }, 4000);
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

    const floatingCookie = document.createElement("img");
  floatingCookie.src = "https://www.svgrepo.com/show/417269/cookie.svg";
  floatingCookie.className = "floating-cookie";

  const cookieSection = document.querySelector(".cookie-section");
  const cookieRect = picture.getBoundingClientRect();
  const sectionRect = cookieSection.getBoundingClientRect();

  const maxX = 500 - 50; 
  const maxY = 300 - 50; 
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  floatingCookie.style.left = `${randX}px`;
  floatingCookie.style.top = `${randY}px`;

    floatingCookie.style.transform = "none";

 
  cookieSection.appendChild(floatingCookie);

 
  floatingCookie.addEventListener("animationend", () => {
    floatingCookie.remove();
  });



  if (multiplier >= 5) {
    counter += multiplier;
  } else {
    counter += 1;
  }

  updateCounterLabel();
}

function myMultiplier() {
  if (counter <= 10000) {
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

function myNormalClicker() {
  if (counter < 100 ){
    showAlert("Du hast nicht genug Cookies oder 100 Autoklicker gekauft");
  } else {
    counter -= 100;
    normalClickercount++; //100
    updateCounterLabel();
    updateClickerCount();
   showAlert("Normaler Autoklicker gekauft für 1 Cookie");
  }
  if (normalClickercount >= 100) {
    showAlert("Du hast 100 Autoklicker gekauft! Du kannst keine weiteren kaufen.");
    normalClickercount = 100; 
    updateClickerCount();
  }
}

function myRareClicker() {
  if (counter < 250) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 250; //250
    rareClickercount++;
    updateCounterLabel();
    updateClickerCount();
    showAlert("Seltener Autoklicker gekauft für 25 Cookies");
  }
  if (rareClickercount >= 50) {
    showAlert("Du hast 50 Autoklicker gekauft! Du kannst keine weiteren kaufen.");
    rareClickercount = 50; 
    updateClickerCount();
  }

}

function myEpicClicker() {
  if (counter < 500) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 500; //500
    epicClickercount++;
    updateCounterLabel();
    updateClickerCount();
    showAlert("Epischer Autoklicker gekauft für 500 Cookies");
  }
  if (epicClickercount >= 25) {
    showAlert("Du hast 500 Autoklicker gekauft! Du kannst keine weiteren kaufen.");
    epicClickercount = 25; 
    updateClickerCount();
  }
}

function myLegendClicker() {
  if (counter < 1000) {
    showAlert("Du hast nicht genug Cookies");
  } else {
    counter -= 1000; //1000
    legendClickercount++;
    updateCounterLabel();
    updateClickerCount();
    showAlert("Legendärer Autoklicker gekauft für 1000 Cookies");
  }
  if (legendClickercount >= 10) {
    showAlert("Du hast 1000 Autoklicker gekauft! Du kannst keine weiteren kaufen.");
    legendClickercount = 10; 
    updateClickerCount();
  }
}

function myReset() {
  localStorage.clear();
  counter = 0;
  multiplier = 0;
  normalClickercount = 0;
  rareClickercount = 0;
  epicClickercount = 0;
  legendClickercount = 0;
  updateCounterLabel();
  updateClickerCount();
  document.getElementById("perSecond").innerHTML = "0 Cookies pro Sekunde";
  showAlert("Du hast das Spiel zurückgesetzt!");
    setTimeout(() => {
    closeAlert();
  }, 4000);
  setTimeout(() => {
    location.reload();
  }, 4000);
  resetcount++;
  resetBoost();
  
  
}

function Skins() {
  let normalSkinGekauft = localStorage.getItem("normalSkinGekauft") === "true";
  let epicSkinGekauft = localStorage.getItem("epicSkinGekauft") === "true";
  let legendSkinGekauft = localStorage.getItem("legendSkinGekauft") === "true";

  function changeCookieSkin(imageUrl) {
    const cookieImage = document.querySelector("#picture1 image");
    cookieImage.setAttribute("href", imageUrl);
  }

  if (normalSkinGekauft) {
    changeCookieSkin("grauCo.png");
  } else if (epicSkinGekauft) {
    changeCookieSkin("epicCo.png");
  } else if (legendSkinGekauft) {
    changeCookieSkin("legendCo.png");
  }
  


  document.getElementById("normalCookie").addEventListener("click", function () {
    if (!normalSkinGekauft) {
      if (counter >= 500) {
        counter -= 500;
        updateCounterLabel();
        changeCookieSkin("grauCo.png");
        showAlert("Normaler Skin gekauft!");
        normalSkinGekauft = true;
        localStorage.setItem("normalSkinGekauft", true);
      } else {
        showAlert("Nicht genug Cookies für Normalen Skin!");
      }
    } else {
      showAlert("Normaler Skin bereits gekauft!");
    }
  });

  document.getElementById("epicCookie").addEventListener("click", function () {
    if (!epicSkinGekauft) {
      if (counter >= 1000) {
        counter -= 1000;
        updateCounterLabel();
        changeCookieSkin("epicCo.png");
        showAlert("Epischer Skin gekauft!");
        epicSkinGekauft = true;
        localStorage.setItem("epicSkinGekauft", true);
      } else {
        showAlert("Nicht genug Cookies für Epischen Skin!");
      }
    } else {
      showAlert("Epischer Skin bereits gekauft!");
    } 
  });

  document.getElementById("legendCookie").addEventListener("click", function () {
    if (!legendSkinGekauft) {
      if (counter >= 5000) {
        counter -= 5000;
        updateCounterLabel();
        changeCookieSkin("legendCo.png");
        showAlert("Legendärer Skin gekauft!");
        legendSkinGekauft = true;
        localStorage.setItem("legendSkinGekauft", true);
      } else {
        showAlert("Nicht genug Cookies für Legendären Skin!");
      }
    } else {
      showAlert("Legendärer Skin bereits gekauft!");
    }
  });
}

function Medal1() {
  const medal1 = document.getElementById("Medal1");
  if (counter >= 100) {
    medal1.style.color = "green";
    document.getElementById("Medal1").innerHTML = "Sammel 100 Cookies 1/1";

  } else {
    medal1.style.color = "red";
    document.getElementById("Medal1").innerHTML = "Sammel 100 Cookies 0/1";
  }
}
function Medal2() {
  const medal2 = document.getElementById("Medal2");
  if (counter >= 1000) {
    medal2.style.color = "green";
    document.getElementById("Medal2").innerHTML = "Sammel 1000 Cookies 1/1";
  } else {
    medal2.style.color = "red";
    document.getElementById("Medal2").innerHTML = "Sammel 1000 Cookies 0/1";
  }

  
}

function resetBoost() { // ein Boost wenn man 5 mal resetet
if (resetcount >= 5) {
    resetcount = 0;
    showAlert("Du hast 5 Reset's gemacht! Du bekommst einen Boost");
    counter += 1000;
    updateCounterLabel();
    normalClickercount += 10;
    rareClickercount += 5;
    epicClickercount += 2;
    legendClickercount += 1;
    updateClickerCount();
  
    }
  }

document.addEventListener("DOMContentLoaded", function () {
  Skins();
  loadProgress();
  updateCookiesPerSecond();
});