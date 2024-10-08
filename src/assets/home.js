export {home}; 

const home = (function() {
    const add = () => {
        const mainContent = document.querySelector("#content")
        const testDiv = document.createElement("div")
        testDiv.classList.add("test")
        testDiv.textContent = "hi"
        mainContent.appendChild(testDiv)
    }  
    return {add}
})();