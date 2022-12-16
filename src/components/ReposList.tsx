import { FC } from "react";
import { GitHubRepository } from "../types";

interface Props {
  data: GitHubRepository[];
}

const ReposList: FC<Props> = ({ data }) => {
  const listRepos =
    data.length !== 0 ? (
      data.slice(0, 10).map((repo) => (
        <a href={repo.html_url}>
          <div className="list_item" key={repo.id}>
            {repo.name}
          </div>
        </a>
      ))
    ) : (
      <div className="no-repo_text">Start to searching repos</div>
    );

  return (
    <div className="main_list">
      <div>{listRepos}</div>
    </div>
  );
};

export default ReposList;
