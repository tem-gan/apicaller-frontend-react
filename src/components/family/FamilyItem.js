import classes from "./FamilyItem.module.css";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

function FamilyItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.firstname}</h3>
          <p>{props.lastname}</p>
          <p>{props.familyId}</p>
        </div>
        <div className={classes.actions}>
          <Link to="/edit">
            <button type="button">Edit</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default FamilyItem;
