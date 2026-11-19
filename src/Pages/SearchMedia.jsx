import { useState } from "react";
import Filter from "../components/Filter.jsx";
import SearchBar from "../components/SearchBar.jsx";
import MediaList from "../components/MediaList.jsx";
import { getMedia } from "../utils.js";

const SearchMedia = () => {
  const [type, setType] = useState("movie");
  const [searchText, setSearchText] = useState("");
  const [media, setMedia] = useState(null);
  console.log(searchText);

  const handleSearch = () => {
    if (searchText.trim().length == 0) return;
    console.log("ok");
    getMedia(type, searchText).then(setMedia);
  };

  return (
    <div className="min-h-screen">
      <Filter type={type} setType={setType} />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      {media && <MediaList data={media} type={type}/>}
    </div>
  );
};

export default SearchMedia;
