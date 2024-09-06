import "./Modal.scss";
import { useState } from "react";
import LightsOut from "../images/lights-out.png";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="modal-container"
      style={{
        visibility: open ? "visible" : "hidden",
      }}
    >
      {/* Need container div for draggable */}
      <div className="modal">
        {/* Draggable handle */}
        <div className="modal-header">
          <div className="close-button"></div>
        </div>
        <div className="modal-content">
          <img src={LightsOut} className="modal-headline-image" />
          <div className="modal-details">
            <h3>Project Name</h3>
            <div>Uh tags here? #tech</div>
            <p>Some GOOD lorem ipsum</p>
          </div>
        </div>
        <div className="modal-project-images">Images go here</div>
      </div>
    </div>
  );
}
