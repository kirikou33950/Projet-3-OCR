class Main{
    constructor(){

     // On instancie un objet de la classe Slider avec en paramètre le chemin de l'image,
     // ce paramètre est récupéré dans les paramètres de constructeur de la class Slider, qui sera "image" dans notre cas 

    this.slider = new Slider(
        [
            "img/velo1.jpeg", "img/velo2.jpg", "img/velo3.jpeg" // 2d paramètre => tableau avec 3 images
        ]
    ); 


    }
}

new Main();