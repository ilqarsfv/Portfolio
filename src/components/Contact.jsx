import Container from "@mui/material/Container";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import sentImg from "../../public/images/sent.png";
import emailjs from "emailjs-com";
import "../assets/styles/contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5axdpuv",
        "template_2yl7vtd",
        e.target,
        "zMdfP7O_r9299KdLs"
      )
      .then(
        () => {
          alert("Mesajınız uğurla gönderildi!");
        },
        (error) => {
          console.log(error.text);
          alert("Göndərilmə zamanı xəta baş verdi!");
        }
      );
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
    <>
      <section>
        <div ref={boxRef} id="contact">
          <Container maxWidth="lg">
            <h2>Əlaqə</h2>
            <div className="row">
              <div className="contactsWrapper">
                <a
                  href="mailto:ilqar.sofiyev.95@gmail.com"
                  className="contactCard"
                >
                  <p className="contactIcon">
                    <IoIosMail />
                  </p>
                  <p className="contactTitle">Email</p>
                  <p className="contactWith">ilqar.sofiyev.95@gmail.com</p>
                  <p className="getContact">
                    Mənə yaz <MdOutlineArrowRightAlt />
                  </p>
                </a>
                <a href="https://wa.me/+994508004472" className="contactCard">
                  <p className="contactIcon">
                    <IoLogoWhatsapp />
                  </p>
                  <p className="contactTitle">Whatsapp</p>
                  <p className="contactWith">+994508004472</p>
                  <p className="getContact">
                    Mənə yaz <MdOutlineArrowRightAlt />
                  </p>
                </a>
              </div>
              <div className="contactForm">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="to_name" placeholder="Ad, Soyad" />
                  <input type="mail" name="from_name" placeholder="Mail" />
                  <textarea name="message" placeholder="Qeydləriniz"></textarea>
                  <button type="submit">
                    Göndər <img src={sentImg} alt="sentimg" />
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Contact;
