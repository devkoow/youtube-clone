import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  // Object Deconstruction
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li className="my-5">
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
