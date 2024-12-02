import "../assets/styles/skills.css";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import Container from "@mui/material/Container";
function Skills() {
  return (
    <section>
      <div className="skills" id="skills">
        <Container maxWidth="lg">
          <h2>Texniki bacarıqlar</h2>
          <div className="row">
            <div className="techSkills frontend">
              <h4>Frontend</h4>
              <div className="allSkills">
                <div className="skillsWrapper">
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>HTML5</span>
                    </span>
                    <span>Yaxşı</span>
                  </div>
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>CSS3</span>
                    </span>
                    <span>Yaxşı</span>
                  </div>
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>Javascript</span>
                    </span>
                    <span>Yaxşı</span>
                  </div>
                </div>
                <div className="skillsWrapper">
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>Jquery</span>
                    </span>
                    <span>Yaxşı</span>
                  </div>
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>React</span>
                    </span>
                    <span>Yaxşı</span>
                  </div>
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>Git</span>
                    </span>
                    <span>Yaxşı</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="techSkills backend">
              <h4>Backend</h4>
              <div className="allSkills">
                <div className="skillsWrapper">
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>NodeJS</span>
                    </span>
                    <span>Normal</span>
                  </div>
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>ExpressJS</span>
                    </span>
                    <span>Normal</span>
                  </div>
                  <div className="skill">
                    <span>
                      <TbRosetteDiscountCheckFilled />
                      <span>MongoDb</span>
                    </span>
                    <span>Normal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Skills;
