import React from "react";

const YouTubeVideo = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="aspect-w-16 aspect-h-9 w-full h-full mx-auto">
      {" "}
      {/* 여기에 변경사항을 적용했습니다. */}
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-r-3xl"></iframe>
    </div>
  );
};

export default YouTubeVideo;
