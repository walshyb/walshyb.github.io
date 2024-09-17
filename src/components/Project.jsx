import "./Project.scss";

/**
 * @params {string} imgSrc- source of image
 * @params {string} name - name of project
 * @params {string} description - blurb of project
 * @params {string[]} tags
 * @params {function} openModal
 */
export default function Project({
  id,
  imgSrc,
  name,
  description,
  tags,
  openModal,
}) {
  return (
    <div className="project">
      <div className="project-img">
        <img className="intro-img" src={imgSrc} />
      </div>
      <div className="project-details">
        <h3
          onClick={() => {
            openModal(id);
          }}
        >
          {name}
        </h3>
        <p>{description}</p>
        <div className="tags">{tags}</div>
      </div>
    </div>
  );
}
