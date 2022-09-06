/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import TitleMiniFeature from "./component-mini/TitleMiniFeature";

class FeatureComponent extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <TitleMiniFeature
              delay_time="0.1s"
              title="THẤU HIỂU SÂU SẮC"
              description="CHÚNG TÔI QUÝ TRỌNG THỜI GIAN VÀ SỰ QUAN TÂM CỦA BẠN NÊN TẤT CẢ NHỮNG THẮC MẮC VÀ YÊU CẦU TƯ VẤN SẼ LUÔN ĐƯỢC PHẢN HỒI NHANH CHÓNG. CHUYÊN VIÊN TƯ VẤN SẼ LUÔN ĐẢM BẢO NẮM RÕ Ý CỦA BẠN TRƯỚC TIÊN VÀ ĐỀ XUẤT CHO BẠN NHỮNG DỊCH VỤ PHÙ HỢP."
            />
            <TitleMiniFeature
              delay_time="0.3s"
              title="THẤU HIỂU SÂU SẮC"
              description="VỚI NHIỀU NĂM KINH NGHIỆM TRONG NGÀNH CƯỚI, TONY HƯỚNG ĐẾN MỘT QUY TRÌNH HOÀN HẢO ĐỂ GIẢI QUYẾT TẤT CẢ VẤN ĐỀ MỘT CÁCH TỐI ƯU NHẤT VÀ BẠN SẼ HÌNH DUNG ĐƯỢC CẦN CHUẨN BỊ GÌ CHO NGÀY CHỤP ẢNH CŨNG NHƯ NGÀY CƯỚI."
            />
            <TitleMiniFeature
              delay_time="0.5s"
              title="THẤU HIỂU SÂU SẮC"
              description="LÀ MỘT DỊCH VỤ ĐÒI HỎI SỰ SÁNG TẠO VÀ KỸ THUẬT NÊN TONY KHÔNG NGỪNG HỌC HỎI VÀ CẬP NHẬT XU HƯỚNG MỚI NHẤT ĐANG THỊNH HÀNH TRÊN THẾ GIỚI NHẰM MANG ĐẾN CHO KHÁCH HÀNG SẢN PHẨM CHẤT LƯỢNG TỐT NHẤT."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureComponent;
