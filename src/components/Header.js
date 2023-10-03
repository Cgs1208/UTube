import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { searchSliceActions } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(
      searchSliceActions.caccheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(appActions.toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-xl p-2 m-0 fixed top-0 w-full bg-white">
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
      <div className="col-span-10 pl-10 ml-24">
        <div>
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 rounded-l-full w-1/2"
            style={{ marginLeft: "10px" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onScroll={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 py-1 px-3 rounded-r-full bg-gray-100"
            style={{ marginLeft: "2px" }}
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="px-3 py-2 ml-2 w-[27rem] bg-white absolute rounded-lg shadow-lg border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 hover:bg-gray-100 cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
