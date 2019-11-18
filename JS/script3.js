'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var rectangle;



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickRectangle()
{
    // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
    rectangle.classList.toggle('good');
}

function onMouseOutRectangle()
{
    // La méthode .remove() va supprimer la classes.
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}

function onMouseOverRectangle()
{
    // La méthode .remove() va ajouter la classe.
    rectangle.classList.add('important');
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// Recherche du bouton et du rectangle dans l'arbre DOM.

rectangle = document.querySelector('.rectangle');



// Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);

// Installation d'un gestionnaire d'évènement double clic sur le rectangle.
rectangle.addEventListener('click', onClickRectangle);