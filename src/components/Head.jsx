import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggeleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleHamburgerClick = () => {
    dispatch(toggeleMenu());
  };
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchSuggestionList, setSearchSuggestionList] = useState([]);
  const cacheData = useSelector((store) => store.search.cacheObject);

  const getSearchSuggestionsResult = async () => {
    console.log("API call", searchText);
    const response = await fetch(SEARCH_SUGGESTIONS_API + searchText);
    const data = await response.json();
    setSearchSuggestionList(data[1]);
    dispatch(cacheResult({ [searchText]: data[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheData[searchText]) {
        setSearchSuggestionList(cacheData[searchText]);
      } else {
        getSearchSuggestionsResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="grid grid-flow-col p-2 shadow-md">
      <div className="col-span-2 flex m-2">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
          alt="Menu Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={handleHamburgerClick}
        />
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO_zT-vjgfQTjo7wolFB8664a3-hr8oztQA&s"
            alt="YT Logo"
            className="w-24 h-6 ml-20 cursor-pointer"
          />
        </a>
      </div>
      <div className="col-span-9">
        <div className="mx-2 mt-2 mb-1 w-8/12 grid grid-flow-col border border-black rounded-full">
          {showSearchIcon && (
            <div className="col-span-1 flex items-center justify-center border-r border-black">
              <img
                alt="glass"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
                className="w-4 h-4"
              />
            </div>
          )}
          <div
            className={`${showSearchIcon ? "col-span-9" : "col-span-10 ml-4"}`}
          >
            <input
              type="text"
              className="w-full p-1 pl-3"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowSearchIcon(true)}
              onBlur={() => setShowSearchIcon(false)}
            />
          </div>
          <div className="col-span-2 flex items-center justify-center border-l border-black">
            <button>
              <img
                alt="glass"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        {searchSuggestionList.length > 0 && (
          <div className="absolute p-4 ml-2 bg-white w-[468px] shadow-lg rounded-2xl border border-gray-200">
            <ul>
              {searchSuggestionList.map((suggestionText) => (
                <li className="hover:bg-gray-100 flex items-center p-2 rounded-md">
                  <img
                    alt="glass"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
                    className="w-4 h-4 mr-4"
                  />
                  {suggestionText}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 p-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
          alt="user icon"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default Head;
