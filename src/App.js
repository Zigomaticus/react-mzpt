import "./app.scss";
import logo from "./images/Mzgp.png";
import vk from "./images/vk.png";
import inst from "./images/inst.png";
import telegram from "./images/telegram.png";
import viber from "./images/viber.png";
import whatsapp from "./images/whatsapp.png";
import phone from "./images/phone.svg";
import remove from "./images/remove.svg";

import Home from "./pages/Home";
import Example from "./pages/Example";
import Questions from "./pages/Questions";
import Play from "./pages/Play";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";
// import moduleName from "./message.php";

function App() {
  const [isVisibleForm, setIsVisibleForm] = React.useState(true);

  const onVisibleForm = () => {
    setIsVisibleForm(!isVisibleForm);
  };

  return (
    <div className="container">
      <div className="header ">
        <div className="header__logo">
          <Link to="/react-mzpt">
            <img src={logo} width="160" height="140" alt="logo" />
          </Link>
        </div>
        <div className="header__text">
          Динамичная интеллектуальная игра для 5-11 классов прямо в школе
        </div>
      </div>

      <div className="nav">
        <Link to="/react-mzpt">Что такое мозгопати</Link>
        <Link to="/questions">Примеры заданий</Link>
        <Link to="/play">Как поиграть</Link>
        <Link to="/example">Галерея</Link>
      </div>

      <Switch>
        <Route exact path="/react-mzpt" component={Home} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/questions" component={Questions} />
      </Switch>

      <div className={isVisibleForm ? "overlay" : ""}>
        <form className="form" name="form" method="post" action="message.php">
          <img
            onClick={() => setIsVisibleForm(true)}
            src={remove}
            width={28}
            height={28}
            alt="remove"
          />
          <p className="p1">Есть вопросы по мероприятию?</p>
          <p className="p2">
            Напишите свое имя и номер телефона. Мы свяжемся с вами и уточним
            детали
          </p>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className="input"
            name="tel"
            type="phone"
            placeholder="Ваш номер телефона"
          />
          <input className="button" placeholder="Отправить" type="submit" />
        </form>
      </div>
      <div onClick={onVisibleForm} type="button" className="callback-bt">
        <div className="text-call">
          <i className="fa fa-phone">
            <img src={phone} width={28} height={28} alt="phone" />
          </i>
          <span>Заказать звонок</span>
        </div>
      </div>

      <div className="footer">
        <div className="footer__text">
          Есть вопросы? Звоните
          <a href="tel:+79124977157" className="footer__tel">
            ( тел. +79124977157 )
          </a>{" "}
          или пишите в любой соц сети:
        </div>
        <ul className="footer__social">
          <li>
            <a
              href="https://vk.com/denis_from_perm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={vk} alt="vk_icon"></img>
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/denis_from_perm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={inst} alt="inst_icon"></img>
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/denis_from_perm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="th_icon"></img>
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/denis_from_perm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={viber} alt="viber_icon"></img>
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/denis_from_perm"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp_icon"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
