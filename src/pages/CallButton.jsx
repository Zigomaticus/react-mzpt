import React from "react";
import phone from "../images/phone.svg";

function CallButton({onVisibleForm}) {
  return (
    <div onClick={onVisibleForm} type="button" className="callback-bt">
      <div className="text-call">
        <i className="fa fa-phone">
          <img src={phone} width={28} height={28} alt="phone" />
        </i>
        <span>Заказать звонок</span>
      </div>
    </div>
  );
}

export default CallButton;
