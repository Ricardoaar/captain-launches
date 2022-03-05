import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <React.Fragment>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-card">
            <div className="modal-body">{children}</div>
            <button className="btn select-none bg-primary " onClick={onClose}>
              X
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
