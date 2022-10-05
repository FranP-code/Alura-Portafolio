class strongDataElement {
    constructor(typeOfElement, imageURL, title) {
        this.typeOfElement = typeOfElement
        this.imageURL = imageURL
        this.title = title
    }
    generateElement() {
        const squareItem = document.createElement('div')
            squareItem.classList.add('square-item')
            squareItem.classList.add(this.typeOfElement)
        
        const imageElement = document.createElement('img')
            imageElement.src = this.imageURL
        
        const title = document.createElement('p')
            title.innerText = this.title
        
            squareItem.appendChild(imageElement)
            squareItem.appendChild(title)
        return squareItem
    }
}

const strongData = [
    {
    typeOfElement: "",
    imageURL: "",
    title: ""
    },
    {
    typeOfElement: "skill",
    title: "Html 5",
    imageURL: "icons/html.svg"
    },
    {
    typeOfElement: "skill",
    title: "Javascript",
    imageURL: "icons/js.svg"
    },
    {
    typeOfElement: "skill",
    title: "PHP",
    imageURL: "icons/php.svg"
    },
    {
    typeOfElement: "skill",
    title: "Node JS",
    imageURL: "icons/node.svg"
    },
    {
    typeOfElement: "skill",
    title: "React",
    imageURL: "icons/react.svg"
    },
    {
    typeOfElement: "skill",
    title: "CSS",
    imageURL: "icons/css.svg"
    },
    {
    typeOfElement: "hobbie",
    imageURL: "icons/skate.svg",
    title: "Skate"
    },
    {
    typeOfElement: "hobbie",
    imageURL: "icons/guitar.svg",
    title: "Guitar"
    },
    {
    typeOfElement: "hobbie",
    imageURL: "icons/headphones.svg",
    title: "Oir música"
    },
    {
    typeOfElement: "hobbie",
    imageURL: "icons/screen.svg",
    title: "Ver series"
    },
    {
    typeOfElement: "hobbie",
    imageURL: "icons/cook.svg",
    title: "Cocinar"
    },
    {
    typeOfElement: "hobbie",
    imageURL: "icons/camera.svg",
    title: "Fotografía"
    },
]

const elements = [{type: 'skill', selector: "#skills .square-container"}, {type: "hobbie", selector: "#hobbies .square-container"}]

elements.forEach(({type, selector}) => {
    appendElementsOnDocument(strongData.filter(element => element.typeOfElement === type).map(({typeOfElement, imageURL, title}) => (new strongDataElement(typeOfElement, imageURL, title)).generateElement()), selector)
})