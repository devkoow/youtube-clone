import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  // Object Deconstruction
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  // 카드 클릭하면 VideoDetail로 이동
  const navigate = useNavigate();
  return (
    <li
      className="my-5"
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } }); // state = props 전달
      }}
    >
      {/* 썸네일, 타이틀, 채널명, 업로드 시간(timeago 사용) */}
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
