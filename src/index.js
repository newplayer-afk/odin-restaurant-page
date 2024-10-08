//IMPORT STUFF
import "./styles.css";
import { home, clear } from "./assets/home.js"

//EXPORT STUFF
export {mainContent}

function clear() {
    mainContent.innerHTML = ""
}
const mainContent = document.querySelector("#content")

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", () => {
    home.add()
})

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", () => {
    clear()
})



