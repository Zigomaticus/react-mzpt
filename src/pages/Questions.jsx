import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://sun9-45.userapi.com/impg/ohIqEFupZcuWMi8b42IAXmKCsJVAuYo2KgkXsA/VG38v8eeBms.jpg?size=900x514&quality=95&sign=2f1cfa5ca4326958a1cc0c47d1124193&type=album",
    thumbnail: "https://sun9-45.userapi.com/impg/ohIqEFupZcuWMi8b42IAXmKCsJVAuYo2KgkXsA/VG38v8eeBms.jpg?size=900x514&quality=95&sign=2f1cfa5ca4326958a1cc0c47d1124193&type=album",
  },
  {
    original: "https://sun9-82.userapi.com/impg/6tWSXrxV80bYdtTAWdoVsYYcRUKPHfLUIjU3rA/26zJ6auSRQg.jpg?size=900x514&quality=95&sign=9f1963f7ca06aae84294e28a05cafcdc&type=album",
    thumbnail: "https://sun9-82.userapi.com/impg/6tWSXrxV80bYdtTAWdoVsYYcRUKPHfLUIjU3rA/26zJ6auSRQg.jpg?size=900x514&quality=95&sign=9f1963f7ca06aae84294e28a05cafcdc&type=album",
  },
  {
    original: "https://sun9-38.userapi.com/impg/qvyGsACluhf9QvRP2TG5ToYHMl9wawC1n9RZYg/jn2GugtWxng.jpg?size=900x514&quality=95&sign=4f70d9d30cb9f34d57f62eae8b5c9860&type=album",
    thumbnail: "https://sun9-38.userapi.com/impg/qvyGsACluhf9QvRP2TG5ToYHMl9wawC1n9RZYg/jn2GugtWxng.jpg?size=900x514&quality=95&sign=4f70d9d30cb9f34d57f62eae8b5c9860&type=album",
  },
  {
    original: "https://sun9-45.userapi.com/impg/EfNz7af4hQch4_s9KCzF3p57sgEzqQuNJEohHA/HGfzez3COYs.jpg?size=900x514&quality=95&sign=bb91ffc17b3e80cb506490e6e8335ab4&type=album",
    thumbnail: "https://sun9-45.userapi.com/impg/EfNz7af4hQch4_s9KCzF3p57sgEzqQuNJEohHA/HGfzez3COYs.jpg?size=900x514&quality=95&sign=bb91ffc17b3e80cb506490e6e8335ab4&type=album",
  },
  {
    original: "https://sun9-85.userapi.com/impg/vW9yig8b1jhuBS-UQMqMmw6kx0MSAqBK73DvEQ/sPYjsALSXpc.jpg?size=900x512&quality=95&sign=2862422e74c2b2f4e5f95b17a6853869&type=album",
    thumbnail: "https://sun9-85.userapi.com/impg/vW9yig8b1jhuBS-UQMqMmw6kx0MSAqBK73DvEQ/sPYjsALSXpc.jpg?size=900x512&quality=95&sign=2862422e74c2b2f4e5f95b17a6853869&type=album",
  },
  {
    original: "https://sun9-87.userapi.com/impg/992dzkMSGu2NXOdvbo4snH3CajHjxROj-PU3LA/JHHCKshtX2g.jpg?size=900x512&quality=95&sign=8cf6c90b9ba0fa1f221c30e499840279&type=album",
    thumbnail: "https://sun9-87.userapi.com/impg/992dzkMSGu2NXOdvbo4snH3CajHjxROj-PU3LA/JHHCKshtX2g.jpg?size=900x512&quality=95&sign=8cf6c90b9ba0fa1f221c30e499840279&type=album",
  },
  {
    original: "https://sun9-78.userapi.com/impg/ohbBMxm9mIGNTRX_N2BNAnk5bTexuEYnznf3Hg/E3lVuAwuvqg.jpg?size=900x512&quality=95&sign=27ed7dc1e4ef85fe215c39eb67bec68e&type=album",
    thumbnail: "https://sun9-78.userapi.com/impg/ohbBMxm9mIGNTRX_N2BNAnk5bTexuEYnznf3Hg/E3lVuAwuvqg.jpg?size=900x512&quality=95&sign=27ed7dc1e4ef85fe215c39eb67bec68e&type=album",
  },
  {
    original: "https://sun9-17.userapi.com/impg/dfzve8mhLDqxp2l6DdDUlEn6cxhP_9kK4S_Xig/RnCiBLSabWQ.jpg?size=900x512&quality=95&sign=1553aa1807886501247df3aeb13617ac&type=album",
    thumbnail: "https://sun9-17.userapi.com/impg/dfzve8mhLDqxp2l6DdDUlEn6cxhP_9kK4S_Xig/RnCiBLSabWQ.jpg?size=900x512&quality=95&sign=1553aa1807886501247df3aeb13617ac&type=album",
  }
];

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
        (листайте слайды чтобы увидеть вопросы и ответы)
      </div>

      <div className="example">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Questions;
