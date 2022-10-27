
//elements du dom
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
// initialisation des variables
let lastHole;
let timeUp = false;
let score = 0;
//randomisation de la dsurée que la taupe fait a decouvert dans un intervale comris entre 0.4 secondes et 1.5 secondes
// voir plus bas
function randomTime(min, max) {
return Math.round(Math.random() * (max - min) + min);
}
// randomisation des trous de sortie de la taupe.
function randomHole(holes) {
const idx = Math.floor(Math.random() * holes.length);
const hole = holes[idx];
// mise en place d'une securité pour que la taupe ne pope pas deux fois de suite a partir du meme trou
if (hole === lastHole) {
return randomHole(holes);
}
lastHole = hole;
return hole;
}
// foction gerant  la sortie de la taupe 
function peep() {
    // constante temps avec les partirms tirés de la fonction random time
const time = randomTime(400, 1500);
// constante trou avec les params tirés de la fonction randomhole
const hole = randomHole(holes);
// Sortie de la taupe dans le trou
hole.classList.add('up');
// lancement du compte timeup du retrait de la taupe 
setTimeout(() => {
hole.classList.remove('up');
// arrivé a ce niveau, si le compte à rebours time up n'est pas fini, relancer la sortie de la taupe 
if (!timeUp) peep();
}, time);
}
//Lancement du jeu 
function startGame() {
    //reinitialisation des variables 
scoreBoard.textContent = 0;
timeUp = false;
score = 0;
peep();
// initialisation du temps du jeu à 30 secondes
setTimeout(() => timeUp = true, 30000)
}
// fontion gerant les frapes
function whack(e) {

if(!e.isTrusted) return;
score++;
this.parentNode.classList.remove('up');
scoreBoard.textContent = score;
}
// ecouteur d'evennements pour chaque trou.
moles.forEach(mole => mole.addEventListener('click', whack));