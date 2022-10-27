// on va commencer par appeler l'heure locale

//On cree la fonction pour afficher l'heure
function clock() {
    /*On recupere la valeur de l'heure et on l'affecte à un constante */
    const date = new Date();

    /* on recupere l'heure et on s'assure que l'heure reste toujours
     comprise enrtre 1 et 12.*/
    const hours = ((date.getHours() + 11) % 12 + 1);
    /* Par exemple, s'il est 23h,
     23+11= 34
     34 modulo 12 nous donne 10
     et 10+1 nous donnera 11 ce qui correspond à 11 h pm */

    /* on recupere les minutes*/
    const minutes = date.getMinutes();

    /* on recupere ensuite les secondes */
    const secondes = date.getSeconds();

    /* Maintenant il nous faut pouvoir afficher les données dans un intervale de 360 degrés 
     */

    /* on commence par l'heure
    on commence par diviser 360 par le nombre d'heures 
    doonc on aura 30
    ainsidonc, chaque heure, l'aiguille des heures va tourner de 30 degres */
    const hour = hours * 30;

    /* on passe ensuite à l'aiguille des minutes
    on à un ensemble de 60 minutes pour chaque rotation.
    donc 60 min pour faire 360 deg; 360/60 = 6
    chaque minutes correspond à un decalage de 6deg. 
    Le meme raisonement s'appliquera aux secondes*/

    const minute = minutes * 6;
    const seconde = secondes * 6;

    /* Maintenant il ne nous reste plus qu'a afficher les differents elements*/

    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.seconde').style.transform = `rotate(${seconde}deg)`;
}
clock();
/* pour que la montre s'actualise, on doit creer un intervale
d'actualisation*/
setInterval(clock, 1000);