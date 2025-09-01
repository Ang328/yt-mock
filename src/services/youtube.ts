import axios from "axios";

const API_BASE = "https://www.googleapis.com/youtube/v3";

const apiKey = import.meta.env.VITE_YT_API_KEY;
if(!apiKey) throw new Error("Missing API key");

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
    description: string;
    publishedAt: string;
  };
}



export async function searchVideos(query: string, maxResults = 5) {

  try {
    const response = await axios.get(`${API_BASE}/search`, {
      params: {
        key: apiKey,
        part: "snippet",
        type: "video",
        q: query,
        maxResults,
        videoEmbeddable: "true"
      }
    });

    console.log(response.data.items)

    return response.data.items.map((item: Video) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt
    }))
    

    
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("YouTube API error:", e.message);
    } else {
      console.error("YouTube API error:", e);
    }
  }

}

export async function getRelatedVideos(videoId: string, maxResults = 5) {

  try {
    const response = await axios.get(`${API_BASE}/search`, {
      params: {
        key: apiKey,
        part: "snippet",
        type: "video",
        relatedToVideoId: videoId,
        maxResults,
        videoEmbeddable: "true"
      }
    });

    console.log(response.data.items)

    return response.data.items.map((item: Video) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt
    }))
    

    
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error("YouTube API error:", e.message);
    } else {
      console.error("YouTube API error:", e);
    }
  }

}

