import { useRef } from "react";
import classes from "./EditForm.module.css";
import Card from "../ui/Card";

function EditForm(props) {
  const theId = window.location.pathname.split("/")[2];
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const familyIdInputRef = useRef();
  const roleInputRef = useRef();

  function sHandler(event) {
    event.preventDefault();

    const enteredFirstname = firstnameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;
    const enteredFamilyId = familyIdInputRef.current.value;
    const enteredRole = roleInputRef.current.value;

    const editData = {
      id: theId,
      firstname: enteredFirstname,
      lastname: enteredLastname,
      familyId: enteredFamilyId,
      role: enteredRole,
    };
    props.onEditPeople(editData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={sHandler}>
        <div className={classes.control}>
          <label htmlFor="firstname">fistname</label>
          <input type="text" required id="firstname" ref={firstnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">lastname</label>
          <input type="text" required id="lastname" ref={lastnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="familyId">Family ID</label>
          <input type="number" required id="familyId" ref={familyIdInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="role">role</label>
          <input type="text" required id="role" ref={roleInputRef} />
        </div>
        <div className={classes.actions}>
          <button>edit</button>
        </div>
      </form>
    </Card>
  );
}

export default EditForm;
