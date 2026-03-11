import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import React from "react";

export const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((currentData, index) => {
          const { icon, title, details } = currentData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{iconMap[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2026, All Right Reserved
                <NavLink
                  to="https://gameofthrones.fandom.com/wiki/Wiki_of_Westeros"
                  target="_blank">
                  GOT
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/gameofthrones/"
                    target="_blank">
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://awoiaf.westeros.org/index.php/Tywin_Lannister"
                    target="_blank">
                    Wiki
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
