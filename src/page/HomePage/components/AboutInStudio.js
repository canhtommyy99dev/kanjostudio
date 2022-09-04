import React, { Component } from "react";
import TitleAboutStudio from "./components-mini/title_about_Studio";

class AboutInStudio extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
            <h1 className="display-6 mb-5">
              TẠI KANJO STUDIO, BẠN HOÀN TOÀN YÊN TÂM VỚI CÁC DỊCH VỤ CƯỚI
            </h1>
            THÀNH LẬP VÀO NĂM 2017, KANJO STUDIO ĐÃ PHỤC VỤ HƠN 20.000 CẶP ĐÔI
            VÀ TRỞ THÀNH THƯƠNG HIỆU HÀNG ĐẦU VỀ CHỤP ẢNH CƯỚI HƯNG YÊN VÀ CÁC
            TỈNH LÂN CẬN VỚI 4 CHI NHÁNH. KANJO STUDIO LUÔN TỰ HÀO MANG ĐẾN CHO
            BẠN SỰ TIN TƯỞNG BẰNG TRẢI NGHIỆM DỊCH VỤ CƯỚI TỐT NHẤT VỚI CHI PHÍ
            ĐÁM CƯỚI VỪA PHẢI.
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

export default AboutInStudio;
