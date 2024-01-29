import axios from 'axios';

// 테스트 및 API 전환용 mock data
export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoid
      ? axios.get('/videos/related.json')
      : axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channels() {
    return axios.get('/videos/channel.json');
  }
}
