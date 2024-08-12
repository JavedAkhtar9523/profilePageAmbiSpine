import React from "react";
import "../Styles/Info.css";
import banner from "../Images/8.jpg";
import avtar from "../Images/admin.png";

const Info = () => {
  return (
    <>
      <div className="container">
        <div className="info-left">
          <div className="info-banner_img">
            <img src={banner} alt="" />
            <div className="info-banner_profile">
              <img src={avtar} alt="" />
            </div>
          </div>
          <div className="profile-data">
            <h1>Javed Akhtar</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              saepe, vero porro officiis ipsum sint optio sapiente, impedit iste
              officia voluptatibus deleniti odit laboriosam ducimus consectetur
              aliquam consequuntur! Aperiam, fugiat.
            </p>
            <h5>Profile last updated: 12 Aug, 2024</h5>
            <div className="stats-data">
              <p>Average Views: 400</p>
              <p>Average Likes: 30</p>
              <p>Recently Visits: 300</p>
              <p>Search Apearnces: 50</p>
              <p>Total time spend: 30</p>
              <p>Opportunities applied: 20</p>
              <p>Opportunities wons: 5</p>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
        <div className="info">
          <h3 className="info-blank">Info</h3>
        </div>
      </div>
    </>
  );
};

export default Info;
