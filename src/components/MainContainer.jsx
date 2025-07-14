import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {  
  const buttonNames = ['All', 'News', 'Podcasts', 'AI & Tech', 'Gaming', 'Movies', 'Music', 'Sports', 'Fashion & Beauty', 'Travel', 'Food', 'Health & Fitness', 'Education', 'Lifestyle', 'Entertainment'];  
  
  return (
    <div className="p-4 m-4 shadow-lg">
    <div className="flex space-x-3 max-w-screen-lg overflow-x-auto" style={{scrollbarWidth: 'none'}}>
      {buttonNames.map((name)=>(
        <ButtonList key={name} name={name} />
      ))}      
    </div>
    <div className="mt-4 px-6">
      <VideoContainer />
    </div>
    </div>
  );
};

export default MainContainer;
