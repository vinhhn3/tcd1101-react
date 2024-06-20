import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

function Search() {
  const githubcontext = useContext(GithubContext);
  const { clearUsers, searchUsers } = githubcontext;

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = async () => {
    console.log(text);
    searchUsers(text);
  };

  const handleClear = () => {
    console.log("clear");
    setText("");
    clearUsers();
  };

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      />
      <button onClick={handleSearch} className="btn btn-block btn-primary">
        Search
      </button>
      <button onClick={handleClear} className="btn btn-block btn-secondary">
        Clear
      </button>
    </div>
  );
}

export default Search;
