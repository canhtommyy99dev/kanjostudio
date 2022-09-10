import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";
import TitleLeft from "./Components/TitleLeft";
import TitleRight from "./Components/TitleRight";

class BangChupEmBe extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Chụp Ảnh Em Bé Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Chụp Ảnh Em Bé" />
        <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
          <h1 className="display-6 mb-5">
            Bảng giá chụp ảnh em bé tại Hưng Yên cực ưu đãi của Kanjo Studio
          </h1>
          <p>
            Nắm bắt được xu hướng chụp hình cho bé đang nở rộ hiện nay, Kanjo
            Studio cung cấp cho các mẹ gói dịch vụ chụp hình cho bé bao gồm các
            lựa chọn bên dưới:
          </p>
        </div>
        <TitleLeft
          link_image="/img/image_category/baby1.jpg"
          title="Dịch vụ chụp hình cho bé tại Studio"
          descriptions="Trong cuộc sống hằng ngày, có quá nhiều dấu ấn bạn muốn lưu giữ theo cách vẹn tròn và thân thương nhất. Và như để thỏa ước muốn này, hàng loạt dịch vụ chụp ảnh gia đình ra đời, giúp bạn lưu trữ những khoảnh khắc của từng thành viên trong gia đình để rồi hai, ba mươi năm nữa, thậm chí nửa thế kỷ nữa vẫn vẹn nguyên giá trị, thổn thức từng nhịp đập mỗi khi ta ngắm nhìn từng bức ảnh."
          descriptions1="Hình ảnh chụp tại studio sẽ rất bắt mắt do sử dụng ánh sáng nhân tạo (đèn chụp studio), chất lượng hình ảnh rất cao, phù hợp cho việc in ấn, in ảnh treo tường."
        />
        <TitleRight
          link_image="/img/image_category/baby2.jpg"
          title="Dịch vụ chụp hình cho bé ngoại cảnh:"
          descriptions="Đối với những bé đã chập chững biết đi (>1,5 tuổi) chúng tôi thường khuyên ba mẹ bé chọn gói chụp ảnh ngoại cảnh. Vì khi chụp ngoại cảnh thì không gian thoáng đãng, lúc đó bé sẽ tự do vui chơi và nhiếp ảnh sẽ dễ dàng bắt được những khoảnh khắc đẹp."
          descriptions1="Chụp hình cho bé quan trọng là bắt được khoảnh khắc của bé. Mỗi khi bé cười, khóc, nũng nĩu đều rất đáng yêu. Vì thế để bắt được những góc ảnh này đòi hỏi nhiếp ảnh phải tinh tế và có sự quan sát kỹ lưỡng. Bạn hãy xem những góc chụp chúng tôi chụp cho bé bên dưới sẽ thấy tại HThao Studio, mỗi bức ảnh của bé được chụp ra đều mang một sự hồn nhiên nhất định."
        />
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

export default BangChupEmBe;
