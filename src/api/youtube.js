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

  // 채널 이미지를 불러오는 api
  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  // 쿼리말고 연관동영상의 id로 데이터 받아옴
  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoid: id, // id로 연관동영상을 받아옴
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  // 현재 보고있는 영상의 채널에 있는 다른 영상을 대신 불러옴
  async channelVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          channelId: id, // id로 연관동영상을 받아옴
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  // 실시간 API 사용시 연관동영상 대신 현재 시청 영상의 채널에 있는
  // 다른 영상을 불러오기 위한 api 만들기

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
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
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
