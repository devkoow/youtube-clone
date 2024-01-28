// 실제 API와 Mock data 중 원하는 대로 연결
export default class Youtube {
  // 클래스 내부적으로는 axios나 fetch를 사용하는것과 관계없음
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  // Videos의 쿼리 키에 저장된 keyword를 전달받음
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    // 클라이언트에서 정의한 search 함수 사용
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // 클라이언트에서 정의한 videos 함수 사용
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
