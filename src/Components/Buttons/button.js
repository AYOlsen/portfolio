import { Link } from "react-router-dom";

const Button = ( { link, text, className }) => {
    return (
        <div className={className}>
            <Link to={link} className="button">{text}</Link>
        </div>
    )
}

export default Button