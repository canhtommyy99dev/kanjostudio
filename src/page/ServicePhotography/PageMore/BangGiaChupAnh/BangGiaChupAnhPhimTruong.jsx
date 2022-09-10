import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";
import TitleLeft from "./Components/TitleLeft";

class BangGiaChupAnhPhimTruong extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Chụp Ảnh Phim Trường Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Chụp Ảnh Thời Trang" />
        <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
          <h1 className="display-6 mb-5">
            Bảng giá chụp ảnh phim trường tại Hưng Yên cực ưu đãi của Kanjo
            Studio
          </h1>
          <p>
            Chụp ảnh cưới phim trường là xu hướng chụp ảnh cưới được nhiều cặp
            đôi lựa chọn nhất hiện nay. Các phim trường được trang trí và xây
            dựng các concept chụp ảnh mang nhiều phong cách khác nhau. Tony hiểu
            bộ ảnh cưới không chỉ đơn giản có tác dụng lưu giữ những khoảnh khắc
            đáng nhớ trong ngày trọng đại mà còn có 1 giá trị về mặt tinh thần &
            kỷ niệm rất lớn để có thể lấy ra xem sau 1 khoảng thời gian về chung
            một nhà. Với kinh nghiệm hơn 10 năm trong ngành cưới, Kanjo sẽ là
            người bạn đồng hành chia sẻ cho bạn mọi thứ về việc chụp album cưới
            trọn gói nhé !
          </p>
        </div>
        <TitleLeft
          link_image="/img/image_category/album_Show2.jpg"
          title="ĐẶC TRƯNG CHỤP ẢNH CƯỚI TRỌN GÓI"
          descriptions="Chụp ảnh cưới phim trường là hình thức chụp ảnh cưới được hỗ trợ bởi ekip chụp ảnh cưới chuyên nghiệp tại 1 không gian phim trường có thiết kế, bối cảnh dàn dựng đầy đủ. So với các hình thức chụp ảnh cưới truyền thống hay chụp ảnh cưới ngoại cảnh thì chụp ảnh cưới phim trường mang tính độc đáo và nghệ thuật cao."
        />
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: 1500 }}>
              <h1 className="display-6 mb-5">
                <img
                  src="/img/image_category/bang8.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "600px",
                  }}
                />
                <br />
                <hr />
                <br />{" "}
                <img
                  src="/img/image_category/bang7.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "600px",
                  }}
                />
                <br />
                <hr />
                <br />
                <img
                  src="/img/image_category/bang1.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "600px",
                  }}
                />
                <br />
                <hr />
                <br />
                <img
                  src="/img/image_category/bang9.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "600px",
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BangGiaChupAnhPhimTruong;
