import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-4 shadow-lg text-sm overflow-y-scroll h-screen">
      <div className="font-bold mb-2 pl-4 hover:border hover:p-2 hover:rounded-2xl hover:shadow-lg"><Link to={"/demo"}>Demo</Link></div>
      <div className="font-bold mb-2 pl-4 hover:border hover:p-2 hover:rounded-2xl hover:shadow-lg"><Link to={"/"}>Home</Link></div>
      <ul className="space-y-2 pl-4">
        <li className="hover:border-b-2 hover:p-2">Shorts</li>
        <li className="hover:border-b-2 hover:p-2">Subscriptions</li>
      </ul>
      <h2 className="border-t border-gray-500 mt-4 font-bold my-2 pl-4 hover:border hover:p-2 hover:rounded-2xl hover:shadow-lg">You</h2>
      <ul className="space-y-2 pl-4">
        <li className="hover:border-b-2 hover:p-2">History</li>
        <li className="hover:border-b-2 hover:p-2">Playlists</li>
        <li className="hover:border-b-2 hover:p-2">Your Videos</li>
        <li className="hover:border-b-2 hover:p-2">Your Courses</li>
        <li className="hover:border-b-2 hover:p-2">Watch Later</li>
        <li className="hover:border-b-2 hover:p-2">Liked Videos</li>
      </ul>
      <h2 className="border-t border-gray-500 mt-4 font-bold my-2 pl-4 hover:border hover:p-2 hover:rounded-2xl hover:shadow-lg">Subscriptions</h2>
      <ul className="space-y-2 pl-4">
        <li className="hover:border-b-2 hover:p-2">Bhajan Marg</li>
        <li className="hover:border-b-2 hover:p-2">Ajeet Bharti</li>
        <li className="hover:border-b-2 hover:p-2">Join Indian Army</li>
      </ul>
      <h2 className="border-t border-gray-500 mt-4 font-bold my-2 pl-4 hover:border hover:p-2 hover:rounded-2xl hover:shadow-lg">Explore</h2>
      <ul className="space-y-2 pl-4">
        <li className="hover:border-b-2 hover:p-2">Trending</li>
        <li className="hover:border-b-2 hover:p-2">Shopping</li>
        <li className="hover:border-b-2 hover:p-2">Courses</li>
        <li className="hover:border-b-2 hover:p-2">Sports</li>
        <li className="hover:border-b-2 hover:p-2">Live</li>
        <li className="hover:border-b-2 hover:p-2">Music</li>
        <li className="hover:border-b-2 hover:p-2">Movies</li>
        <li className="hover:border-b-2 hover:p-2">Gaming</li>
        <li className="hover:border-b-2 hover:p-2">Fashion & Beauty</li>
        <li className="hover:border-b-2 hover:p-2">Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
