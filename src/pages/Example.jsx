import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "https://sun9-80.userapi.com/impf/FTCoHd4ycqGESdnM1XsKUx4EYfRwUGaO_DhHJw/xEXLZQWfjFk.jpg?size=1200x801&quality=96&sign=98c56841fb8648f0da972bed86c70225&type=album",
    thumbnail:
      "https://sun9-80.userapi.com/impf/FTCoHd4ycqGESdnM1XsKUx4EYfRwUGaO_DhHJw/xEXLZQWfjFk.jpg?size=1200x801&quality=96&sign=98c56841fb8648f0da972bed86c70225&type=album",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "https://sun9-39.userapi.com/impf/4rP-GcBY_EkT9DOt6UTv3v-jDYYLgVyBwGCkCg/bqZrYFk2iKg.jpg?size=1200x801&quality=96&sign=e9132096e1220b4e3f1c9725db9c6e11&type=album",
    thumbnail:
      "https://sun9-39.userapi.com/impf/4rP-GcBY_EkT9DOt6UTv3v-jDYYLgVyBwGCkCg/bqZrYFk2iKg.jpg?size=1200x801&quality=96&sign=e9132096e1220b4e3f1c9725db9c6e11&type=album",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Example() {
  return (
    <div className="example">
      <ImageGallery items={images} />;
    </div>
  );
}

export default Example;
