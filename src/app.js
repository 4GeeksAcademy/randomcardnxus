/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }

  let palo = ["♦", "♥", "♠", "♣"];
  let numero = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let paloCarta = aleatorio(palo);
  let elementPaloCarta = document.querySelector("#paloCarta");
  elementPaloCarta.innerHTML = paloCarta;

  let numCarta = aleatorio(numero);
  let elementnumCarta = document.querySelector("#numCarta");
  elementnumCarta.innerHTML = numCarta;

  let elementPaloCartaAbajo = document.querySelector("#paloCartaAbajo");
  elementPaloCartaAbajo.innerHTML = paloCarta;

  elementPaloCartaAbajo.style.transform = "rotate(180deg)";
  if (paloCarta == "♥" || paloCarta == "♦") {
    elementPaloCartaAbajo.style.color = "red";
    elementPaloCarta.style.color = "red";
  }
};
