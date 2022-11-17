import "./Nav.css";
import { NavItem } from "./NavItem";

export function Nav() {
  return (
    <div className="nav-bar">
      <div className="sub-bar">
        <ul className="list">
          <li className="first">
            <NavItem page="About" source="#" />
          </li>
          <li>
            <img
              className="center"
              src="../../images/logo.png"
              width="150"
              height="100"
            ></img>
          </li>
          <li className="last">
            <NavItem page="Cart" source="#" />
          </li>
        </ul>
      </div>
    </div>
  );
}
