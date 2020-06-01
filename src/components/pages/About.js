import React from "react";
import authorImage from "../../img/AuthorProfile.png";

export const About = () => {
  return (
    <div className="container">
      <h2>App Information</h2>
      <p>
        This is an application for searching GitHub user, made with React and
        GitHub api
      </p>
      <hr />
      <h2>Author</h2>
      <br />
      <div className="card author">
        <div className="profile-img">
          <img src={authorImage} alt="Author" />
          <div>
            <h4>Jason Xu</h4>
            <p>Student | Web Developer | Business Analyst | UX Designer</p>
          </div>
        </div>
        <a
          className="hori-btn btn btn-secondary"
          href="https://ca.linkedin.com/in/jasonxu-b33b63171/en-us?trk=profile-badge"
        >
          <i className="fab fa-fw fa-linkedin-in"></i>
          LinkedIn Profile
        </a>
        <a
          className="hori-btn btn btn-secondary"
          href="https://github.com/Zhenghangxu"
        >
          <i className="fab fa-fw fa-github"></i>
          GitHub Profile
        </a>
      </div>
    </div>
  );
};
