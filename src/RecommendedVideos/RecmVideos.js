import React from "react";
import "./RecmVideos.css";
import VideoCard from "./VideoCard";

const image1 = require("../Images/image1.jpg");
const image2 = require("../Images/image2.jpg");
const image3 = require("../Images/image3.jpg");
const channelImage = require("../Images/ranjan.jpg");
const channelImage1 = require("../Images/P180980005.jpg");

function RecmVideos() {
  return (
    <div className="recmvideos">
      <h2>Recommended</h2>
      <div className="recmVideos__video">
        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="Ranjan Moger"
          image={image1}
        />

        <VideoCard
          title="Become a web developer in 10 minutes"
          views="4.3M"
          timestamp="10 days ago"
          channelImage={channelImage1}
          channel="Ranjan Moger"
          image={image2}
        />

        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="Ranjan Moger"
          image={image3}
        />

        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M"
          timestamp="3 days ago"
          channelImage={channelImage1}
          channel="Ranjan Moger"
          image={image1}
        />

        <VideoCard
          title="Become a web developer in 10 minutes"
          views="2.3M"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="Ranjan Moger"
          image={image2}
        />
      </div>
    </div>
  );
}

export default RecmVideos;
