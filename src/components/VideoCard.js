import React from "react";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  function formatNumberWithCommas(number) {
    // Convert number to string and split it into integer and decimal parts
    var parts = number.toString().split(".");
    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Join the integer and decimal parts and return the formatted number
    return parts.join(".");
  }

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatNumberWithCommas(statistics.viewCount)} Views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
