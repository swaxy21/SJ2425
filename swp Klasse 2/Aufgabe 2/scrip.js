function alerts() {
    const but1 = document.getElementById('but1');
    but1.addEventListener('click', function() {
        alert('Du hast es geändert')
    })
    
}



function header() {

    const but2 = document.getElementById('head1');
    but2.textContent = ' Mixed Martial Arts';
    const _text1 = document.getElementById('text1');
    _text1.textContent = ' Ja es heißt so, da es eine Mischung von mehrern Kampfsportarten ist';
    but2.style.color = 'blue';
    _text1.style.fontSize= 'xx-large';
}



function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function hintergrund() {
    changeColor('Red');
}

function bild() {
   const but4 = document.getElementById('Bild1');
   but4.setAttribute("src", "jones.jpg");
   const pic2 = document.getElementById('Bild2');
   pic2.setAttribute("src", "rakic.jpg");
   const pic3 = document.getElementById('Bild3');
   pic3.setAttribute("src", "alex.jpg");
}

function weg() {
    const e = document.getElementsByTagName('html')[0];
    e.removeChild(document.body);

}
function newtab() {
    window.open("https://moodle.spengergasse.at/course/view.php?id=10329", "_blank");

}


