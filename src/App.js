import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");

  const newOtherItems = people.filter(
    (person) => person.profession !== "Chemist"
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {newOtherItems.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
