import "./app.scss";
import logo from "./images/Mzgp.png";
// import inst from "./images/inst.png";

import Home from "./pages/Home";
import Example from "./pages/Example";
import Questions from "./pages/Questions";
import Play from "./pages/Play";
import Footer from "./pages/Footer";
import Form from "./pages/Form";

import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import CallButton from "./pages/CallButton";
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

      <Form isVisibleForm={isVisibleForm} setIsVisibleForm={setIsVisibleForm} />
      <CallButton onVisibleForm={onVisibleForm} />

      <Footer />
    </div>
  );
}

export default App;
