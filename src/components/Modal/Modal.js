import React, { useState, useEffect } from "react";
import ModalStyle from "./style";

const Modal = ({ children, close }) => {
  return (
    <ModalStyle>
      <div className="modal-backdrop" onClick={close} />
      <div className="modal-content">{children}</div>
    </ModalStyle>
  );
};

export default Modal;
