import "./styles.css"

import {homePage} from "./assets/home.js"
import {menu} from "./assets/menu.js"

const content = document.querySelector("#content")
//ON LAUNCH: RUN ADD HOMEPAGE CONTENT


homePage.add()

const logoButton = document.querySelector("#logo")
logoButton.addEventListener("click", () => {homePage.clear()})

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", () => {homePage.add()})

const menuButton = document.querySelector("#menu")
menuButton.addEventListener("click", () => {
    menu.clear()
    menu.add()
})

