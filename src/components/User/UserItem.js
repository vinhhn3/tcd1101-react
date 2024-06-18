import React from "react";

function UserItem(props) {
  return (
    <div>
      <p>Login: {props.user.login}</p>
      <p>Id: {props.user.id}</p>
    </div>
  );
}

export default UserItem;
