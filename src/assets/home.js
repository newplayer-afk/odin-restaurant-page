export {homePage};

const homePage = (function () {
    // DEFINE ALL VARIABLES
    const content = document.querySelector("#content")
    const main = document.createElement("main")
    const div = document.createElement("div")
    
    const addMain = () => content.appendChild(main)
    
    
    
    return {addMain}
})();

