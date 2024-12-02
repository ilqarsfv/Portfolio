import "../assets/styles/portfolio.css";
import btk from "../../public/images/btk.png"
import konturreklam from "../../public/images/konturreklam.png"
import skywash from "../../public/images/skywash.png"
import srconstruction from "../../public/images/srconstruction.png"
import amazontravel from "../../public/images/amazontravel.png"
import integro from "../../public/images/integro.png"
import Container from "@mui/material/Container";
function Portfolio() {
  return (
    <section>
      <div className="portWrapper" id="portfolio">
        <Container maxWidth="lg">
          <h2>Portfolio</h2>
          <div className="row">
            <div className="portCard">
              <div className="portCardImg">
                <img src={btk} alt="portfolio" />
              </div>
              <div className="portCardContent">
                    <h4>btk.az</h4>
                    <a href="https://btk.az/" target="_blank">Get</a>
              </div>
            </div>
            <div className="portCard">
              <div className="portCardImg">
                <img src={konturreklam} alt="portfolio" />
              </div>
              <div className="portCardContent">
                    <h4>konturreklam.az</h4>
                    <a href="https://konturreklam.az/" target="_blank">Get</a>
              </div>
            </div>
            <div className="portCard">
              <div className="portCardImg">
                <img src={skywash} alt="portfolio" />
              </div>
              <div className="portCardContent">
                    <h4>skywash.az</h4>
                    <a href="https://skywash.az/" target="_blank">Get</a>
              </div>
            </div>
            <div className="portCard">
              <div className="portCardImg">
                <img src={srconstruction} alt="portfolio" />
              </div>
              <div className="portCardContent">
                    <h4>srconstruction.az</h4>
                    <a href="https://srconstruction.az/" target="_blank">Get</a>
              </div>
            </div>
            <div className="portCard">
              <div className="portCardImg">
                <img src={amazontravel} alt="portfolio" />
              </div>
              <div className="portCardContent">
                    <h4>amazontravel.az</h4>
                    <a href="https://amazontravel.az/" target="_blank">Get</a>
              </div>
            </div>
            <div className="portCard">
              <div className="portCardImg">
                <img src={integro} alt="portfolio" />
              </div>
              <div className="portCardContent">
                    <h4>integrogroup.az</h4>
                    <a href="https://integrogroup.az/" target="_blank">Get</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Portfolio;
