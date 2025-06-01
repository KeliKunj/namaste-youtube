import React from "react";
import { useDispatch } from "react-redux";
import { toggeleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleHamburgerClick = () => {
    dispatch(toggeleMenu());
  };
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
      <div className="col-span-9 m-2 grid grid-flow-col border border-black w-8/12 rounded-full">
        <div className="col-span-2 flex items-center justify-center border-r border-black">
          <img
            alt="glass"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
            className="w-4 h-4"
          />
        </div>
        <div className="col-span-8">
          <input type="text" className="w-full pb-2" />
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
