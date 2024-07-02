import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import background from "../../assets/images/background.jpg";
import background2 from "../../assets/images/card.jpg";
import card from "../../assets/images/card.jpg";
import "./index.css";
import doctors from '../../JsonData/doctorsData.json';

const Card1 = () => {
  const [slide1, setSlide1] = useState(1);

  const Tv1 = [doctors[0].TV1];
  
 /*  const Tv2 = [doctors[1].TV2];
  const Tv3 = [doctors[2].TV3];
  const Tv4 = [doctors[3].TV4];
  const Tv5 = [doctors[4].TV5];
  const Tv6 = [doctors[5].TV6];
  const Tv7 = [doctors[6].TV7];
  const Tv8 = [doctors[7].TV8];
  const Tv9 = [doctors[8].TV9]; */

 

  const Slide1Viewer = Tv1[0].filter(data => slide1===data.Slide);
  console.log(Slide1Viewer)
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "1080px",
        width: "600px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "auto",
      }}
    >
      <div>
        <div style={{ marginTop: "10px", color: "white" }}>
          Doctors Directory
        </div>
        {Slide1Viewer.map((details) => {
          return (
            <div className="container" key={details.DoctorName}>
              <div className="flex">
                <div>
                  <img
                    src={card}
                    alt='Cover'
                    style={{
                      height: "250px",
                      width: "250px",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h5>{details.DoctorName} {details.Qualification}</h5>
                  <p>{details.Designation}</p>
                  <h5>{details.Department}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card1;
