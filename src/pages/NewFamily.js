import { useHistory } from "react-router";

import ParentForm from "../components/family/ParentForm";

function NewFamily() {
  const history = useHistory();

  function addPeopleHandler(peopleData) {
    fetch("http://localhost:8081/parent", {
      method: "POST",
      body: JSON.stringify(peopleData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add family member</h1>
      <ParentForm onAddPeople={addPeopleHandler} />
    </section>
  );
}
export default NewFamily;
