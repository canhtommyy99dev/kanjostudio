import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";
// import TitleLeft from "./Components/TitleLeft";
// import TitleRight from "./Components/TitleRight";

class BangGiaChupNgoaiCanh extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Chụp Ảnh Ngoại Cảnh Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Chụp Ảnh Ngoại Cảnh" />
        <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
          <h1 className="display-6 mb-5">Bảng Giá Chụp Ngoại Cảnh</h1>
          <p>
            Khi nhắc đến giá chụp ảnh cưới Ngoại Cảnh , nhiều cặp đôi nghĩ rằng
            đây là 1 gói chụp ảnh cưới khá đắt đỏ chỉ dành cho những người giàu.
            Với sự phát triển như hiện nay như phương tiện giao thông dễ dàng
            hơn, dịch vụ chụp hình cưới Ngoại Cảnh cũng bắt đầu rẻ hơn để có thể
            tiếp cận cho tất cả các cặp đôi sắp cưới muốn sở hữu 1 bộ ảnh đẹp
            khó quên.
          </p>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: 1500 }}>
              <h1 className="display-6 mb-5">
                <img
                  src="/img/image_category/bang5.jpg"
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
                  src="/img/image_category/bang6.jpg"
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
                  src="/img/image_category/bang4.jpg"
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
                  src="/img/image_category/bang2.jpg"
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
                  src="/img/image_category/bang3.jpg"
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

export default BangGiaChupNgoaiCanh;
