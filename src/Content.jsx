import React from "react";

const Content = ({ profiles }) => {
  return (
    <div className="contentContainer">
      {profiles.map((profile) => (
        <article>
          <img src={profile.picture} alt="profile picture" />
          <div className="profileInfo">
            <p className="profileId">{profile.id}</p>
            <h3 className="name">{`${profile.title} ${profile.firstName} ${profile.lastName}`}</h3>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Content;
