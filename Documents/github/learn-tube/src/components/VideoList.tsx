import React from "react";
import Video from "./Video";
import { Video as IVideo } from "../domain/entity/video";

const VideoList = () => {
  const videoListData: IVideo[] = [
    {
      id: "1",
      videoSrc: "H1W-q_x3_Co",
      height: "94",
      width: "168",
    },
    {
      id: "2",
      videoSrc: "Fx6all2_6z8",
      height: "94",
      width: "168",
    },
  ];
  return (
    <>
      {videoListData && (
        <>
          {videoListData.map((v) => (
            <div key={v.id}>
              <Video
                videoSrc={v.videoSrc}
                id={v.id}
                height={v.height}
                width={v.width}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default VideoList;
