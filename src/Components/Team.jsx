import React from 'react'

export const Team = (props) => {
    const { photos } = props;
    const names = ["Felipe", "Barbara", "Juan", "Maria", "Christopher", "Marcelo"];
    const job = ["Product owner","Art Diector" ,"Teach lead" ,"UX Designer","Developer","Developer" ];


    return (
      <div>
        <div className="container">
          {photos.map((photo, index) => (
            <div className="card">
              <div className="card-foto-job">
                <img src={photos[index]} alt="photo" />
                <p className="job">
                  {job[index].split("").map((char) => (
                    <span
                      className="job-char"
                      style={{ writingMode: "vertical-rl" }}
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
}

