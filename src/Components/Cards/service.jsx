const ServiceCard = ({ title, description, image }) => {
    return (
        <div className="card float bg-white text-brown-300 border border-green-400 w-[420px] h-auto rounded-lg">
            <img className="mx-auto h-60" src={image} alt={title} />
            <h3 className="text-lg font-semibold mt-6">{title}</h3>
            <p className="">{description}</p>
        </div>
    );
};

export default ServiceCard;
