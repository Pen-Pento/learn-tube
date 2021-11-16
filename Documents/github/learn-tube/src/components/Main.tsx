import React from "react";
import Video from "./Video";
import { Video as IVideo } from "../domain/entity/video";
import { Input, Layout } from "antd";

const { TextArea } = Input;
const { Content } = Layout;

const Main = () => {
  const MainVideoData: IVideo = {
    id: "1",
    videoSrc: "H1W-q_x3_Co",
    height: "720",
    width: "1280",
  };
  return (
    <>
      <Content>
        <Video
          videoSrc={MainVideoData.videoSrc}
          id={MainVideoData.id}
          height={MainVideoData.height}
          width={MainVideoData.width}
        />
        {/* markdown化する */}
        <TextArea rows={10} style={{ width: 1280 }} />
      </Content>
    </>
  );
};

export default Main;
