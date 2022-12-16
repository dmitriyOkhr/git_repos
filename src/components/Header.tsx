import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FC } from "react";

interface Props {
  inputText: string;
  onChange: any;
  onClick: any;
}

const Header: FC<Props> = ({ inputText, onChange, onClick }) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_text">
          <h1>
            MY<span>REPOS</span>
          </h1>
        </div>
        <div className="header_container-input">
          <div className="container_input">
            <div>
              <input
                className="input"
                type="text"
                placeholder="GitHub user name"
                value={inputText}
                onChange={onChange}
              ></input>
              <Button onClick={onClick} variant="outline-primary">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
