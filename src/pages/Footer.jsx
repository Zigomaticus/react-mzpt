import React from "react";
import vk from "../images/vk.png";
import telegram from "../images/telegram.png";
import viber from "../images/viber.png";
import whatsapp from "../images/whatsapp.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        Есть вопросы? Звоните
        <a href="tel:+79197050096" className="footer__tel">
          ( тел. +79197050096 )
        </a>{" "}
        или пишите в любой соц сети:
      </div>
      <ul className="footer__social">
        <li>
          <a href="https://vk.com/mpartyperm" target="_blank" rel="noreferrer">
            <img src={vk} alt="vk_icon"></img>
          </a>
        </li>
        {/* <li>
            <a
              href="https://vk.com/denis_from_perm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={inst} alt="inst_icon"></img>
            </a>
          </li> */}
        <li>
          <a
            href="tg://resolve?domain=@79197050096"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="th_icon"></img>
          </a>
        </li>
        <li>
          <a
            href="viber://chat?number=%2B79197050096"
            target="_blank"
            rel="noreferrer"
          >
            <img src={viber} alt="viber_icon"></img>
          </a>
        </li>
        <li>
          <a href="https://wa.me/79197050096" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="whatsapp_icon"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
