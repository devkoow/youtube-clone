import axios from 'axios';

// 테스트 및 API 전환용 mock data
export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    // mock data라 keyword를 인자로 받을 필요 없음
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/search.json`).then((res) => res.data.items);
  }
}
