import React, { Component } from "react";
import TitleAboutStudio from "./components-mini/title_about_Studio";

class PhimCuoiStudio extends Component {
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
            <TitleAboutStudio
              image="img/image_category/phim_truong.jpg"
              title="ALBUM ẢNH CƯỚI ĐẸP"
            />
            <TitleAboutStudio
              image="img/image_category/mackup.jpg"
              title="TRANG ĐIỂM CÔ DÂU"
            />
            <TitleAboutStudio
              image="img/image_category/vay_cuoi_cao_cap.jpg"
              title="VÁY CƯỚI CAO CẤP"
            />
            <TitleAboutStudio
              image="img/image_category/family.jpg"
              title="GIA ĐÌNH HẠNH PHÚC"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhimCuoiStudio;
