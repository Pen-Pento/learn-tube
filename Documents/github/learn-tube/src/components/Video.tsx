import React from "react";
import YouTube from "react-youtube";
import { Video as IVideo } from "../domain/entity/video";

const Video = (props: IVideo) => {
  const alertEnd = () => {
    alert("動画が終了しました。");
  };
  return (
    <>
      <YouTube
        videoId={props.videoSrc}
        id={props.id}
        opts={{
          height: props.height,
          width: props.width,
          playerVars: {
            autoplay: 0,
          },
        }}
        onEnd={alertEnd}
      />
    </>
  );
};

export default Video;
