function appendElementsOnDocument(elements, selector) {
    const parentElement = document.createDocumentFragment()
    elements.forEach(element => {
        console.log(element)
        parentElement.appendChild(element)
    });
    document.querySelector(selector).appendChild(parentElement)
}