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
  liveSiteLinkText,
  openModal,
}) {
  const handleClick = () => {
    // Disabling for now
    //openModal(id);
  };
  return (
    <div className="project">
      <div className="project-top">
        <img className="intro-img" src={imgSrc} />
        <div className="project-details">
          <h3 onClick={handleClick}>{name}</h3>
          {readMore && <button onClick={handleClick}>Read More</button>}
          {githubLink && (
            <a href={githubLink} className="project-link" target="_blank">
              Github
            </a>
          )}
          {liveSiteLink && (
            <a href={liveSiteLink} className="project-link" target="_blank">
              {liveSiteLinkText || "Live Site"}
            </a>
          )}
          {caseStudyLink && (
            <a href={caseStudyLink} className="project-link" target="_blank">
              Case Study
            </a>
          )}
        </div>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
