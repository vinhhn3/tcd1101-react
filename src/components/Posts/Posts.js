import axios from "axios";
import React, { useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const post = {
    id: 1,
    userId: 1,
    title: "Post 1",
    body: "This is the first post",
  };

  const handleGetPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response.data);
    setPosts(response.data);
  };
  return (
    <div>
      <h1>Al Posts</h1>

      <button onClick={handleGetPosts}>Get all Posts</button>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
