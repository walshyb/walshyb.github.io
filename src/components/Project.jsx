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
  readMore,
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
        {readMore && <button onClick={handleClick}>Read More</button>}
        {githubLink && (
          <a href={githubLink} target="_blank">
            Github
          </a>
        )}
        {liveSiteLink && (
          <a href={liveSiteLink} target="_blank">
            Live Site
          </a>
        )}
        {caseStudyLink && (
          <a href={caseStudyLink} target="_blank">
            Case Study
          </a>
        )}
      </div>
    </div>
  );
}
