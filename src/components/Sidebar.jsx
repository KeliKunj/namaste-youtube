import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-4 shadow-lg text-sm overflow-y-scroll h-screen">
      <div className="font-bold mb-2 pl-4 hover:border hover:p-2 hover:rounded-2xl hover:shadow-lg"><Link to={"/"}>Home</Link></div>
      <ul className="space-y-2 pl-4">
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h2 className="border-t border-gray-500 mt-4 font-bold my-2 pl-4">You</h2>
      <ul className="space-y-2 pl-4">
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Your Courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h2 className="border-t border-gray-500 mt-4 font-bold my-2 pl-4">Subscriptions</h2>
      <ul className="space-y-2 pl-4">
        <li>Bhajan Marg</li>
        <li>Ajeet Bharti</li>
        <li>Join Indian Army</li>
      </ul>
      <h2 className="border-t border-gray-500 mt-4 font-bold my-2 pl-4">Explore</h2>
      <ul className="space-y-2 pl-4">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Courses</li>
        <li>Sports</li>
        <li>Live</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
