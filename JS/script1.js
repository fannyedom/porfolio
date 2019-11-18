function loading() {
    document.querySelectorAll(".bar").forEach(function(current) /*selectionne chaque  divs .bar et permet d'executer la fonction sur chaque  élément div .bar*/{
      var  startWidth = 0; /*le pourcentage commence à zéro*/
      var endWidth = current.dataset.size; /*actuel data-size de la .bar*/
      var interval = setInterval(frame, 10); /* ça repète la function frame TOUTES les 10ms*/
      var valeur = current.dataset.value;
  
      function frame() {
        if (startWidth >= endWidth)/*si le pourcentage est >= que le data-size mis, on stoppe l'incrémentation*/ {
          clearInterval(interval);/*stop le setinterval*/
        } else {
            startWidth++;/*incrémente le pourcentage*/
            current.style.width = endWidth + '%'; /*taille de la div en fonction de  la largeur donné du data-size avec le % derrière*/
            current.firstElementChild.innerText =  valeur; /*nom du premier noeuf enfant de l'élément div .bar donc ici mon span , on ecrit le lanagage dedans en focntion de la valeur de la var startwidth*/
          }
       }
    });
  }
  
  setTimeout(loading, 1000); /*repète la fonction loading DANS 1 secondes*/