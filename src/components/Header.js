import React from "react";
import { useDispatch } from "react-redux";
import { appActions } from "../utils/appSlice";

function Header() {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(appActions.toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-xl p-2 mx-0 my-2">
      <div className="flex col-span-1 ml-2">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src="https://t4.ftcdn.net/jpg/06/36/20/95/360_F_636209537_C5XH5Laq38kHXzFNJ43ZKnVdlQRciJzc.jpg"
          alt="menu-logo"
        />
        <a href="/">
          {/*anchor tag with "/" to load the youtube home page again */}
          <img
            className="h-10"
            src="https://img.freepik.com/premium-photo/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.jpg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input
          type="text"
          className="border border-gray-400 p-1 rounded-l-full w-1/2"
          style={{ marginLeft: "10px" }}
        />
        <button
          className="border border-gray-400 py-1 px-3 rounded-r-full bg-gray-100"
          style={{ marginLeft: "2px" }}
        >
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
          alt="user-profile"
        />
      </div>
    </div>
  );
}

export default Header;
