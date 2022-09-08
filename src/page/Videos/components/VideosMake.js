import React, { Component } from "react";
import axios from "axios";
import TitleYoutubeLink from "./components-mini/title_youtube_link";

class VideosMake extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDAO1fz1KkRm6VdRQ2gKOjJJTfxayzaRa8&channelId=UChMesj8ABwJ6PeN6WoFpkdw&part=snippet,id&maxResults=50&order=date`
      )
      .then((res) => {
        const items = res.data["items"];
        this.setState({ items });
      });
  }

  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
            <h1 className="display-6 mb-5">PHIM CƯỚI</h1>
            VỚI NHỮNG GÓC QUAY HIỆN ĐẠI, PHIM CƯỚI LÀ NHỮNG MUSIC VIDEO NGẮN,
            ĐỘC ĐÁO MÀ CÔ DÂU CHÚ RỂ LÀ DIỄN VIÊN CHÍNH.
          </div>
          <hr />
          <div className="row g-4">
            <ul></ul>
            {this.state.items.map((item) => (
              <TitleYoutubeLink
                key={item.etag}
                image={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                link={`https://youtube.com/watch?v=${item.id.videoId}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default VideosMake;
