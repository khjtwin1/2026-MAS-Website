import { Link } from "react-router-dom";
import "../styles/NavElements.css";

function NavElements({ text, path, isHighlight }) {
  const className = isHighlight ? "navElements highlight" : "navElements";
    if(path.startsWith("#")){
      return (
        <li>
          <a className={className} href={path}>{text}</a>
        </li>
      );
    } else {
      return (
        <Link className={className} to={path}>
          {text}
        </Link>
      );
    }
}

export default NavElements;