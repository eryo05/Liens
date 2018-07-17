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


//creation des div

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

