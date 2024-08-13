// Banner.js
const Banner = ({ title, text, className, titleClassName, textClassName}) => {
    return (
        <div className={`${className}`}>
            <h2 className={`${titleClassName}`}>{title}</h2>
            <p className={`${textClassName}`}>{text}</p>
        </div>
        );
    };

export default Banner;
