// QUESTION 1

// Quelle méthode JavaScript faut-il utiliser pour itérer sur le tableau donné en exemple ci-dessous ? Dans la console, affichez individuellement les quatres éléments de ce tableau comme dans l’exemple fourni.

const beatles = ["paul", "john", "ringo", "george"];

// Votre réponse ci-dessous :

beatles.forEach((beatle) => {
  console.log(beatle);
})

// QUESTION 2

// Avec JavaScript, comment séléctionner un élément du DOM d’après son id ? Séléctionnez l’élément possédant l’identifiant drummer parmi les trois éléments ci-dessous.

// Votre réponse ci-dessous :
const ringo = document.getElementById("drummer");
console.log(ringo);


// QUESTION 3

// Comment séléctionner plusieurs éléments lorsqu’on ne dispose pas d’id ? Séléctionnez uniquement les paragraphes possédant la classe red.

// Votre réponse ci-dessous :
const redclass = document.querySelectorAll(".red");
redclass.forEach((red) => {
  console.log(red);
})


// QUESTION 4

// Comment peut-on écouter un évènement de type mouseover sur l’élément du DOM donné en exemple ? Bonus : ajoutez un effet de hover personnalisé.

const element = document.querySelector(".listening");

// Votre réponse ci-dessous :
element.addEventListener("mouseover", (e) => {
  console.log("I'm hovered !");
  element.classList.add("highlight");
});


// QUESTION 5

// Avec JavaScript, comment insérer du contenu HTML à l’intérieur de cet élément du DOM ? Séléctionnez la liste ci-dessous et ajoutez lui un list items contenant Obi Wan, placez le en dernière position.

// Votre réponse ci-dessous :
const list = document.getElementById("jedi");
list.insertAdjacentHTML("beforeend", "<li>Obi-Wan</li>");


// QUESTION 6

// Comment ajouter ou retirer une classe CSS à un élément du DOM ? Retirez la classe blue de cet élément et remplacez la par red.

// Votre réponse ci-dessous :
const blueclass = document.querySelector(".blue");
blueclass.classList.remove("blue");
blueclass.classList.add("red");

// QUESTION 7

// Définissez une fonction multiply, prenant deux paramètres : a et b ; et qui renvoie le résultat de  a * b.

// Votre réponse ci-dessous :
function multiply(a, b) {
  return a * b;
};
console.log(multiply(3, 5));


// QUESTION 8

// En utilisant la syntaxe d’ES6, interpolez le contenu des deux premières variables à l’intérieur de la variable fullName pour afficher la string "Ringo Starr is a drummer".

const firstName = "Ringo";
const lastName = "Starr";

// Votre réponse ci-dessous :
const fullName = `${firstName} ${lastName} is a drummer`;
console.log(fullName);











