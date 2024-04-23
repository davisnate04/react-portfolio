import ResumeList from "../ResumeList";
import { Link } from 'react-router-dom';

const frontend = [
    {
        id: 1,
        text: "HTML",
    },
    {
        id: 2,
        text: "CSS",
    },
    {
        id: 3,
        text: "Reponsive design",
    },
    {
        id: 4,
        text: "React",
    }
]

const backend = [
    {
        id: 1,
        text: "JavaScript"
    }, 
    {
        id: 2,
        text: "APIs",
    },
    {
        id: 3,
        text: "Node",
    },
    {
        id: 4,
        text: "Express",
    },
    {
        id: 5,
        text: "MySQL, Sequelize",
    },
    {
        id: 6,
        text: "MongoDB, Mongoose",
    },
    {
        id: 7,
        text: "REST"
    }
]

export default function Resume() {
    return (
        <div className="body-container">
            <h2 className="header">
                Resume
            </h2>
            <p className="downloadLink">
                Download my 
                <a href="/Resume.pdf" download target="_blank">
                resume
                </a>
            </p>
            <h3 className="resumeHeader">
                Front-end Proficiences
            </h3>
            <ResumeList proficiences={frontend} />
            <h3 className="resumeHeader">
                Back-end Proficiences
            </h3>
            <ResumeList proficiences={backend} />
        </div>
    )
}