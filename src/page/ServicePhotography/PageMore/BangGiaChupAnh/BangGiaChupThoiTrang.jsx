import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";
import TitleLeft from "./Components/TitleLeft";
import TitleRight from "./Components/TitleRight";

class BangGiaChupThoiTrang extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Chụp Ảnh Thời Trang Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Chụp Ảnh Thời Trang" />
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
        <TitleLeft
          link_image="/img/image_category/thoitrang1.jpg"
          title="Sự sáng tạo luôn cần thiết"
          descriptions="Trong cuộc sống hằng ngày, có quá nhiều dấu ấn bạn muốn lưu giữ theo cách vẹn tròn và thân thương nhất. Và như để thỏa ước muốn này, hàng loạt dịch vụ chụp ảnh gia đình ra đời, giúp bạn lưu trữ những khoảnh khắc của từng thành viên trong gia đình để rồi hai, ba mươi năm nữa, thậm chí nửa thế kỷ nữa vẫn vẹn nguyên giá trị, thổn thức từng nhịp đập mỗi khi ta ngắm nhìn từng bức ảnh."
          descriptions1="Hình ảnh chụp tại studio sẽ rất bắt mắt do sử dụng ánh sáng nhân tạo (đèn chụp studio), chất lượng hình ảnh rất cao, phù hợp cho việc in ấn, in ảnh treo tường."
        />
        <TitleRight
          link_image="/img/image_category/thoitrang2.jpg"
          title="Chú ý vào từng chi tiết:"
          descriptions="Thường khi chụp ảnh thời trang, người ta hay cố gắng sắp xếp thật hoàn chỉnh rồi lại đưa cả đối tượng vào khung hình. Nhưng họ có thể quên đi những chi tiết rất nhỏ như một vết bẩn trên tay áo, một nếp nhăn ở ống quần. Phải chấn chỉnh và loại bỏ ngay những điều này."
        />
        <TitleLeft
          link_image="/img/image_category/thoitrang3.jpg"
          title=" Bối cảnh hay bố cục cần thiết"
          descriptions="Nếu ở studio, việc sắp xếp diễn ra khá dễ dàng, chỉ còn chờ vào khả năng người bấm máy. Nhưng nếu ở ngoài, bối cảnh phải tùy thuộc và quần áo hay ý đồ mà nhiếp ảnh gia muốn bộ ảnh của mình trở nên như thế nào. Việc sắp đặt bố cục cũng quan trọng không kém. Tầm nhìn, phong cảnh, dáng điệu, tất cả đều nói lên khả năng của bạn."
        />
        <TitleRight
          link_image="/img/image_category/thoitrang4.jpg"
          title="Đủ thiết bị"
          descriptions="Hãy đảm bảo là bạn có đủ thiết bị và những phụ kiện cần thiết. Trong một số trường hợp chụp ở studio hay ngoài trời, vẫn cần có dụng cụ hắt sáng để tạo sự cân bằng cho bức ảnh. Hoặc giả nếu có trong tay một máy ảnh Canon loại đắt tiền nhất nhưng chưa hẳn có thể tạo ra một bức hình đẹp nếu không có sự trợ giúp của những chân máy ảnh chống rung."
        />
        <TitleLeft
          link_image="/img/image_category/thoitrang5.jpg"
          title="Lấy nét"
          descriptions="Lấy nét bằng tay hay lấy nét tự động. Theo kinh nghiệm, việc lấy nét bằng tay diễn ra khi có sự thay đổi về kiểu mẫu, tư thế, hướng sáng. Còn nếu trong điều kiện một kiểu nhiều ảnh thì hãy để chế độ mặc định. Thực ra, những máy ảnh hiện đại ngày nay đều có khả năng tự đo sáng và lấy nét khá tốt. Chủ yếu là trong một vài trường hợp có sự thay đổi rõ rệt và bạn muốn chắc chắn theo đúng ý đồ thì hãy chuyển sang chế độ lấy nét tay."
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

export default BangGiaChupThoiTrang;
