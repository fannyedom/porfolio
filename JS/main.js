class Carousel{
	//appelle de nvles instances de cette classe

	//constructeur prends 2 param
	constructor(element, options = {}){

		this.element = element;
		this.options = Object.assign({}, {
			// Tableau d'options, on fusionne l'obj this.options w/ obj contenant 
			//les valeurs par defaut si elle ne sont pas déclarées dans l'instance

			slidesToScroll: 1,
			slidesVisibles: 1,
			loop: false,
			pagination: false,
			navigation: true,
		},options)

		let children = [].slice.call(element.children) //transforme la nodelist 
		this.currentItem = 0; //Permet de def le premier element du slider comme départ

		//Modification du DOM (élément html d'une page)
		this.root = this.createDivwithClass('carousel')
		this.container = this.createDivwithClass('carousel__container')
		this.root.setAttribute('tabindex','0') //permet de savoir si on peut le focus avec la touche tabulation
		this.root.appendChild(this.container) //on ajoute la div container dans la div root
		this.element.appendChild(this.root); //on ajoute la div root dans le DOM 
		this.items = children.map((child)=>{
			let item = this.createDivwithClass('carousel__item')
			item.appendChild(child)
			this.container.appendChild(item)
			return item
		})

		this.setStyle()
		
		if(this.options.navigation){
			this.createNavigation()
		}

		if(this.options.pagination){
			this.createPagination()
		}
	}

	createDivwithClass(className){
		let div = document.createElement('div')
		div.setAttribute('class', className)
		return div
	}

	//Crée les flèches de navigation dans le DOM

	createNavigation(){
		let nextButton = this.createDivwithClass('carousel__next') //bouton next
		let prevButton = this.createDivwithClass('carousel__prev') //bouton prev
		this.root.append(nextButton) //On ajoute les boutons à la racine du document
		this.root.append(prevButton)
		nextButton.addEventListener('click', this.next.bind(this)) //on bind this pour ne pas perdre le contexte
		prevButton.addEventListener('click', this.prev.bind(this))
		//Comme ça dans les méthodes next et prev, this ne fera pas référence à l'élément sur lequel on vient d'appuyer mais sur la class Carousel
		
		//Comeback for loop
		}

	next(){
		this.gotoItem(this.currentItem + this.options.slidesToScroll)
	}

	prev(){
		this.gotoItem(this.currentItem - this.options.slidesToScroll)
	}


	gotoItem(index){
		//fixe la limite
		if(index < 0){
			// Va à la fin en cas de clic sur la flèche de gauche  au début du carousel.
			if(this.options.loop){
				index = this.items.length - this.options.slidesVisibles
			}else{
				return
			}

		}else if(index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisibles] === undefined && index > this.currentItem)){
			if(this.options.loop){
				index = 0
			}else{
				return
			}
		}
		
		let translateX = index*-100/this.items.length
		this.container.style.transform = `translate3d('$(translateX)%, 0, 0')`
		this.currentItem = index
		
	}


	createPagination(){
		let pagination = this.createDivwithClass('carousel__pagination')
		let buttons = []
		this.root.appendChild(pagination)

		for (let i = 0; i< this.items.length; i += this.options.slidesToScroll){
			let button = this.createDivwithClass('carousel__pagination__button')
			button.addEventListener('click', ()=> this.gotoItem(i))
			pagination.appendChild(button)
			buttons.push(button) 
		}
	}

	//On applique les bonnes dimensions aux éléments du carousel
	setStyle(){ //La création d'une méthode permet de relancer cette méthodes quand les valeurs changent. 
		let ratio = this.items.length / this.options.slidesVisibles
		this.container.style.width = (ratio * 100) + "%"
		this.items.forEach(item =>{
			item.style.width = ((100/this.options.slidesVisibles)/ratio) + "%"
		})
	}
}

let onReady = function(){
	new Carousel(document.querySelector('#carousel1'),{
		slidesVisibles: 3,
		slidesToScroll: 2,
		loop: true
	})
}


if (document.readyState != 'loading'){
	onReady();
}

document.addEventListener('DOMContentLoaded', onReady);