//this key from https://console.cloud.google.com/apis/credentials?pli=1&project=molten-acumen-400814&supportedpurview=project
const GOOGLE_API_KEY = "AIzaSyCPLCdbPbxy0m2mrfgZU-dJEFb6C-avA1Y";

export const YT_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
