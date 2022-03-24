import { useState, useEffect } from "react";
import EditList from "../components/family/EditList";

function EditFamily() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPeople, setLoadedPeople] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8081/parent/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const people = [];

        for (const key in data) {
          const person = {
            id: key,
            ...data[key],
          };
          people.push(person);
        }
        setIsLoading(false);
        setLoadedPeople(people);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All People</h1>
      <EditList items={loadedPeople} />
    </section>
  );
}
export default EditFamily;
