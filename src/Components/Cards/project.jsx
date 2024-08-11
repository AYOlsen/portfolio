import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";

const ProjectCard = ({ title, category, image, slug}) => {
    return (
        <Link to={`${ROUTES.Project}/${slug}`} className="w-[450px] h-[400px]">
            <div className="zoom-out aspect-square rounded">
                <img className='object-cover w-[100%] h-[100%]' src={image} alt={title} />
            </div>
            <h3 className='text-2xl font-semibold text-green-200'>{title}</h3>
            <span className='text-md text-green-200'>{category}</span>
        </Link>
    );
}

export default ProjectCard;