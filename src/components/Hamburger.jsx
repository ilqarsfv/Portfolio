import "../assets/styles/hamb.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonSharp } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { FiMonitor } from "react-icons/fi";
import { VscSend } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowHiddenMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div>
      <div id="hamb" onClick={() => handleShowHiddenMenu()}>
        <RxHamburgerMenu />
      </div>
      <ul className={`mobMenu ${showMenu ? "active" : ""}`}>
        <li>
          <a href="/">
            <FaHome />
            <span>Ana səhifə</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <IoPersonSharp />
            <span>Haqqımda</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <SlNotebook />
            <span>Texniki bacarıqlar</span>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FiMonitor />
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <VscSend />
            <span>Əlaqə</span>
          </a>
        </li>
        <span className="closeHamb" onClick={() => handleShowHiddenMenu()}>
          <GrFormClose />
        </span>
      </ul>
    </div>
  );
}

export default Hamburger;
