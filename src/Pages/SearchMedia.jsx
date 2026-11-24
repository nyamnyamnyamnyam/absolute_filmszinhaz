import { useEffect, useState } from "react";
import Filter from "../components/Filter.jsx";
import SearchBar from "../components/SearchBar.jsx";
import MediaList from "../components/MediaList.jsx";
import { getMedia } from "../utils.js";
import Pagination from "../components/Pagination.jsx";

const SearchMedia = () => {
  const [type, setType] = useState("movie");
  const [searchText, setSearchText] = useState("");
  const [media, setMedia] = useState(null);
  const [maxPage, setMaxPage] = useState(1);
  const [page, setPage] = useState(1)

  const handleSearch = () => {
    if (searchText.trim().length === 0) return;
    setPage(1);
    getMedia(type, searchText, 1).then(({ results, totalPages }) => {
      setMedia(results);
      setMaxPage(totalPages);
    });
  };

  const handleTypeChange = (nextType) => {
    setType(nextType);
    setPage(1);
  };

  useEffect(() => {
    if (searchText.trim().length === 0) return;
    getMedia(type, searchText, page).then(({ results, totalPages }) => {
      setMedia(results);
      setMaxPage(totalPages);
    });
  }, [page, type]);
  

  return (
    <div className="min-h-screen">
      <Filter type={type} setType={handleTypeChange} />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      {media && <MediaList data={media} type={type}/>}
      {media && <Pagination {...{page, setPage, maxPage}}/>}
    </div>
    
  );

};

export default SearchMedia;
