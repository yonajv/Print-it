"use strict";

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*
// Etape 2 



let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener('click', function() {
	console.log("left clicked");
});
arrowRight.addEventListener('click', function() {
console.log("right clicked")
})

// Etape 3 - bullets points 

const dotsContainer = document.getElementById("dots")

slides.forEach( slide => { 
const dot = document.createElement('div'); 
dot.classList.add('dot'); 
dotsContainer.appendChild(dot); 
});



// Le slide actif 
let activeSlide = 0;

// flèches 
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// fonction qui met à jour les slides 
function updateSlides(activeSlide = 0 ) {
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }  // si l'active slide devient plus grand que le slide lenght qui est 4 mais index 3 donc - 1 --> on retourne à zéro 
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    } // retour à index 3 si on est à index 0 (premier slide)
    console.log("LENGTH", slides.length);

    // on passe à travers le tableau 
    // index nous montre la position actuelle dans le tableau 
    slides.forEach((slide, index) => {
        // console.log("numéro slide ", slide);
        // console.log("numéro index", index);
        //on vérifie si activeSlide == index (== verifie la valeur uniquement et pas le type (string, nb..))
        //quand ça l'est, on fait la chose suivante : 
        if (activeSlide == index) {
            //on selectionne le container
            const banner = document.querySelector("#banner");
            //ensuite on selectionne l'image qui se trouve dans le container
            const bannerImage = document.querySelector(".banner-img");
            //puis on change la src de l'image qu'on a selectionné 
           bannerImage.src = "./assets/images/slideshow/"+slides[activeSlide].image; // +${} à faire comme ça
            //puis on selectionne le paragraphe 
            const tagLineElement = document.querySelector("#banner p");
            // on change le p et span qui s'y trouve en utilisant le Tagline du tableau slides
            tagLineElement.innerHTML = slides[activeSlide].tagLine;
        }
    });
    console.log(activeSlide);
}


arrowRight.addEventListener("click", function () {
    console.log("right clicked");
    activeSlide++; // lorsque fleche droite clicked activeSlide + 1 
    updateSlides(); // lancer la fonction 
    updateDots(); // et celle ci 
});

arrowLeft.addEventListener("click", function () {
    console.log("left clicked");
    activeSlide--;
    updateSlides();
    updateDots();
});



function updateDots() {
    //on se positionne sur la div dots
    const dotsContainer = document.getElementById("dots");
    //on selectionne les dot / tous les éléments enfants du dotsContainer
    const dotElements = dotsContainer.querySelectorAll("*"); 
    //on passe par tous les éléments et on vérifie 
    //1) si ils ont la classe dot_selected -> l'enlever 
    //2) si activeSlide==index -> ajouter classe dot_selected
    dotElements.forEach((dot, index) => {
        //if (dot.classList.contains("dot_selected")) {
            //dot.classList.remove("dot_selected");
        //}
        if (activeSlide == index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected")
        }
    });
}

// CELA AU DEBUT DANS UNE FONCTION QUI CREERA IMG + DOTS et supp if car la fonction ne fera que créer
// on seletcionne le container qui contient les dot 
const dotsContainer = document.getElementById("dots");
slides.forEach((slide, index) => {
    //on crée une fiv dot 
    const dot = document.createElement("div");
    //on lui ajoute la classe dot 
    dot.classList.add("dot");
    //on vérifie si activeSldie == index 
    //quand c'est le cas cela signifie que le slide est selectionné 
    if (index == activeSlide) {
        //on lui ajoute la classe dot_selected
        dot.classList.add("dot_selected");
    }
    //et à la fin ces dot sont ajouté au dots container en tant que child
    dotsContainer.appendChild(dot);
});

//appel de la foncton qui crée l'image et le texte = permet de garantir que le slide est correctement initialisé et affiche le premier slide dès le chargement de la page - bullet point correspondant à la première image est affiché comme actif

updateSlides();

// tout doit etre dans des fonctions avec des paramètres
// gérer slide à partir des dots - fonction --> queryselectorall recup toutes les dot puis faire une boucle for of et mettre un gestionnaire d'événements dedans - (target proprité pour mettre une couleur quand on clique dessus juste pour verifier si on est sur l'élément cliqué) 
// il faut recupérer le numéro 
// dataset est un objet qui fait partie de l'élément qui permet de créer mes propres attributs - qui contient tout les dataset --> data-XXXX ce que veut // ici on veut recup l'index donc on creer attribut data-id à insérer avec insertAdjacentHTML 
// pour recup .data-set.data-id 

