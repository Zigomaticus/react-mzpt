import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://sun9-85.userapi.com/impf/vCacpLDfEdMhBjy_oSUH6iDqe3SU2j0RzdhWXw/9NocrGiGblw.jpg?size=1200x801&quality=96&sign=1470c78baf229b0f0fa73f0d6918d5c4&type=album",
    thumbnail:
      "https://sun9-85.userapi.com/impf/vCacpLDfEdMhBjy_oSUH6iDqe3SU2j0RzdhWXw/9NocrGiGblw.jpg?size=1200x801&quality=96&sign=1470c78baf229b0f0fa73f0d6918d5c4&type=album",
  },
  {
    original:
      "https://sun9-16.userapi.com/impf/WUKEgHEsYyiUqxbn2ZD6WcLl-SDXe0hebHR4YA/998DQSydmA0.jpg?size=1200x801&quality=96&sign=7391b2d629d9f74305f83b7bcc6b5247&type=album",
    thumbnail:
      "https://sun9-16.userapi.com/impf/WUKEgHEsYyiUqxbn2ZD6WcLl-SDXe0hebHR4YA/998DQSydmA0.jpg?size=1200x801&quality=96&sign=7391b2d629d9f74305f83b7bcc6b5247&type=album",
  },
  {
    original:
      "https://sun9-4.userapi.com/impf/vka9sVtRkVhak6ahOUT3lOYaF4-YDVTd3ac3eA/8QcZK33nu_o.jpg?size=1200x801&quality=96&sign=64e36ed800097b127075cf76b702a995&type=album",
    thumbnail:
      "https://sun9-4.userapi.com/impf/vka9sVtRkVhak6ahOUT3lOYaF4-YDVTd3ac3eA/8QcZK33nu_o.jpg?size=1200x801&quality=96&sign=64e36ed800097b127075cf76b702a995&type=album",
  },
  {
    original:
      "https://sun9-81.userapi.com/impf/I89a11KiV_-vJ-u16iRtEo7kM18SdtijfP11uA/GywnAYCOW34.jpg?size=1200x801&quality=96&sign=00f52c718bb708e5d6804c323ac9f996&type=album",
    thumbnail:
      "https://sun9-81.userapi.com/impf/I89a11KiV_-vJ-u16iRtEo7kM18SdtijfP11uA/GywnAYCOW34.jpg?size=1200x801&quality=96&sign=00f52c718bb708e5d6804c323ac9f996&type=album",
  },
  {
    original:
      "https://sun9-27.userapi.com/impf/g-zCq2ywOWlSvmBFtQH8CBL2-TJ-7IcxKJbkHA/1eCb4Yww7mw.jpg?size=1200x801&quality=96&sign=f1197a2f884388977cc1c2e1536d8df3&type=album",
    thumbnail:
      "https://sun9-27.userapi.com/impf/g-zCq2ywOWlSvmBFtQH8CBL2-TJ-7IcxKJbkHA/1eCb4Yww7mw.jpg?size=1200x801&quality=96&sign=f1197a2f884388977cc1c2e1536d8df3&type=album",
  },
  {
    original:
      "https://sun9-75.userapi.com/impf/ZWtfcW8OEsznGoI6xjTW5vapshAg-7DyXDkUyg/ilhxw5g1zIg.jpg?size=1200x801&quality=96&sign=c03f1068506e95fb8800c0d1fe4fa2f8&type=album",
    thumbnail:
      "https://sun9-75.userapi.com/impf/ZWtfcW8OEsznGoI6xjTW5vapshAg-7DyXDkUyg/ilhxw5g1zIg.jpg?size=1200x801&quality=96&sign=c03f1068506e95fb8800c0d1fe4fa2f8&type=album",
  },
  {
    original:
      "https://sun9-66.userapi.com/impf/sDva-E_p4f-l6lQBoiT0EyfSo1pCaVhbnnlFzw/3Z5Qr9DadeM.jpg?size=1200x801&quality=96&sign=5b32f42133296aab85f240553db2bf84&type=album",
    thumbnail:
      "https://sun9-66.userapi.com/impf/sDva-E_p4f-l6lQBoiT0EyfSo1pCaVhbnnlFzw/3Z5Qr9DadeM.jpg?size=1200x801&quality=96&sign=5b32f42133296aab85f240553db2bf84&type=album",
  },
  {
    original:
      "https://sun9-75.userapi.com/impf/Jo3VLVdKCr80qQcJu17J69KjujrYocKeSsmyVA/P4ZfO5rg-18.jpg?size=1200x801&quality=96&sign=992a853e8375fbf7464fb8865e7e721d&type=album",
    thumbnail:
      "https://sun9-75.userapi.com/impf/Jo3VLVdKCr80qQcJu17J69KjujrYocKeSsmyVA/P4ZfO5rg-18.jpg?size=1200x801&quality=96&sign=992a853e8375fbf7464fb8865e7e721d&type=album",
  },
  {
    original:
      "https://sun9-83.userapi.com/impf/_iNhLWWwQU7kO4onTJ-I4NbGF4lwdok1Fwh24w/fMlQJVqgdXA.jpg?size=1200x801&quality=96&sign=3fd22f5c774f44a39cbdddd0ef079295&type=album",
    thumbnail:
      "https://sun9-83.userapi.com/impf/_iNhLWWwQU7kO4onTJ-I4NbGF4lwdok1Fwh24w/fMlQJVqgdXA.jpg?size=1200x801&quality=96&sign=3fd22f5c774f44a39cbdddd0ef079295&type=album",
  },
  {
    original:
      "https://sun9-9.userapi.com/impf/-Rq_uMYCR_Xw4Tj4JbatTZZXrpHQMwdf5sVJYA/6m8rBI6paFo.jpg?size=1200x801&quality=96&sign=7a3c9e38f371b054af58a21827bfc982&type=album",
    thumbnail:
      "https://sun9-9.userapi.com/impf/-Rq_uMYCR_Xw4Tj4JbatTZZXrpHQMwdf5sVJYA/6m8rBI6paFo.jpg?size=1200x801&quality=96&sign=7a3c9e38f371b054af58a21827bfc982&type=album",
  }
];

function Example() {
  return (
    <div className="example">
      <ImageGallery items={images} />
    </div>
  );
}

export default Example;
