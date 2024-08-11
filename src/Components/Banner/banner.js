// Banner.js
const Banner = ({ title, text, className }) => {
    return (
        <div className={`banner ${className}`}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        );
    };

export default Banner;
