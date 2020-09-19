import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const channelImage = require("../Images/ranjan.jpg");
const image1 = require("../Images/image1.jpg");
const image2 = require("../Images/image2.jpg");
const image3 = require("../Images/image3.jpg");

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image={channelImage}
        channel="Ranjan Moger"
        verified
        subs="20M"
        noOfVideos={402}
        description="Testing..."
      />
      <hr />

      <VideoRow
        views="100M"
        subs="20M"
        description="In this tutorial, I'm going to show you how amazingly easy it is to position your layout in the browser using the CSS grid. Horizontal / vertical alignment in any which way? Easy."
        timestamp="30s ago"
        channel="Ranjan Moger"
        title="How to learn ReactJS"
        image={image1}
      />
      <VideoRow
        views="100M"
        subs="20M"
        description="In this tutorial, I'm going to show you how amazingly easy it is to position your layout in the browser using the CSS grid. Horizontal / vertical alignment in any which way? Easy."
        timestamp="30s ago"
        channel="Ranjan Moger"
        title="How to learn ReactJS"
        image={image2}
      />
      <VideoRow
        views="100M"
        subs="20M"
        description="In this tutorial, I'm going to show you how amazingly easy it is to position your layout in the browser using the CSS grid. Horizontal / vertical alignment in any which way? Easy."
        timestamp="30s ago"
        channel="Ranjan Moger"
        title="How to learn ReactJS"
        image={image3}
      />
    </div>
  );
}

export default SearchPage;
