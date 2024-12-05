import Container from "@mui/material/Container";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "../assets/styles/qualification.css";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Qualification() {
  const [toggle, setToggle] = useState("education");
  const toggled = (section) => {
    setToggle(section);
  };

  const boxRef = useRef(null);
  useEffect(() => {
    const element = boxRef.current;
    gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section>
      <div ref={boxRef} className="qualificationWrapper">
        <Container maxWidth="lg">
          <h2>İxtisas və Təcrübə</h2>
          <h5>Mənim kiçik macəram</h5>
          <div className="fieldsTitle">
            <span
              onClick={() => toggled("education")}
              className={`education ${toggle === "education" ? "active" : ""}`}
            >
              <FaGraduationCap />
              Təhsil
            </span>
            <span> | </span>
            <span
              onClick={() => toggled("experience")}
              className={`experience ${
                toggle === "experience" ? "active" : ""
              }`}
            >
              <MdWork />
              Təcrübə
            </span>
          </div>
          <div className="qualSections">
            <div
              className={`qualContent ${
                toggle === "education" ? "active" : "hidden"
              }`}
            >
              <div className="qualData">
                <span className="dataTitle">
                  Azərbaycan Dövlət İqtisad Universiteti
                </span>
                <span className="qualField">Menecment</span>
                <span className="dataTime">2018-2021</span>
              </div>
              <span className="quaLine"></span>
              <div className="qualData">
                <span className="dataTitle">Bakı Mühəndislik Universiteti</span>
                <span className="qualField">
                  Dövlət orqanlarının idarəedilməsi
                </span>
                <span className="dataTime">2021-2023</span>
              </div>
              <span className="quaLine"></span>
              <div className="qualData">
                <span className="dataTitle">Div Academy</span>
                <span className="qualField">Frontend developer</span>
                <span className="dataTime">2022</span>
              </div>
            </div>
            <div
              className={`qualContent ${
                toggle === "experience" ? "active" : "hidden"
              }`}
            >
              <div className="qualData">
                <span className="dataTitle">Azərpoçt</span>
                <span className="qualField">Menecer</span>
                <span className="dataTime">2021</span>
              </div>
              <div className="qualData">
                <span className="dataTitle">Div Academy</span>
                <span className="qualField">Mentor</span>
                <span className="dataTime">2022</span>
              </div>
              <span className="quaLine"></span>
              <div className="qualData">
                <span className="dataTitle">Okmedia</span>
                <span className="qualField">Frontend developer</span>
                <span className="dataTime">2022-2023</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Qualification;
