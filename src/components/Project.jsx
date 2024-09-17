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
  githubLink,
  caseStudyLink,
  liveSiteLink,
  openModal,
}) {
  const handleClick = () => {
    openModal(id);
  };
  return (
    <div className="project">
      <div className="project-img">
        <img className="intro-img" src={imgSrc} />
      </div>
      <div className="project-details">
        <h3 onClick={handleClick}>{name}</h3>
        <p>{description}</p>
        <button onClick={handleClick}>Read More</button>
        {githubLink && <a href="">Github</a>}
        {liveSiteLink && <a href="">Live Site</a>}
        {caseStudyLink && <a href="">Case Study</a>}
      </div>
    </div>
  );
}
