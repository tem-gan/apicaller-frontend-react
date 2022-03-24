import { useState, useEffect } from "react";
import FamilyList from "../components/family/FamilyList";

function AllFamily() {
  //   const DUMMY_DATA = [
  //     {
  //       id: "1",
  //       familyId: "19",
  //       firstname: "React",
  //       lastname: "React-last",
  //       role: "hi",
  //     },
  //   ];
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPeople, setLoadedPeople] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8081/parent/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const family = [];

        for (const key in data) {
          const person = {
            id: key,
            ...data[key],
          };
          family.push(person);
        }
        setIsLoading(false);
        setLoadedPeople(family);
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
      <FamilyList items={loadedPeople} />
    </section>
  );
}

export default AllFamily;
