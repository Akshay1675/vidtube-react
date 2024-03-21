export const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY

export const YOUTUBE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key=" + YOUTUBE_API_KEY 

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="  

export const YOUTUBE_SINGLE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="

export const TAB_VIDEO_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="

export const SEARCH_VIDEO_DETAILS = "https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id="

export const LIVE_CHAT_COUNT = 25

export const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSknySXPR9cUz_VO1UTb9--WndZkW6B45BQ&usqp=CAU"

export const buttons = ['All',
'News',
'Javascript',
'Live',
'Music',
'Cricket',
'Frontend',
'BGMI',
'CSS',
'HTML',
]

export const valueConvertor = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000) + "M"
    } else if(value >= 1000) {
        return Math.floor(value/1000) + "K"
    } else {
        return value
    }

}

