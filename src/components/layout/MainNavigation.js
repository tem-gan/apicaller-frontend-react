import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React People</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Family</Link>
          </li>
          <li>
            <Link to="/new-people">new family</Link>
          </li>
          <li>
            <Link to="/edit">edit</Link>
          </li>
          <li>
            <Link to="/find">Find family</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
