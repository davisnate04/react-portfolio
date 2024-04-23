import { Link } from 'react-router-dom';

export default function Project(props) {
    return (
        <ul className="portfolio">
            {props.name.map(item => (
                <li className="visible" id={item.styleId} key={item.id}>
                    <div className="portfolioDiv">
                        <div>
                            <Link
                            to={item.render}
                            className="portfolioName"
                            >
                                {item.name}
                            </Link>

                            <Link
                            to={item.github}
                            className="portfolioImg"
                            >
                            <img src="https://github.com/fluidicon.png"></img>
                            </Link>
                        </div>
                        <p className="portfolioTxt">{item.text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}