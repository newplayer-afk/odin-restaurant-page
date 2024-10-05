export {menu};

const menu = (function(){
    const addContent = () => {
        const content = document.querySelector("#content")
        content.innerHTML = '';
    }
    return {addContent}
})();