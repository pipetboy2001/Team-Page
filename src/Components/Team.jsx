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
              <img src={photos[index]} alt="photo" />
              <p>{names[index]}</p>
              <p>{job[index]}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

