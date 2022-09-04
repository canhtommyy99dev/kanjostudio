/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ItemComboTicket from "./components-mini/ItemComboTicket";

class QuickWizard extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5">
              CHỤP ẢNH CƯỚI TẠI KANJO STUDIO NHƯ THẾ NÀO ?
            </h1>
          </div>
          <div className="row g-4">
            <ItemComboTicket
              quick_wizard="Bước 1"
              designation_info="Đăng ký dịch vụ chụp ảnh cưới bằng cách điền thông tin vào form bên dưới."
              image1="img/image_category/phim_truong.jpg"
              title1="Chụp Ảnh Cưới"
              image2="img/image_category/doanh_nghiep.jpg"
              title2="Chụp Ảnh Doanh Nhân"
            />
            <ItemComboTicket
              quick_wizard="Bước 2"
              designation_info="Đến trực tiếp Studio để thử trang phục, chọn ngày chụp ảnh và ký hợp đồng."
              image1="img/image_category/family.jpg"
              title1="Chụp Ảnh Gia Đình"
              image2="img/image_category/baby.jpg"
              title2="Chụp Ảnh Cho Bé"
            />
            <ItemComboTicket
              quick_wizard="Bước 3"
              designation_info="Trang điểm & chụp ảnh cưới , quay video cưới và chọn ảnh sau khi chụp."
              image1="img/image_category/fashion.jpg"
              title1="Chụp Ảnh Thời Trang"
              image2="img/image_category/vay_cuoi.jpg"
              title2="Chụp Ảnh Váy Cưới"
            />
            <ItemComboTicket
              quick_wizard="Bước 4"
              designation_info="Nhận file ảnh đã chỉnh sửa & duyệt in album để nhận sản phẩm cuối cùng."
              image1="img/image_category/studio.jpg"
              title1="Chụp Ảnh Phim Trường"
              image2="img/image_category/ngoai_canh.jpg"
              title2="Chụp Ảnh Ngoại Cảnh"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuickWizard;
