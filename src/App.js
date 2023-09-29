import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>
        {show ? "close" : "open"} Modal
      </button>
      <Modal show={show} title="modal" onClose={() => setShow(false)}>
        <h1>Learning React.js</h1>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, title, children }) => {
  const handleEscapeKey = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      onClose();
    } else {
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);
  return (
    show && (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-wrapper">
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    )
  );
};
