import React from "react";

function Questions() {

  return (
    <div className="questions">
      <div className="questions__text-1">Правила МОЗГОПАТИ kids</div>
      <div className="questions__promo">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/k5N4pSFwX7g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </div>
      <div className="questions__text">
        Примеры заданий из МОЗГОПАТИ
        <br />
        (Наведите на вопросы что увидеть примеры заданий)
      </div>
      <table className="table">
        <tr>
          <td className="table__none">Юный техник</td>
          <td>10</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>50</td>
        </tr>
        <tr>
          <td className="table__none">Красота в культуре</td>
          <td>10</td>
          <td>20</td>
          <td>30</td>
          <td>40</td>
          <td>50</td>
        </tr>
        <tr>
          <td className="table__none">Вершина спорта</td>
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
