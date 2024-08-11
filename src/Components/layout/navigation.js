import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";

export default function Navigation ({ navClassName, ulClassName, homeLinkClassName, divClassName, liClassName  }) {
  return (
    <nav className={`${navClassName}`}>
      <ul className={`${ulClassName}`}>
        <li className={`${homeLinkClassName}`}>
          <Link to={ROUTES.Home}>Anna-Yodit</Link>
        </li>
        <div className={`${divClassName}`}>
          <li className={`${liClassName}`}>
              <Link to={ROUTES.Project}>PROJECTS</Link>
          </li>
          <li className={`${liClassName}`}>
              <Link to={ROUTES.About}>ABOUT</Link>
          </li>
          <li className={`${liClassName}`}>
              <Link to={ROUTES.Contact}>CONTACT</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
};