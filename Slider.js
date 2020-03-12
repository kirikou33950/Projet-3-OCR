class Slider {
    constructor(image, imgArray) {

        this.tableauImages = imgArray;
        console.log(this.tableauImages); // Affiche le tableau avec les 3 images définies dans Main.js en paramètre

        // TODO

        // 1- Créer un variable avec le chemin de l'image

        this.image = image; // image = le chemin défini à l'instanciation dans le Main.js, donc "img/velo1.jpeg"
        console.log(this.image); // image/velo1.jpeg

        // 2- Récupérer le noeud où injecter l'image dans le DOM

        this.noeud = document.getElementById("slider");
        console.log(this.noeud); // <div id="slider"></div>

        // 4- Créer l'élement image (balise)

        this.elt = document.createElement("img");
        console.log(this.elt);

        // 5- Donner l'attribut source avec en second paramètre le chemin de l'image

        this.elt.setAttribute("src", this.image);
        console.log(this.elt); // <img src="img/velo1.jpeg">


        // 7- Appeler la méthode

        this.showImg();

    }

    // 6- Créer la méthode qui injecte l'image dans le noeud crée plus haut

    showImg() {

        // 1- selectionner l'emplacement
        // 2- utiliser la méthode native de js
        // 3- donner à la méthode le contenu en paramètre
        // cible.méthode(paramètre)

        this.noeud.appendChild(this.elt);


    }
    // finir son p2 connard
}