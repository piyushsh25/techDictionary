import React, { useState } from "react";
import "./styles.css";

var someTechnologies = {
  HTML:
    "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  CSS:
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. C",
  JS:
    "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm.",
  React:
    "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. ",
  MongoDB:
    "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
  SQL:
    "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream"
};
var techno = Object.keys(someTechnologies);

function App() {
  const [meaning, setMeaning] = useState("");

  function techHandler(techno) {
    var meaning = someTechnologies[techno];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h3> Click to know about these tech</h3>
      <hr />
      {techno.map((techno) => {
        return (
          <span
            onClick={() => techHandler(techno)}
            style={{ fontSize: "2rem", margin: "1rem", cursor: "pointer" }}
            key={techno}
          >
            {techno}
          </span>
        );
      })}
      <h2>{meaning}</h2>
    </div>
  );
}
export default App;
