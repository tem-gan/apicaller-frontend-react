import classes from "./FamilyList.module.css";
import EditItem from "./EditItem";

function EditList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((people) => (
        <EditItem
          key={people.id}
          id={people.id}
          firstname={people.firstname}
          lastname={people.lastname}
          familyId={people.familyId}
          role={people.role}
        />
      ))}
    </ul>
  );
}

export default EditList;
