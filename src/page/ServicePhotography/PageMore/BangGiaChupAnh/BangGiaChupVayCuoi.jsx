import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";

class BangGiaChupVayCuoi extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Chụp Ảnh Váy Cưới Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Chụp Ảnh Váy Cưới" />
        <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
          <h1 className="display-6 mb-5">
            Bảng giá chụp ảnh thời trang tại Hưng Yên cực ưu đãi của Kanjo
            Studio
          </h1>
          <p>
            Nếu bạn có ý định trở thành một nhiếp ảnh gia chuyên chụp thời
            trang, hay đơn giản là bạn có một chiếc máy ảnh và muốn tạo ra những
            tác phẩm thực sự khác biệt, thì những bí quyết để chụp ảnh thời
            trang dưới đây có thể giúp bạn tạo sự đột phá.
          </p>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: 1500 }}>
              <h1 className="display-6 mb-5">
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

export default BangGiaChupVayCuoi;
