import "./app.scss";
import logo from "./images/Mzgp.png"
import vk from "./images/vk.png";
import inst from "./images/inst.png";
import telegram from "./images/telegram.png";
import viber from "./images/viber.png";
import whatsapp from "./images/whatsapp.png";

import Home from "./pages/Home";
import Example from "./pages/Example";
import Questions from "./pages/Questions";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="container">
      <div className="header ">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} width="160" height="140" alt="logo" />
          </Link>
        </div>
        <div className="header__text">
          Динамичная интеллектуальная игра для 5-11 классов прямо в школе
        </div>
      </div>

      <div className="nav">
        <Link to="/">Что такое мозгопати</Link>
        <Link to="/questions">Примеры заданий</Link>
        <Link to="/123">Как поиграть</Link>
        <Link to="/example">Галерея</Link>
        <Link to="/123">Регистрация</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/questions" component={Questions} />
      </Switch>

      <div className="footer">
        <div className="footer__text">
          Есть вопросы? Звоните
          <a href="tel:+79124977157" className="footer__tel">
            ( тел. +79124977157 )
          </a>{" "}
          или пишите в любой соц сети:
        </div>
        <div className="footer__social">
          <a
            href="https://vk.com/denis_from_perm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vk} alt="vk_icon"></img>
          </a>

          <img src={inst} alt="inst_icon"></img>
          <img src={telegram} alt="telegram_icon"></img>
          <img src={viber} alt="viber_icon"></img>
          <img src={whatsapp} alt="whatsapp_icon"></img>
        </div>
      </div>
    </div>
  );
}

export default App;