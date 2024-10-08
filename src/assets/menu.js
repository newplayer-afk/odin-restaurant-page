export {menu}; 
import { mainContent } from "..";

const menu = (function() {
    const add = () => {
        const testDiv = document.createElement("div")
        testDiv.classList.add("test2")
        testDiv.textContent = "hi"
        mainContent.appendChild(testDiv)
    }  
    return {add}
})();