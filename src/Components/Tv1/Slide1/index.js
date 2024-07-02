/* import React, { useState } from "react";
import background from "../../../assets/images/background.jpg";
import card from "../../../assets/images/card.jpg";
import "../index.css";
import doctors from "../../../JsonData/doctorsData.json";

const TV1Slide1 = () => {
  const [slide1, setSlide1] = useState(1);

  const Tv1 = [doctors[0].TV1];
  const Tv2 = [doctors[1].TV2];
  const Tv3 = [doctors[2].TV3];
  const Tv4 = [doctors[3].TV4];
  const Tv5 = [doctors[4].TV5];
  const Tv6 = [doctors[5].TV6];
  const Tv7 = [doctors[6].TV7];
  const Tv8 = [doctors[7].TV8];
  const Tv9 = [doctors[8].TV9];

  const Slide1Viewer = Tv1[0].filter((data) => slide1 === data.Slide);
  console.log(Slide1Viewer);
  // if (document.documentElement.requestFullscreen) {
  //   document.documentElement.requestFullscreen();
  // } else if (document.documentElement.mozRequestFullScreen) {
  //   document.documentElement.mozRequestFullScreen();
  // } else if (document.documentElement.webkitRequestFullscreen) {
  //   document.documentElement.webkitRequestFullscreen();
  // } else if (document.documentElement.msRequestFullscreen) {
  //   document.documentElement.msRequestFullscreen();
  // }

  return (
    <div className="rotate">
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "1080px",
          width: "600px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
         
        }}
      >
        <div className="header">{Slide1Viewer[0].Department}</div>
        {Slide1Viewer.map((details) => {
          return (
            <div className="container" key={details.DoctorName}>
              <div className="flex">
                <div>
                  <img src={card} alt="Cover" className="doctors-image" />
                </div>
                <div>
                  <div className="doctor-name">
                    <span>{details.DoctorName}</span>
                  </div>
                  <div className="content-style">
                    <div className="doctor-qualification">
                      <span>{details.Qualification}</span>
                    </div>
                    <div className="doctor-designation">
                      <span>{details.Designation}</span>
                    </div>
                    <div className="doctor-subdept">
                      <span>{details.SubDepartment}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TV1Slide1;
 */


import React, { useState, useEffect } from "react";
import axios from 'axios';
/* import background from "../../../assets/images/background.jpg"; */
import "../index.css";
import "../../../../src/assets/styles/style.css"; // Ensure this path is correct

const TV1Slide1 = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const chunkSize = 4;
  const imageBasePath = process.env.PUBLIC_URL + "/images/"; // Using PUBLIC_URL to access public directory

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.15.3/NewHIS/api/his/Get_Doctor_TV?TvTag=tv1');
        console.log('API Response:', response.data);
        setDoctors(response.data || []); // Assuming the response data is an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChunkIndex(prevIndex => (prevIndex + 1) % Math.ceil(doctors.length / chunkSize));
    }, 4000); // Change the interval time as needed (4000ms = 4 seconds)

    return () => clearInterval(interval);
  }, [doctors]); // Re-run the effect if the doctors array changes

  // Function to get the current chunk of doctors
  const getCurrentChunk = () => {
    const start = currentChunkIndex * chunkSize;
    return doctors.slice(start, start + chunkSize);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const currentDoctors = getCurrentChunk();

  
return (
  <div>
    <div className="hdrdivider" data-events="auto" data-display="block" style={{ zIndex: 1 }}></div>
    <h1 className="head1">
      INSTITUTE FOR LIVER DISEASE AND TRANSPLANTATION
    </h1>
    <div className="rotate">
      <div
        style={{
          height: "1080px",
          width: "600px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "60px",
          position: "relative"
        }}
      >
        {/* Map over the current chunk of doctors */}
        {currentDoctors.map((details, idx) => (
          <div className="container drprofileBg" key={`${currentChunkIndex}-${idx}`}>
            <div className="flex">
              <div>
                <img
                  src={`${imageBasePath}${details.doc_Img}`}
                  alt={details.doctorName}
                  className="doctors-image"
                />
              </div>

              <div className="content-style">
                <div className="doctor-name">
                  <span>{details.doctorName}</span>
                </div>
                <div className="content-style">
                  <div className="doctor-qualification">
                    <span>{details.qualification}</span>
                  </div>
                  <div className="doctor-designation">
                    <span>{details.designation}</span>
                  </div>
                  <div className="doctor-subdept">
                    <span>{details.subDepartment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default TV1Slide1;










