import "../assets/styles/main.css";
import Container from "@mui/material/Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaRegFilePdf } from "react-icons/fa";
import cv from "../../public/documents/cv.pdf";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
function Main() {
  const nameRef = useRef(null);
  const dev = useRef(null);
  const description = useRef(null);
  const socialButtons = useRef(null);
  const img = useRef(null)
  const socialWrapper = useRef(null)
  useEffect(() => {
    gsap.from(nameRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from(dev.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
    });
    gsap.from(description.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(socialButtons.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(img.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(socialWrapper.current.children, {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.3
    });
  }, []);

  const [text] = useTypewriter({
    words: ["Web Developer"],
    loop: {},
  });
  return (
    <div id="main">
      <Container maxWidth="lg">
        <div className="row">
          <div className="mainLeft">
            <span ref={nameRef} className="name">
              İlqar Sofiyev
            </span>
            <p className="typedWriter" ref={dev}>
              <span className="typedText">{text}</span>
              <span style={{ color: "#86D293" }}>
                <Cursor />
              </span>
            </p>
            <p className="mainDescription" ref={description}>
              Hər klikdə həm estetiklik, həm də funksionallıq təqdim edib,
              istifadəçi təcrübəsini sənətə çevirək!
            </p>
            <div ref={socialButtons} className="contactMainWrapper">
              <a className="mainContBtn" href="#contact">
                Əlaqə saxla
              </a>
              <a className="downloadCv" href={cv} download="cv">
                CV yüklə <FaRegFilePdf />
              </a>
            </div>
            <div ref={socialWrapper} className="socialsWrapperMain">
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
          <div ref={img} className="mainRight"></div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
