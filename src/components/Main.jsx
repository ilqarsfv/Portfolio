import "../assets/styles/main.css";
import Container from "@mui/material/Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaRegFilePdf } from "react-icons/fa";
import cv from "../../public/documents/cv.pdf";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Main() {
  const [text] = useTypewriter({
    words: ["Web Developer"],
    loop: {},
  });
  return (
    <div id="main">
      <Container maxWidth="lg">
        <div className="row">
          <div className="mainLeft">
            <span className="name">İlqar Sofiyev</span>
            <p className="typedWriter">
              <span className="typedText">{text}</span>
              <span style={{ color: "#86D293" }}>
                <Cursor />
              </span>
            </p>
            <p className="mainDescription">
              Hər klikdə həm estetiklik, həm də funksionallıq təqdim edib,
              istifadəçi təcrübəsini sənətə çevirək!
            </p>
            <div className="contactMainWrapper">
              <a className="mainContBtn" href="">
                Əlaqə saxla
              </a>
              <a className="downloadCv" href={cv} download="cv">
                CV yüklə <FaRegFilePdf />
              </a>
            </div>
            <div className="socialsWrapperMain">
              <a href="https://github.com/ilqarsfv" target="_blank">
                <LuGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ilqar-sofiyev-a67575172/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/ilqarsfv/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://wa.me/994508004472">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="mainRight"></div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
