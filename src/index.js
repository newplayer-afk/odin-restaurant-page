//IMPORT STUFF
import "./styles.css";
import { home } from "./assets/home.js"

const mainContent = document.querySelector("#content")

const op1 = document.querySelector("#home")
op1.addEventListener("click", () => {
    home.add()
})