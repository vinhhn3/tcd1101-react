import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GithubApi from "../api/GitHubApi";

function User() {
  const { loginId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const data = await GithubApi.getUser(loginId);
    console.log(data);
    setUserData(data);
  };

  const {
    name,
    login,
    company,
    location,
    email,
    public_repos,
    followers,
    following,
    avatar_url,
    html_url,
    bio,
    blog,
    webiste,
    public_gists,
  } = userData;

  return (
    <div className="container">
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to seach
        </Link>
        <div className="card grid">
          <div className="all-center">
            <p>Information</p>
            <img
              alt=""
              src={avatar_url}
              className="round-img"
              style={{ width: "70px" }}
            />
            <h1>{login}</h1>
            <p>{location}</p>
          </div>
        </div>
        {bio && (
          <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
        )}
        <a href={html_url} className="btn btn-dark my-1">
          Visit Github Profile
        </a>
        <ul>
          <li>{login && <Fragment>Login id: {login}</Fragment>}</li>
          <li>{company && <Fragment>Company: {company}</Fragment>}</li>
          <li>{webiste && <Fragment>Website: {webiste}</Fragment>}</li>
          <li>{name && <Fragment>Full Name: {name}</Fragment>}</li>
          <li>{email && <Fragment>Email: {email}</Fragment>}</li>
          <li>{blog && <Fragment>Blog: {blog}</Fragment>}</li>
        </ul>
      </Fragment>
      <div className="card card-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-dark">Public repos: {public_repos}</div>
        <div className="badge badge-light">Public gists: {public_gists}</div>
      </div>
    </div>
  );
}

export default User;
