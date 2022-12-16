import { useState, ChangeEvent } from "react";
import ReposList from "./ReposList";
import { GitHubRepository } from "../types";
import axios from "axios";
import Header from "./Header";

const MainComponent = () => {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState<GitHubRepository[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setData([]);
  };

  const onClick = async () => {
    const result = await axios<GitHubRepository[]>(
      `https://api.github.com/users/${inputText}/repos`
    );

    setData(result.data);
  };

  return (
    <div>
      <Header inputText={inputText} onChange={onChange} onClick={onClick} />
      <main className="main">
        <div className="main_container">
          <ReposList data={data} />
        </div>
      </main>
      <footer className="footer">
        <div className="footer_container">2022</div>
      </footer>
    </div>
  );
};

export default MainComponent;
