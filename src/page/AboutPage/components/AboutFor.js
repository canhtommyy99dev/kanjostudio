import React, { Component } from "react";

class AboutFor extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
            <h1 className="display-6 mb-5">BÌNH TĨNH CƯỚI</h1>
            <h5>
              KANJO STUDIO LUÔN TỰ HÀO MANG ĐẾN CHO BẠN SỰ TIN TƯỞNG BẰNG TRẢI
              NGHIỆM DỊCH VỤ CƯỚI TỐT NHẤT VỚI CHI PHÍ VỪA PHẢI.
            </h5>
            <br />
            <h5>
              THÀNH LẬP VÀO NĂM 2017, KANJO STUDIO ĐÃ PHỤC VỤ HƠN 20.000 CẶP ĐÔI
              VÀ TRỞ THÀNH THƯƠNG HIỆU CHỤP ẢNH CƯỚI HÀNG ĐẦU TẠI TP.HCM VÀ CÁC
              TỈNH LÂN CẬN VỚI 4 CHI NHÁNH.
            </h5>
            <br />
            <h5>
              KANJO STUDIO TẬP TRUNG VÀO KHÁCH HÀNG TRẺ CÓ PHONG CÁCH THẨM MỸ
              HIỆN ĐẠI.
            </h5>
            <br />
            <h5>
              KANJO STUDIO LUÔN LẮNG NGHE VÀ ĐỒNG HÀNH CÙNG BẠN, GÌN GIỮ CHO BẠN
              NHỮNG KHOẢNH KHẮC ĐẸP NHẤT TRONG NGÀY TRỌNG ĐẠI CỦA CUỘC ĐỜI MÌNH.
            </h5>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
                style={{ minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="/img/image_category/cate_gory.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                    <h1 className="text-white mb-0">CEO</h1>
                    <h2 className="text-white">Thieu </h2>
                    <h5 className="text-white mb-0">Nguyen</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="h-100">
                <h1 className="display-6 mb-5">
                  Trích lời từ CEO Thieu Nguyen
                </h1>
                <p className="fs-5 text-primary mb-4">
                  Xin chào, tôi là Thieu Nguyen, bằng tất cả sự đam mê và chưa
                  bao giờ ngừng trau dồi kiến thức mới, tôi mong muốn tất cả
                  khách hàng đều có sự hài lòng trọn vẹn không chỉ về hình ảnh
                  mà còn là cảm xúc , đó là nguồn động lực to lớn dành cho tôi
                  cũng như toàn thể chuyên viên để tiếp tục hành trình mang lại
                  trải nghiệm cưới tốt nhất dành cho khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutFor;
