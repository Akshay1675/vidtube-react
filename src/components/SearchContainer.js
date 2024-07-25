import VideoList from "./VideoList";
import useSearchResults from "../utils/hooks/useSearchResults";

const SearchContainer = () => {
  const searchResults = useSearchResults();

  return (
    <div className="dark:bg-[#0f0f0f]">
      {searchResults?.map((result) => (
        <VideoList data={result} />
      ))}
    </div>
  );
};

export default SearchContainer;
