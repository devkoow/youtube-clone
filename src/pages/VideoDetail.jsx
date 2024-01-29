import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <>
      {/*  section : 영상, 타이틀, 채널명 - 분리, 설명 */}
      <section>
        <article>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
          ></iframe>
          <div>
            <h2>{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre>{description}</pre>
          </div>
        </article>
      </section>

      {/* div 2: 연관 동영상 리스트 */}
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </>
  );
}
