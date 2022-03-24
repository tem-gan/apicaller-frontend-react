import { useRef } from "react";
import classes from "./EditForm.module.css";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

function FindForm(props) {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();

  const enteredFirstname = firstnameInputRef.current.value;
  const enteredLastname = lastnameInputRef.current.value;

  const editData = {
    firstname: enteredFirstname,
    lastname: enteredLastname,
  };

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="firstname">fistname</label>
          <input type="text" required id="firstname" ref={firstnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">lastname</label>
          <input type="text" required id="lastname" ref={lastnameInputRef} />
        </div>

        <div className={classes.actions}>
          <Link to={"/find/"}>
            <button type="button">find!</button>
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default FindForm;
