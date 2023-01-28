import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Team = (props) => {
  const { photos } = props;
  const names = [
    "Felipe",
    "Barbara",
    "Juan",
    "Maria",
    "Christopher",
    "Marcelo",
  ];
  const job = [
    "Product owner",
    "Art Diector",
    "Teach lead",
    "UX Designer",
    "Developer",
    "Developer",
  ];

  return (
    <div>
      <div className="container">
        {photos.map((photo, index) => (
          <div className="card" key={uuidv4()}>
            <div className="card-foto-job">
              <img src={photo} alt="photo" />
              <p className="job">
                {job[index].split("").map((char, charIndex) => (
                  <span
                    className="job-char"
                    style={{ writingMode: "vertical-rl" }}
                    key={`${index}-${charIndex}`}
                  >
                    {char}
                  </span>
                ))}
              </p>
            </div>
            <p className="name">{names[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
