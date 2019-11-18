'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var dayNames; 
var monthNames;
var today; 
var text;
var date;


dayNames= [];

dayNames[0]= "Dimanche";
dayNames[1]= "Lundi";
dayNames[2]= "Mardi";
dayNames[3]= "Mercredi";
dayNames[4]= "Jeudi";
dayNames[5]= "Vendredi";
dayNames[6]= "Samedi";


monthNames=[];

monthNames[0]  = 'Janvier';
monthNames[1]  = 'Février';
monthNames[2]  = 'Mars';
monthNames[3]  = 'Avril';
monthNames[4]  = 'Mai';
monthNames[5]  = 'Juin';
monthNames[6]  = 'Juillet';
monthNames[7]  = 'Août';
monthNames[8]  = 'Septembre';
monthNames[9]  = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';


today =new Date();

text = document.querySelector(".rectangle").textContent= "hover me and click!";
date=document.getElementById("date").textContent= dayNames[today.getDay()] +" "+ today.getDate()+" "+monthNames[today.getMonth()]+" " + today.getFullYear();

