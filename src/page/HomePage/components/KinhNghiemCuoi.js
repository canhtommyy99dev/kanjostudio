/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import TitleChuyenCuoi from "./components-mini/Title_chuyen_cuoi";

class KinhNghiemCuoi extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
            <h1 className="display-6 mb-5">KINH NGHIỆM CƯỚI</h1>
          </div>
          <hr />
          <TitleChuyenCuoi
            image_link="img/image_category/album_Show.jpg"
            url="https://alexmedia.vn"
            title="XU HƯỚNG CHỤP ẢNH CƯỚI HÀN QUỐC ĐẸP TRONG PHÒNG STUDIO 2022"
            description="CHUYÊN MỤC : DỊCH VỤ CƯỚI,KINH NGHIỆM CHỤP ẢNH CƯỚI,KINH NGHIỆM CƯỚI,PHONG CÁCH CHỤP ẢNH CƯỚI"
            description1="Có một điều mà Kanjo Studio có thể khẳng định rằng chụp ảnh cưới Hàn Quốc sẽ luôn là sự lựa chọn hàng đầu dành cho các 8/10 cặp đôi sắp cưới"
          />
          <br />
          <TitleChuyenCuoi
            image_link="img/image_category/album_Show2.jpg"
            url="https://alexmedia.vn"
            title="ALBUM CHỤP ẢNH CƯỚI PHONG CÁCH HÀN QUỐC MỚI NHẤT 2022"
            description="CHUYÊN MỤC : DỊCH VỤ CƯỚI,KINH NGHIỆM CHỤP ẢNH CƯỚI,KINH NGHIỆM CƯỚI,PHONG CÁCH CHỤP ẢNH CƯỚI"
            description1="Các cặp đôi ngày nay có xu hướng chọn phong cách chụp ảnh cưới trong studio vừa đẹp, vừa tiết kiệm mà lại còn không bị `sến` theo thời gian."
          />
          <br />
          <TitleChuyenCuoi
            image_link="img/image_category/album_Show3.jpg"
            url="https://alexmedia.vn"
            title="PHÓNG SỰ CƯỚI : BẢNG GIÁ CHỤP ẢNH & QUAY VIDEO PHÓNG SỰ CƯỚI 2022"
            description="CHUYÊN MỤC : DỊCH VỤ CƯỚI,KINH NGHIỆM CHỤP ẢNH CƯỚI,KINH NGHIỆM CƯỚI,PHONG CÁCH CHỤP ẢNH CƯỚI"
            description1="Có một điều mà Kanjo Studio có thể khẳng định rằng chụp ảnh cưới Hàn Quốc sẽ luôn là sự lựa chọn hàng đầu dành cho các 8/10 cặp đôi sắp cưới"
          />
        </div>
      </div>
    );
  }
}

export default KinhNghiemCuoi;
