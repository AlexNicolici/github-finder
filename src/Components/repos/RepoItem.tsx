import React from "react";
import { Link } from "react-router-dom";

function RepoItem({ repo }: any) {
  return (
    <div className="card">
      <h3>
        <Link to={repo.html_url}>{repo.name}</Link>
      </h3>
    </div>
  );
}

export default RepoItem;
