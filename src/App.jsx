import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Snow from "./components/Snow";
function App() {
  return (
    <>
      <Snow/>
      <Header />
      <Main />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
      <Hamburger/>
    </>
  );
}

export default App;
