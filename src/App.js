import "./styles.css";
import React, { useState } from "react";
const list = {
  novel: [
    {
      name: "JENNIFER EGAN ",
      subjects: "The Top Twenty"
    },
    {
      name: "DAVID MITCHELL ",
      subjects: "TTHE THOUSAND AUTUMNS OF JACOB DE ZOET  "
    },
    {
      name: "DENIS JOHNSON ",
      subjects: "DENIS JOHNSON "
    }
  ],
  tech: [
    {
      name: " Mar Hicks",
      subjects: "Programmed Inequality  "
    },
    {
      name: "Michael J Lewis ",
      subjects: " The New New Thing: A Silicon Valley Story"
    },
    {
      name: "  T.R. Ried",
      subjects: "The Chip "
    }
  ],
  thriller: [
    {
      name: "Lucy Foley ",
      subjects: "The Guest List  "
    },
    {
      name: "Rachel Caine",
      subjects: "Stillhouse Lake  "
    },
    {
      name: "Liane Moriarty",
      subjects: "Nine Perfect Strangers  "
    }
  ]
};

export default function App() {
  const [name, functionname] = useState("novel");
  function toshow(grat) {
    functionname(grat);
  }

  return (
    <div className="App">
      <h1> 📚 book recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        Select the genres to see my recommendations
      </p>
      <div>
        {Object.keys(list).map((grat) => (
          <button
            onClick={() => toshow(grat)}
            style={{
              height: "40px",
              width: "200px",
              margin: "40px"
            }}
          >
            {grat}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0.5rem" }}>
          {list[name].map((book) => (
            <li
              key={book.name}
              style={{
                padding: "0.5rem 1rem",
                margin: "0.5rem 1rem",
                borderRadius: "0.5rem",
                listStyle: "none",
                width: "70%"
              }}
            >
              <div style={{ fontSize: "larger" }}>{book.name}</div>
              <div style={{ fontSize: "smaller" }}>{book.subjects}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
