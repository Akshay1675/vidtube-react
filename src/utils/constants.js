export const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=in&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SINGLE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const TAB_VIDEO_URL =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=";

export const SEARCH_VIDEO_DETAILS =
  "https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id=";

export const LIVE_CHAT_COUNT = 25;

export const LOGO_URL = "https://www.vidtube.watch/_nuxt/img/8fd0a84.png";

export const buttons = [
  "All",
  "News",
  "Javascript",
  "Live",
  "Music",
  "Cricket",
  "Frontend",
  "BGMI",
  "CSS",
  "HTML",
];

export const valueConvertor = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
