/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
function refreshLien() {
    // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    listeLiens.forEach(function (listeLiens) {
        //console.log(listeLiens);
        var div = document.createElement("div"); //crée une div
        div.className = "lien"; // donne la class "lien" à la div
        document.getElementById("contenu").appendChild(div); // insert la div dans la div contenu
        div.innerHTML = "<a href='" + listeLiens.url + "' target='_blank' style='text-decoration:none; color: #428bca'>" + listeLiens.titre + "</a>\t <span>" + listeLiens.url + "</br>" + "</br> Ajouté par " + listeLiens.auteur + "</span>";
    });
}
refreshLien();

// innerHTML permet d'inserer de l'html

// Cree objet avec les propriete du formulaire 


console.log(document.getElementsByName("btn"));
console.log(document.getElementById("url").value);
/*
//en attente du click pour declencher la fonction
document.getElementsByName("btn")[0].addEventListener("click", function (event) {

}, false);
*/
function remplir() {
    let newObj = {
        titre: document.getElementById("titre").value,
        url: document.getElementById("url").value,
        auteur: document.getElementById("auteur").value
    };
    //unshift met les valeurs au debut du tableau
    listeLiens.unshift(newObj);
    document.getElementById("contenu").innerHTML = "";
    // rappel de forEach pour l'actualisation de la page
    refreshLien();
    document.getElementById("form").style.backgroundColor = "blue"
};

// cache le form
document.getElementById("form").style.display = "none";

// Met le form sur une seule ligne ( normalement )
document.getElementById("container").style.display = "inline";

// fonction d'affichage de from et cache le bouton précèdent
function affichage() {
    document.getElementById("btn2").style.display = "none";
    document.getElementById("form").style.display = "block";
};

function back() {
    
};

/*
let btn2 = document.getElementsByName("btn");
btn2.addEventListener("click", function(){
    listeLiens.push(newObj);
});
*/

/*
var div1 = document.createElement("div");
div1.id = "foot";
div1.className = "lien";
div1.innerHTML = "<a href='http:/\/sofoot.com' target='_blank' style='text-decoration:none; color: #428bca'>" + listeLiens[0].titre + "</a>\t <span>" + listeLiens[0].url + "</br>" + "</br> Ajouté par " + listeLiens[0].auteur + "</span>";
document.getElementById("contenu").appendChild(div1);

var div2 = document.createElement("div");
div2.id = "guide";
div2.className = "lien";
div2.innerHTML = "<a href='http:/\/guide.boum.org' target='_blank' style='text-decoration:none; color: #428bca' >" + listeLiens[1].titre + "</a>\t <span>" + listeLiens[1].url + "</br>" + "</br> Ajouté par " + listeLiens[1].auteur; 
document.getElementById("contenu").appendChild(div2);

var div3 = document.createElement("div");
div3.id = "encyclopedie";+ "</span>"
div3.className = "lien";
div3.innerHTML= "<a href='http:/\/Wikipedia.org' target='_blank' style='text-decoration:none; color: #428bca'>" + listeLiens[2].titre + "</a>\t <span>" + listeLiens[2].url + "</br>" + "</br> Ajouté par " + listeLiens[2].auteur + "</span>"; 
document.getElementById("contenu").appendChild(div3);

*/