// Peace sells, but who's buying?

class experienceElement {
    constructor(imageURL, title, description, repoLink, demoLink) {
        this.imageURL = imageURL
        this.title = title
        this.description = description
        this.repoLink = repoLink
        this.demoLink = demoLink
    }
    generateElement() {
        const project = document.createElement('div')
            project.classList.add('project')
        const image = document.createElement('img')
            image.src = this.imageURL
            image.alt = `project ${this.title}`
        const data = document.createElement('div')
            data.classList.add('data')
        const title = document.createElement('h6')
            title.innerText = this.title
        const description = document.createElement('p')
            description.innerText = this.description
        const buttonsContainer = document.createElement('div')
            buttonsContainer.classList.add('buttons-container')
        const buttonsData = [
            {
                label: "Repositorio",
                class: "secondary",
                link: this.repoLink
            },
            {
                label: "Ver demo",
                class: "primary",
                link: this.demoLink
            }
        ]
        buttonsData.forEach((element) => {
            const anchor = document.createElement('a')
                anchor.href = element.link
                anchor.target = "_blank"
            const button = document.createElement('button')
                button.classList.add(element.class)
                button.innerText = element.label
            anchor.appendChild(button)
            buttonsContainer.appendChild(anchor)
        })
        data.appendChild(title)
        data.appendChild(description)
        data.appendChild(buttonsContainer)
        project.appendChild(image)
        project.appendChild(data)
        return project
    }
}

const experienceData = [
    {
        imageURL: "https://i.ibb.co/6YSpS7G/2022-05-02-19-57-46-franp-code-github-io-1abade5983d9.png",
        title: "Encriptador de textos",
        description: "Encriptador de texto que permite encriptar y desencriptar el texto introducido por el usuario.",
        repoLink: "https://github.com/FranP-code/Challenge1-Alura-OracleONE",
        demoLink: "https://franp-code.github.io/Challenge1-Alura-OracleONE/"
    },
    {
        imageURL: "./img/hangman-game.png",
        title: "Juego del ahorcado",
        description: "Juego del ahorcado en web usando JavaScript",
        repoLink: "https://github.com/FranP-code/Challenge2-Alura-OracleONE",
        demoLink: "https://franp-code.github.io/Challenge2-Alura-OracleONE/"
    },
    {
        imageURL: "https://i.ibb.co/QYGkWnk/1.png",
        title: "Vanilla JavaScript Counter",
        description: "El usuario define el numero a contar a partir del cero, y el tiempo que le va a tomar al contador a ir entre numero y numero.",
        repoLink: "https://github.com/FranP-code/Vanilla-Javascript-Counter",
        demoLink: "https://vanilla-javascript-counter.netlify.app"
    }
]

appendElementsOnDocument(experienceData.map(({imageURL, title, description, repoLink, demoLink}) => (new experienceElement(imageURL, title, description, repoLink, demoLink)).generateElement()), '#experience .projects-container')