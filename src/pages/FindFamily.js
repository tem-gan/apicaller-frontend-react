import { useHistory } from "react-router";
import FindForm from "../components/family/FindForm";
function FindFamily() {
  const history = useHistory();

  function findPeopleHandler(peopleData) {
    fetch("http://localhost:8081/parent/find", {
      method: "GET",
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
      <FindForm />
    </section>
  );
}
export default FindFamily;
