window.addEventListener("load", fadeIn);

function fadeIn() {
  console.log("fadeIn");

  //får h1 til at fade ind
  document.querySelector("#h1_container").classList.add("fade_in");

  document.querySelector("#h1_container").classList.remove("fade_in");
}
