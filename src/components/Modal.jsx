import "./Modal.scss";
import { projects } from "./projectData";
import LightsOut from "../images/lights-out.png";

/**
 * @params {bool} projectId - set modal to visible if present
 * @params {function} openModal
 */
export default function Modal({ projectId, openModal }) {
  const closeModal = () => {
    openModal("");
  };

  // don't render modal if no project ID is present
  if (!projectId) return null;

  const { name, imgSrc, description, tags } = projects[projectId];

  return (
    <div className="modal-container">
      {/* Need container div for draggable */}
      <div className="modal">
        {/* Draggable handle */}
        <div className="modal-header">
          <div className="close-button" onClick={closeModal}></div>
        </div>
        <div className="modal-content">
          <img src={imgSrc} className="modal-headline-image" />
          <div className="modal-details">
            <h3>{name}</h3>
            <div>Uh tags here? #tech</div>
            <p>Some GOOD lorem ipsum</p>
          </div>
        </div>
        <div className="modal-project-images">Images go here</div>
      </div>
    </div>
  );
}
