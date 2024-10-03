import "./styles.css"

import {homePage} from "./assets/home.js"

const button = document.querySelector("#home")

button.addEventListener("click", () => {homePage.addMain()})
