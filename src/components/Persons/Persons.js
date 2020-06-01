import React from "react";
import ErrorBoundary from "../../ErrorBoundery/ErrorBoundary";
import Person from "./Person/Person";

const Persons = (props) => {
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
};
export default Persons;