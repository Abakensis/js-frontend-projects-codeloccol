//  pour commencer on crée le tableau qui contient les citations
let citations = [
    ["j'ai moi même été un très grand footballor, mais j'ai choisi le sacrifice a la nation", "President Bobo"],
    ["Il est tombé comme du n'importe quoi on dirait la girafe qui s'emmêlent les pattes quoi!", "President bobo"],
    ["Je sais ce que c'est l'agagie financière, j'ai fait mes etudes en Allemagne ", "President Bobo"],
    ["Monsieur Didier tuparles encore je mets tes videos sur x amster? xvideo, pussy pussy et lautre site là avec les grosses dames chinoises humm humm BBW Chinese", "President Bobo"],
    ["désormais tu seras le ministre des cabinets de la république", "President Bobo"],
    ["L'oiseau sur le baobab ne doit pas oublier qu'il a porter des lunettes", "President Bobo"],
    ["Je vais me cacher dans mon bouclier anti-nucléaire", "President Bobo"],
    ["Avec tes grosses fesses, on dirait hyppopotame, toi tu peux résembler à Paris Hylton?", "President Bobo"],
    ["Le crocodile n attend pas que le gorille accouche", "President Bobo"],
    ["si l'oreille depasse 6 cm on est en presence d un kala kala", "President Bobo"],
    ["Tu crois que je suis là pour faire le beau, Pour faire le théâtre ! Personne ne dicte la volonté au capitaine BOBOOOOOOO ! Avec ton éducation de Phacochère", "President Bobo"],
    ["Mouboutou a eu le léopard,bobo aura le crocodile.", "President Bobo"],
    ["Jacqueline je vais te taper maaalll", "President Bobo"],
    ["Les blancs on des nounous noires. On va prendre une nounou blanche, sans papier", "President Bobo"],
    ["la chenille ne porte pas de lunnette quand elle boit l'eau", "President Bobo"],
    ["Je m'en irai du pouvoir tête haute menton levée narine dilatée", "President Bobo"],
    ["Je suis le president Bobo Babimbi Coq, fils de Leopold Babimbi Coq premier. Dès l'age de 5 ans j'ai porté le noeud Papillon ", "President Bobo"],
    ["Moi-meme president Bobo j'ai grandi dans une case, aujopurd'hui j'ai tout", "President Bobo"],
    ["AH, voici le village de Kaedjo, c'est dans ce petit village qu'est l'ame meme du botswanga", "President Bobo"],
    ["tu vois moi on m'applaudit quand Je parle est ce toi on t'a applaudit quand tu a parler?", "President Bobo"],
    ["J'ai moi-meme fait l'amour a plus de 1000 femmes, 1000 femmes! et je n'ai jamais mis vos presevatifs. on ne mange pas une banane avec la peau!", "President Bobo"],
];
// Variables
let dernier = 0;
let nombreAleatoire = 0;
//console.log(nombreAleatoire);

// Récupérer les élements du DOM

// citation
let citation = document.getElementById('citation');

// Nom de l'auteur
let auteur = document.getElementById('auteur');

// Bouton
let bouton = document.getElementById('nouveau');
// Fonction générateur qui prend en paramêtre un nombre maximum qu'on utilisera en argument de la fonction genererNombreAleatoire
function genererEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

function genererCitation() {
    do {
        nombreAleatoire = genererEntier(citations.length);
        //console.log(nombreAleatoire);

    } while (nombreAleatoire == dernier)
    afficher();
    //console.log(nombreAleatoire);
    //console.log(dernier);
    dernier = nombreAleatoire;
}

// Afficher la citation et son auteur respectif
function afficher() {
    citation.textContent = citations[nombreAleatoire][0];
    auteur.textContent = citations[nombreAleatoire][1];
}

//Ecouteur d'évènements
bouton.addEventListener('click', genererCitation);