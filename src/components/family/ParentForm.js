import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./ParentForm.module.css";

function ParentForm(props) {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const familyIdInputRef = useRef();
  const roleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstname = firstnameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;
    const enteredFamilyId = familyIdInputRef.current.value;
    const enteredRole = roleInputRef.current.value;

    const peopleData = {
      firstname: enteredFirstname,
      lastname: enteredLastname,
      familyId: enteredFamilyId,
      role: enteredRole,
    };
    props.onAddPeople(peopleData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="firstname">fistname</label>
          <input type="text" required id="firstname" ref={firstnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">lastname</label>
          <input type="text" required id="lastname" ref={lastnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="familyId">family ID</label>
          <input type="number" required id="familyId" ref={familyIdInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="role">role</label>
          <input type="text" required id="role" ref={roleInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add member</button>
        </div>
      </form>
    </Card>
  );
}

export default ParentForm;
