//variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
//variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

//funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  //toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  //variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  //spørger om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sætter btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sætter btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "Menu";
  }
}

// Tilføjer et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
