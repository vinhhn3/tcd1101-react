import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { loginId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const response = await axios.get("https://api.github.com/users/" + loginId);
    console.log(response.data);
    setUserData(response.data);
  };

  return (
    <div>
      <h1>User Detail Page</h1>
      <p>Logon Id: {userData.login}</p>
    </div>
  );
}

export default User;
