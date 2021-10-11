import React from "react";
import remove from "../images/remove.svg";
import message from "../message.php";

function Form({ isVisibleForm, setIsVisibleForm }) {
  return (
    <div className={isVisibleForm ? "overlay" : ""}>
      <form className="form" name="form" method="post" action={message}>
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
          required
          minlength="2"
          maxlength="60"
          className="input"
          name="name"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          required
          minlength="5"
          maxlength="20"
          className="input"
          name="tel"
          type="phone"
          placeholder="Ваш номер телефона"
        />
        <input
          className="button"
          placeholder="Отправить"
          type="submit"
          name="name"
        />
      </form>
    </div>
  );
}

export default Form;
