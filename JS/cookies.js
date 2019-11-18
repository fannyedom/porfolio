'use strict';   // Mode strict du JavaScript
let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
date = date.toUTCString();

//Crée ou met à jour un cookie 'user'
document.cookie = 'user=Fanny; path=/; domain=fannyedom.com; expires=' + date; 

console.log(document.cookie); //Affiche la liste des cookies



/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var rectangle;
var button;


rectangle = document.querySelector('.cd-cookies-banner');
button = document.querySelector('.cd-opt-in-btn');
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickButton()
{
    // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
    rectangle.classList.toggle('hide');
}

// Installation d'un gestionnaire d'évènement clic sur le bouton.
button.addEventListener('click', onClickButton);