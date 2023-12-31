import React from "react";

const YouTubeVideo = ({ videoId }) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="aspect-ratio-16/9 w-full bg-gray-200 mx-auto">
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full aspect-video rounded-r-3xl"></iframe>
    </div>
  );
};

export default YouTubeVideo;
