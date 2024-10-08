export {homePage};
import owners from "./images/owners.jpg"

const homePage = (function () {
    const owners_import = owners
    // DEFINE ALL VARIABLES
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    const owners_image = new Image()
    owners_image.src = owners_import
    owners_image.classList.add("owners-image")
    
    const addContent = () => {
        content.innerHTML = '';
        content.appendChild(main)
        /*
        Here we will add content to main. We will start by adding an introduction with a left side div and right side div
         */
        const introduction = document.createElement("div")
        introduction.classList.add("intro")
        const ls = document.createElement("div")
        const rs = document.createElement("div")
        ls.classList.add("intro-left")
        rs.classList.add("intro-right")

        main.appendChild(introduction)
        introduction.appendChild(ls)
        introduction.appendChild(rs)

        const h2 = document.createElement("h2");
        const para = document.createElement("p");
        h2.textContent = "Welcome to the Best Buko Pie shop in Toronto!"
        para.textContent = "Verna's Buko Pie is a family owned Filipino Pie Shop owned by Myrna and Silverio Mundin, " 
        + "where we are commited to giving you the best and most authentic Buko Pie in the GTA!"
        
        ls.appendChild(h2)
        ls.appendChild(para)
        




        rs.appendChild(owners_image)
        /*
        h2.textContent = "Welcome to the Best Authentic Buko Pie shop in Toronto!"
        p.textContent = 'Buko pie is a beloved Filipino dessert that showcases the tropical flavors of the coconut. The name "buko" is the Tagalog word for coconut, and this pie is a testament to the versatility and richness of this fruit.'
        */


    }
    
    
    
    return {addContent}
})();

