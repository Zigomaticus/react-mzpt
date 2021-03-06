import React from "react";

function Home() {
  return (
    <div className="main">
      <div className="main__promo">
        <iframe
          width="760"
          height="435"
          src="https://www.youtube.com/embed/oNzZwVjTVuo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
      <div className="main__title">
        <b>МОЗГОПАТИ</b> это сочетание таких игр как "Брейнринг", "Своя игра" и
        "Что? Где? Когда?"
      </div>
      <div className="main__text">
        Мы стремимся создать идеальное внеурочное мероприятие, поэтому делаем
        Мозгопати удобной для учителей-организаторов, а также интересной для
        самих учеников-участников
      </div>
      <div className="main__for">
        <div className="main__for-1">ДЛЯ ОРГАНИЗАТОРОВ:</div>
        <div className="main__for-1">ДЛЯ УЧАСТНИКОВ:</div>
      </div>
      <div className="main__ul">
        <ul className="main__ul-1">
          <li>
            <b>Длительность 60-70 мин</b>
            <br />2 раунда по 15 мин, финал 25 мин
          </li>
          <li>
            <b>Можно провести игру прямо в классе</b>
            <br />
            Не нужно организовывать трансфер детей до удаленной площадки. Не
            нужно готовиться к игре заранее
          </li>
          <li>
            <b>Подготовка класса к игре не более 30 минут</b>
            <br />
            Игру можно провести прямо после урока, пока дети не успели
            разбежаться. Все нужное оборудование мы привозим с собой.
          </li>
          <li>
            <b>Фиксированная и понятная цена</b>
            <br />
            Оплата игры за участника, количество участников от 18 до 50 человек
          </li>
        </ul>
        <ul className="main__ul-1">
          <li>
            <b>Команды от 5 человек по интересам</b>
            <br />
            Игроки сами выбирают себе команды или мы проводим жеребьевку
          </li>
          <li>
            <b>Универсальная сложность</b>
            <br />
            Акцент вопросов на скорость мышления, а не на сложность, что
            помогает поддерживать интерес к игре. Также вместе с детьми могут
            играть родители
          </li>
          <li>
            <b>Технические новинки</b>
            <br />
            Позволяют вырабатывать новые стратегии поведения внутри коллектива
            для достижения общей цели
          </li>
          <li>
            <b>Состязательность в реальном времени</b>
            <br />
            Игроки видят счет онлайн, что позволяет сохранять мотивацию к победе
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
