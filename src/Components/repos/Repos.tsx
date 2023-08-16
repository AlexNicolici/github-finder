import React from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }: any) {
  if (!repos || repos.length === 0) {
    return <p>This user has no repos!</p>;
  }

  return (
    <div>
      {repos.map((repo: any) => {
        return <RepoItem repo={repo} key={(repo.name, repo.id)} />;
      })}
    </div>
  );
}

export default Repos;
