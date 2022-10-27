// On recupere d'abord les elements dont on à besoin
// le h3 qui affichera le code de la couleur
const css = document.querySelector("h3");
// le h6 qui doit servir d'instruction
const text = document.querySelector("h6")
    // color1 pour selectionner la premiere couleur
const color1 = document.querySelector(".color1");
// color2 pour selectionner la deuxieme couleur
const color2 = document.querySelector(".color2");
// random color pour le bouton que selection des couleurs alleatoires
const random = document.querySelector(".random-button");

// On selectionne le body grace a son id pour pouvoir changer son background color
const body = document.getElementById("gradient");

// On crée la fonction qui va mettre le background une fois qu'on l'aura changé
function setGraident() {
    // Création de la valeur en css
    body.style.background = `  linear-gradient(to right, ${color1.value}, ${color2.value})`;
    // injection du css dans le document
    css.textContent = `background: ${body.style.background};`;
    //texte d'instructions à afficher à l'utilisateur
    text.textContent = `Ligne suivante à coller dans votre CSS`;
}

// On crée une deuxiemme fonction pour generer les backgrounds aléatoirs
function randomColor() {
    // On part d'(une variable locale color
    let color = "#"; // La valeur sera en hexadecimal
    // on lance une boucle qui doit tourner 6 fois 
    for (let i = 0; i < 6; i++) {
        // a chaque incrementation de la boucle, on mulitiplies par dix à chaque fois
        color += Math.floor(Math.random() * 10);
    }
    // On retourne la couleur ainsi généréd
    return color;
}
// On cree une fonction qui va appeller la fonction randomcolor et l'affecter a color1 et color2
function setRandomColor() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGraident();
}

// Pour finir on va appeler la fonction setGraident pour mettre a jour le background chaque fois que l'un des colors change.
color1.addEventListener("input", setGraident);

color2.addEventListener("input", setGraident);

random.addEventListener("click", setRandomColor);