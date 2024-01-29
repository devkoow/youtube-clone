import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    // youtube API 통신을 위해 axios create로 http Client 생성
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  // search와 videos의 params는 httpClient의 params와 관련이 없는 별개의 params
  async search(params) {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }

  async channels(params) {
    return axios.get('channels', params);
  }
}
