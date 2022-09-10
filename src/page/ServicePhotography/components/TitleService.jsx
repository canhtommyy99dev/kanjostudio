/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ListTile from "./component-mini/ListTile";

class TitleService extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5">Bảng giá chụp ảnh</h1>
          </div>
          <div className="row g-4">
            <ListTile
              description="Chụp Ảnh Cưới"
              link_to="/bang_gia_chup_anh_cuoi"
              title="Package 1"
              image_link="img/image_category/phim_truong.jpg"
            />
            <ListTile
              description="Chụp Ảnh Doanh Nhân"
              link_to="/bang_gia_chup_anh_doanh_nhan"
              title="Package 2"
              image_link="img/image_category/doanh_nghiep.jpg"
            />
            <ListTile
              description="Chụp Ảnh Cho Bé"
              link_to="/bang_gia_chup_anh_cho_be"
              title="Package 3"
              image_link="img/image_category/baby.jpg"
            />
            <ListTile
              description="Chụp Ảnh Gia Đình"
              link_to="/bang_gia_chup_anh_gia_dinh"
              title="Package 4"
              image_link="img/image_category/family.jpg"
            />
            <ListTile
              description="Chụp Ảnh Thời trang"
              link_to="/bang_gia_chup_anh_thoi_trang"
              title="Package 5"
              image_link="img/image_category/fashion.jpg"
            />
            <ListTile
              description="Chụp Ảnh Váy Cưới"
              link_to="/bang_gia_chup_anh_vay_cuoi"
              title="Package 6"
              image_link="img/image_category/vay_cuoi.jpg"
            />
            <ListTile
              description="Phim Trường Studio Kanjo"
              link_to="/bang_gia_chup_anh_phim_truong"
              title="Package 7"
              image_link="img/image_category/studio.jpg"
            />
            <ListTile
              description="VIP Ngoại Cảnh"
              link_to="/bang_gia_chup_anh_vip_ngoai_anh"
              title="Package 8"
              image_link="img/image_category/ngoai_canh.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TitleService;
