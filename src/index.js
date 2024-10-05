import "./styles.css"

import {homePage} from "./assets/home.js"
import {menu} from "./assets/menu.js"


//ON LAUNCH: RUN ADD HOMEPAGE CONTENT
homePage.addContent()

const logoButton = document.querySelector("#logo")
homeButton.addEventListener("click", () => {homePage.addContent()})

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", () => {homePage.addContent()})

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", () => {menu.clearContent()})
