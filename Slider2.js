class Slider {
    constructor(imgArray) {

        this.imgArray = imgArray;
        console.log(this.imgArray);
        this.node = document.getElementById("slider");
        this.createImg();
        //this.display();
        //this.change();
    }

    createImg() {

        const img = document.createElement("img");
        img.setAttribute("src", this.imgArray[0]);
        this.node.appendChild(img);
        
        console.log(this.imgArray[0]);  // relative path of image 1
        console.log(this.imgArray[1]);  // relative path of image 2
            
            for (let i = 0; i < this.imgArray.length; i++) {
                
                console.log(img); // node effective

            }

    }

    display() {


        this.node.appendChild(img);

    }

    change() {

        this.node.replaceChild(this.image3, this.image);

    }

}