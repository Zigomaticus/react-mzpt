import React from "react";

function Questions() {
  return (
    <div className="questions">
      <div className="questions__text-1">
        Правила МОЗГОПАТИ kids
      </div>
      <div className="questions__promo">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/k5N4pSFwX7g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="questions__text">
        Примеры заданий из МОЗГОПАТИ
        <br />
        (Наведите на вопросы что увидеть ответы)
      </div>
      <table className="table">
        <tr>
          <td>Юный техник</td>
          <td className="question-11">10</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Красота в культуре</td>
          <td>10</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Вершина спорта</td>
          <td>10</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>50</td>
        </tr>
      </table>
    </div>
  );
}

export default Questions;
