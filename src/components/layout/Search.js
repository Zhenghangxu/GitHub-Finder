import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    const state = text;
    if (state !== "") {
      githubContext.getUsers(text);
    }
    setText("");
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="box-group">
        <input
          type="text"
          value={text}
          onChange={onChange}
          className="form-control"
          name="text"
          placeholder="Search A GitHub User"
        />
        <button type="submit" className="btn btn-light">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
