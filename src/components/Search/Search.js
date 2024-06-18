import axios from "axios";
import React, { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = async () => {
    console.log(text);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    console.log(response.data.items);
    setUsers(response.data.items);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Search..." />
      <button onClick={handleSearch} className="btn btn-block btn-primary">
        Search
      </button>
    </div>
  );
}

export default Search;
