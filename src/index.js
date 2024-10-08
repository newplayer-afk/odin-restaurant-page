//IMPORT STUFF
import "./styles.css";
import { home } from "./assets/home.js"
import { menu } from "./assets/menu.js";

//EXPORT STUFF
export const mainContent = document.querySelector("#content")

//CLEAR CONTENT DIV
function clear() {
    mainContent.innerHTML = ""
}

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", () => {
    clear()
    home.add()
})

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", () => {
    clear()
    menu.add()
})



