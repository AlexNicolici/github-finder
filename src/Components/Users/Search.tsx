import React from "react";
import { useState } from "react";

function Search({
  searchUsers,
  clearUsers,
  showClear,
}: {
  searchUsers: (text: string) => void;
  clearUsers: (text: string) => void;
  showClear: boolean;
}) {
  const [text, setText] = useState("");

  const onClickSubmit = (e: any) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }

    searchUsers(text);
    setText(text);
  };

  const onClickClearUsers = (e: any) => {
    e.preventDefault();
    clearUsers("");
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

      {showClear && (
        <button className="btn btn-light btn-block" onClick={onClickClearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
