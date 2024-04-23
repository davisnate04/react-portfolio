import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <Link
            to="https://github.com/davisnate04"
            target='_blank'
            >
            <img src="https://github.com/fluidicon.png"></img>            
            </Link>
            <Link
            to="https://www.linkedin.com/in/nathaniel-davis-9358b8259/"
            target='_blank'
            >
            <img src="../footer/linkedIn.png"></img>
            </Link>
            <Link
            to="https://stackoverflow.com/users/24616043/gear-monkey"
            target='_blank'
            >
            <img src="../footer/stack-overflow.png"></img>
            </Link>
        </div>
    )
}