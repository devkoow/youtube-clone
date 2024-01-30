import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';
import FakeYoutubeClient from '../api/fakeYoutubeClient';

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);
export const YoutubeApiContext = createContext();

// YoutubeApiContext가 가진 기능
// Youtube API를 사용할 수 있게 만듦
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

// Context API를 사용하는 함수를 만듦
export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
