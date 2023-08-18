import React, { useContext } from "react";
import { useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function Search() {
  const githubContext: any = useContext(GithubContext);
  const alertContext: any = useContext(AlertContext);

  const [text, setText] = useState("");

  const onClickSubmit = (e: any) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something!", "light");
      return;
    }
    githubContext.searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={onClickSubmit}
          type="submit"
          className="btn btn-dark btn-block"
        >
          Search
        </button>
      </form>

      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
