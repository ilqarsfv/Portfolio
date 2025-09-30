import "../assets/styles/portfolio.css";
import btk from "../../public/images/btk.png";
import konturreklam from "../../public/images/konturreklam.png";
import skywash from "../../public/images/skywash.png";
import srconstruction from "../../public/images/srconstruction.png";
import amazontravel from "../../public/images/amazontravel.png";
import integro from "../../public/images/integro.png";
import dayun from "../../public/images/dayun.png";
import silo from "../../public/images/silo.png";
import korex from "../../public/images/korex.png";
import neo from "../../public/images/neo.png";
import autopodzakaz from "../../public/images/autopodzakaz.png";
import connect from "../../public/images/connect.png";
import tekeralemi from "../../public/images/tekeralemi.png";
import Container from "@mui/material/Container";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Portfolio() {
  const boxRef = useRef(null);
  useEffect(() => {
    const elements = Array.from(boxRef.current.children);
  
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%", 
            end: "top 80%",
            scrub: false,
          },
        }
      );
    });
  }, []);
  
  return (
    <section>
      <div className="portWrapper" id="portfolio">
        <Container maxWidth="lg">
          <h2>Portfolio</h2>
          <div ref={boxRef} className="row">
            <a href="https://btk.az/" target="_blank" className="portCard">
              <div className="portCardImg">
                <img src={btk} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>btk.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://konturreklam.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={konturreklam} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>konturreklam.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a href="https://skywash.az/" target="_blank" className="portCard">
              <div className="portCardImg">
                <img src={skywash} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>skywash.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://srconstruction.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={srconstruction} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>srconstruction.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://amazontravel.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={amazontravel} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>amazontravel.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://integrogroup.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={integro} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>integrogroup.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://dayun.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={dayun} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>dayun.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://siloconstruction.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={silo} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>siloconstruction.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://korexrus.ru/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={korex} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>korexrus.ru</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://neo-rus.ru/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={neo} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>neo-rus.ru</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://autopodzakaz.com/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={autopodzakaz} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>autopodzakaz.com</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://connect.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={connect} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>connect.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
            <a
              href="https://tekeralemi.az/"
              target="_blank"
              className="portCard"
            >
              <div className="portCardImg">
                <img src={tekeralemi} alt="portfolio" />
              </div>
              <div className="portCardContent">
                <h4>tekeralemi.az</h4>
                <span>Daha ətraflı</span>
              </div>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Portfolio;
