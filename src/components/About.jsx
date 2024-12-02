import "../assets/styles/about.css";
import Container from "@mui/material/Container";
import { FiAward } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
function About() {
  return (
    <section>
      <div className="aboutSection" id="about">
        <Container maxWidth="lg">
          <h2>Haqqımda</h2>
          <div className="row">
            <div className="aboutLeft">
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
