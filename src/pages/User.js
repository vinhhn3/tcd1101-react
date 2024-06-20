import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../api/GitHubApi";

function User() {
  const { loginId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const data = await getUsers(loginId);
    console.log(data);
    setUserData(data);
  };

  return (
    <div>
      <h1>User Detail Page</h1>
      <p>Logon Id: {userData.login}</p>
    </div>
  );
}

export default User;
