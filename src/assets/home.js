export {homePage};
import buko_pie from "./images/buko.jpg"

const homePage = (function () {
    // DEFINE ALL VARIABLES
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    const buko_pie_image = document.createElement("img")
    buko_pie_image.src = buko_pie
    
    const addContent = () => {
        content.innerHTML = '';
        content.appendChild(main)
        main.appendChild(buko_pie_image)

        /*
        h2.textContent = "Welcome to the Best Authentic Buko Pie shop in Toronto!"
        p.textContent = 'Buko pie is a beloved Filipino dessert that showcases the tropical flavors of the coconut. The name "buko" is the Tagalog word for coconut, and this pie is a testament to the versatility and richness of this fruit.'
        */


    }
    
    
    
    return {addContent}
})();

