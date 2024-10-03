export {homePage};
import image_import from "./images/kbbq.jpeg"

const homePage = (function () {
    // DEFINE ALL VARIABLES
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    const divDescription = document.createElement("div")
    divDescription.classList.add('description')
    const divPhoto = document.createElement("div")
    divPhoto.classList.add('photo')
    const kbbq_image = document.createElement("img")
    kbbq_image.src = image_import
    kbbq_image.classList.add('kbbq-photo')
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    
    const addContent = () => {
        content.appendChild(main)
        main.appendChild(divDescription)
        main.appendChild(divPhoto)
        divDescription.appendChild(h1)
        divDescription.appendChild(p)
        h1.textContent = "Welcome to Code's Korean BBQ Restaurant"
        p.textContent = "We serve traditional Korean dishes, and Korean B.B.Q." +
                    "Try our grilled meat specialties, whether you prefer beef, pork, or chicken. Seafood specialties are also available." +
                    "You may want to taste the Mapo BBQ, which is Korean-style stew (Jjigye), or eat the Jeongol and more."
        divPhoto.appendChild(kbbq_image)
    }
    
    
    
    return {addContent}
})();

