export {menu}; 
import { mainContent } from "..";

const menu = (function() {
    const add = () => {
    const mainMenu = document.createElement("div")
    mainMenu.classList.add("menu")
    mainContent.appendChild(mainMenu)
    
    }  
    return {add}
})();