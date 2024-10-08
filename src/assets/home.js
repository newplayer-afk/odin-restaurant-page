export {home}; 

const home = (function() {

    const add = () => {
        const testDiv = document.createElement("div")
        testDiv.classList.add("test1")
        mainContent.textContent = "hi"
    }  
    
    return {add}
})();