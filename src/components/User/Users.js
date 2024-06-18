import React from "react";
import UserItem from "./UserItem";

function Users(props) {
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