// insertAdjacentHTML (voir doc ce que c'est ) vs createElement 


// diff forEach / for of
// boucle forEach ne peut pas s'arreter tant que ça ne s'excute pas jusqu'a la fin 
// continue -> il y a des valeurs d'un objet ittérable qu'on ne veut pas traiter donc peut mettre continue et il ne le fera pas


// si le temps : faire un slide automatic --> en utilisant callback qui appel une fonction toutes les X temps / setIntervale method ou setTimeout   
*/


// --------------------- CONSIGNES -------------------------- // 

// la fonction createImg a renommé createElementSlide + pas besoin de boucle for , on crée qu'une seul img, p ect qui changeront de sources. cette fonction sert donc a crée les éléments nécessaires du slide. + dans cette fonction crée les dots. pour les dots j'aurai besoin d'une boucle car il y en plusieurs. on a juste crée les éléments HTML avec cette fonction. la fonction display dots a mettre dans la fonction createElementSlide

// Autre fonction qui met à jour les slides et la dot selected (la on aura une boucle forEach (qui a deux paramétres l'éléments et l'index) pour les dots) et cette fonction sera appelé dans les écouteurs d'événements --> tout ça dans cette fonction : bannerImage.src = `./assets/images/slideshow/${slides[activeSlide].image}`; // tagLineElement.innerHTML = `${slides[activeSlide].tagLine}`; cette fonction aura en paramétre l'index du slide. dans la fonction on va recevoir un index et si index equivalent à la dot la on ajoute dot_selected ou sinon je la remove // on pourrait mettre un return pour récup l'index 


// lorsqu'on clique sur les dots que le slide correspondant s'affiche - il faut faire dataset ---- data-id -- ça se sera dans la fonction 1 qui crée les éléments
// ensuite il faut faire une boucle sur toutes les dots - en selectionnant toutes les dots querySelectorAll -- on va boucler dessus avec une boucle for of et à l'interieur on mettra un ecouteur d'événements lorsqu'on clique dessus. avec event target (e.target.dataset.id ) on va recup l'élément donc son data-id  (dataset.id) --> une fois qu'on a l'identifiant la on appelle la fonction updateSlide --> faire une fonction de tout ça 

// 2 fonctions + 2 écouteurs d'évèments 


const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots")
//let activeSlide = 0; 
const banner = document.getElementById("banner"); // ça on laisse à l'extérieur de la fonction car on va s'en servir 
let bannerImage;
let tagLineElement;



const createElementSlide = () => {

    
    bannerImage = document.createElement("img");
    bannerImage.classList.add("banner-img");
    tagLineElement = document.createElement("p");
    banner.appendChild(bannerImage);
    banner.appendChild(tagLineElement);

    }
    slides.forEach ((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.setAttribute("data-id", index); 
        dotsContainer.appendChild(dot);
console.log(dot.dataset.id);
});


createElementSlide();



const updateSlide = (activeSlide = 0) => {
    console.log("hola", slides[activeSlide].image)


    bannerImage.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
    tagLineElement.innerHTML = `${slides[activeSlide].tagLine}`;

    let dots = dotsContainer.querySelectorAll("*")
    dots.forEach((dot, index) => {

        if (activeSlide == index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    }); 
    console.log("new 2", activeSlide)
    return activeSlide;
   

}
let activeSlide = updateSlide();
console.log("new", activeSlide)


arrowRight.addEventListener("click", () => {
    console.log("right clicked");
    activeSlide++; // lorsque fleche droite clicked activeSlide + 1 
    if (activeSlide > slides.length -1){
        activeSlide = 0;
    }
updateSlide(activeSlide);

});

arrowLeft.addEventListener("click", () => {
    console.log("left clicked");
    activeSlide--;
    if (activeSlide < 0){
        activeSlide = slides.length -1; 
       
    }
   updateSlide(activeSlide);
});

const dotsSelection = () => {
    const dots = document.querySelectorAll('.dot');

    for (const dot of dots) {
        dot.addEventListener('click', (event) => {
            const dataId = event.target.dataset.id;
            updateSlide(dataId);
    });
}
}

dotsSelection();



// faire si temps : slide automatique // comme faire gestionnaire evenement automatisé set time out set time intervale


/*
// création dots 

function displayDots (slide, activeSlide) {
    for (let slide = 0; slide < slides.length; slide++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
        if(slide == activeSlide) {
            dot.classList.add("dot_selected");
        }  
    }
}

displayDots();

*/