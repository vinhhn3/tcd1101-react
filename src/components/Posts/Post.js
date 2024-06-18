import React from "react";

function Post(props) {
  return (
    <div>
      <p>Post Id:{props.post.id} </p>
      <p>UserId: {props.post.userId} </p>
      <p>Title: {props.post.title} </p>
      <p>Body:{props.post.body} </p>
    </div>
  );
}

export default Post;
