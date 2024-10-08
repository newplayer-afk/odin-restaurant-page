export {home}; 
import { mainContent } from "..";

const home = (function() {
    const add = () => {
        const testDiv = document.createElement("div")
        testDiv.classList.add("test")
        testDiv.textContent = "hi"
        mainContent.appendChild(testDiv)
    }  
    return {add}
})();