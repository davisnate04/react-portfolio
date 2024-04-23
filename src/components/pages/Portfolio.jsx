import Project from "../Project";

const name = [
    {
        id: 1,
        name: "Note-Taker",
        text: "ORM",
        github: "https://github.com/davisnate04/note-taker",
        render: "https://nameless-temple-21085-5144a37d8706.herokuapp.com/",
        styleId: 'item1',
    },
    {
        id: 2,
        name: "JATE",
        text: "PWA",
        github: "https://github.com/davisnate04/J.A.T.E",
        render: "https://j-a-t-e-kmap.onrender.com/",
        styleId: 'item2'
    },
    {
        id: 3,
        name: "Recipe Guide",
        text: "API",
        github: "https://github.com/davisnate04/recipe-guide",
        render: "https://davisnate04.github.io/recipe-guide/",
        styleId: 'item3',
    },
    {
        id: 4,
        name: "Tech Blog",
        text: "MVC",
        github: "https://github.com/davisnate04/blog-site",
        render: "https://pure-eyrie-40676-672ec09724f4.herokuapp.com/",
        styleId: 'item4'
    },
]

export default function Portfolio() {
    return (
        <div className="body-container">
            <h2 className="header">
                Portfolio
            </h2>
            <Project name={name} />
        </div>
    )
}