import React, { useState } from "react";

function Search(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = async () => {
    console.log(text);
    props.handleSearch(text);
  };

  const handleClear = () => {
    console.log("clear");
    setText("");
    props.clearUsers();
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
