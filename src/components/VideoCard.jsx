import React from "react";

const VideoCard = ({ item }) => {
  const { snippet, statistics, contentDetails } = item;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

  function getDateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Adjust for negative days
    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }

  function getReadableDateDifference(startDate, endDate) {
    const diff = getDateDifference(startDate, endDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));

    if (diff.years >= 1) {
      return `${diff.years} year(s)`;
    } else if (diff.months >= 1) {
      return `${diff.months} month(s)`;
    } else if (totalDays < 1) {
      const hours = Math.floor((end - start) / (1000 * 60 * 60));
      const minutes = Math.floor((end - start) / (1000 * 60)) % 60;
      return `${hours} hour(s)` | `${minutes} minute(s)`; //not working
    } else {
      return `${totalDays} day(s)`;
    }
  }

  return (
    <div
      className={`border broder-gray shadow-md rounded-lg w-56 m-2 p-4 hover:shadow-xl hover:p-2`}
    >
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <h3 className="font-bold text-sm">{title}</h3>
      <h3 className="text-xs text-gray-600">{channelTitle}</h3>
      <div className="inline-flex space-x-4">
        <h4 className="text-xs text-gray-600">{viewCount} views</h4>
        <h4 className="text-xs text-gray-600">
          {getReadableDateDifference(new Date(), new Date(publishedAt)) ||
            "just now"}
        </h4>
      </div>
    </div>
  );
};

export const AdCards = ({ item }) => {
  return (
    <div>
      <h2 className="absolute font-bold mt-24 p-2 text-xs bg-red-600 text-white rounded-r-full">Advertisement</h2>
      <VideoCard item={item} />
    </div>
  );
};

export default VideoCard;
