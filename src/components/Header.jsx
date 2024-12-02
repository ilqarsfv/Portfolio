import "../assets/styles/header.css"
import Container from "@mui/material/Container";
function Header() {
  return (
    <div id="header">
      <Container maxWidth="lg">
        <nav className="container">
            <ul className="headerMenu">
                <li className="logo">İlqar</li>
                <ul>
                    <li><a href="/">Ana səhifə</a></li>
                    <li><a href="#about">Haqqımda</a></li>
                    <li><a href="#skills">Texniki bacarıqlar</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Əlaqə</a></li>
                </ul>
            </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
