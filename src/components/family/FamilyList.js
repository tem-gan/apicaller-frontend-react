import classes from "./FamilyList.module.css";
import FamilyItem from "./FamilyItem";

function FamilyList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((parent) => (
        <FamilyItem
          key={parent.id}
          id={parent.id}
          familyId={parent.familyId}
          firstname={parent.firstname}
          lastname={parent.lastname}
          role={parent.role}
        />
      ))}
    </ul>
  );
}

export default FamilyList;
