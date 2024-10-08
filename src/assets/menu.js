export {menu};
//VALUABLE LESSON LEARNED:
//const element = document.createElement("h1") CAN BE DEFINED ANYWHERE, EVEN IN index.js
const menu = (function(){
    //CLEAR METHOD SHOULD BE STANDARDIZED ACROSS ALL, HOW CAN I PREVENT REPEATS (USE PROTOTYPES?)
    const clear = () => {
        content.innerHTML = '';
    }
    
    const add = () => {
        const element = document.createElement("h1")
        element.textContent = "hi"
        content.appendChild(element)
    }

    return {clear, add}
})();