import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";

const LatestProjectCard = ({ title, category, image, slug}) => {
    return (
        <Link to={`${ROUTES.Project}/${slug}`} className="latest-project-card">
            <div className="latest-project-image ">
                <img className='aspect-video object-cover w-[500px] rounded-md' src={image} alt={title} />
                <div className="image-overlay rounded-md"></div>
            </div>
            <div className='latest-project-details'>
                <h3 className="latest-project-title text-2xl pb-2 ">{title}</h3>
                <span className="latest-project-category">{category}</span>
            </div>
        </Link>
    );
};

export default LatestProjectCard;
