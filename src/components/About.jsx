import "../assets/styles/about.css";
import Container from "@mui/material/Container";
import { FiAward } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function About() {
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
      <div ref={boxRef} className="aboutSection" id="about">
        <Container maxWidth="lg">
          <h2>Haqqımda</h2>
          <div className="row">
            <div className="aboutLeft">
              <h3>Mən, İlqar Sofiyev</h3>
              <p>
                Frontend developer olaraq, istifadəçilərin rahatlığına əsaslanan
                interfeys (UI/UX) dizaynı üzərində işləyirəm. İllərin
                təcrübəsinə sahibəm və bir çox müştərim həyata keçirdiyim
                layihələrdən razıdır.
              </p>
            </div>
            <div className="aboutRight">
              <div className="row">
                <div className="aboutCard">
                  <FiAward />
                  <p>Təcrübə</p>
                  <span>2+ il</span>
                </div>
                <div className="aboutCard">
                  <FiMonitor />
                  <p>Veb saytlar</p>
                  <span>13+ layihə</span>
                </div>
                <div className="aboutCard">
                  <BiSupport />
                  <p>Dəstək</p>
                  <span>20+ layihə</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default About;
