import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";
import TitleLeft from "./Components/TitleLeft";
import TitleRight from "./Components/TitleRight";

class BangGiaChupAnhDoanhNhan extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Bảng Giá Chụp Ảnh Doanh Nhân Kanjo Studio</title>
        </Helmet>
        <PageHeader title="Bảng Giá Chụp Ảnh Doanh Nhân" />
        <div className="text-center mx-auto" style={{ maxWidth: 1000 }}>
          <h1 className="display-6 mb-5">
            Bảng giá chụp ảnh gia đình tại Hưng Yên cực ưu đãi của Kanjo Studio
          </h1>
          <p>
            Ảnh doanh nhân là thể loại nằm trong nhóm ảnh chân dung nghề nghiệp
            (business potrait). Dù là doanh nghiệp lớn hay nhỏ thì cũng nên có
            một bộ ảnh chung style của các doanh nhân để làm nổi bật hình ảnh
            doanh nghiệp của bạn.
            <br />
            Ví dụ, các công ty về tài chính- ngân hàng, sàn chứng khoán… thì
            nhân viên thường sử dụng trang phục vest đen cùng với áo trắng. Như
            vậy, khi bạn gửi hồ sơ công ty hoặc khách hàng thấy avatar của bạn,
            họ cũng sẽ tin tưởng và thấy được sự chuyên nghiệp của công ty bạn.
          </p>
        </div>
        <TitleLeft
          link_image="/img/image_category/doanhnghiep1.jpg"
          title="Giá trị bộ ảnh chân dung mang lại cho bạn & doanh nghiệp bạn."
          descriptions="Một bộ ảnh chân dung nghề nghiệp sẽ tạo cho khách hàng thấy được sự chuyên nghiệp của công ty/ doanh nghiệp bạn. Sử dụng đồng nhất hình ảnh thể hiện khát khao cùng chung một mục tiêu. Đối tác làm ăn nhìn qua hình ảnh công ty cũng tin tưởng bạn. Khách hàng nhìn vào sẽ đánh giá sự chuyên nghiệp của doanh nghiệp bạn."
          descriptions1="Việc mỗi công ty nên có một bộ ảnh nghề nghiệp cho nhân viên giống như mỗi công ty có một cái logo riêng vậy đó. Mục đích là để nhận diện thương hiệu. Thương hiệu đi kèm với hình ảnh, hình ảnh đó càng chuyên nghiệp bao nhiêu thì thương hiệu của bạn càng dễ lan tỏa bấy nhiêu."
          descriptions2="Hơn nữa, hiện nay làm việc qua mạng đang ngày càng phổ biến. Sử dụng hình ảnh chuyên nghiệp làm profile cá nhân sẽ được đánh giá cao hơn. Ngay cả việc bạn sử dụng avatar là hình ảnh chuyên nghiệp thì khách hàng đối tác họ sẽ có cái nhìn thiện cảm với bạn hơn."
        />
        <TitleRight
          link_image="/img/image_category/doanhnghiep2.jpg"
          title="Giải pháp để chụp ảnh doanh nhân một cách thuận tiện nhất "
          descriptions="Nếu bạn là doanh nhân nhỏ lẻ: Giải pháp chụp ảnh tại studio sẽ ưu tiên hơn. Bởi vì khi chụp tại studio thì chúng tôi bố trí đèn đầy đủ và nhiều phông nền cũng như nhiều trang phục. Bạn sẽ được chụp nhiều style với phong cách rất chuyên nghiệp. "
          descriptions1="Nếu bạn làm ở công ty đông người: Giải pháp thuê studio tới công ty chụp sẽ tiết kiệm và thuận tiện hơn. Chúng tôi sẽ mang phông nền di động, đèn chụp tới công ty bạn setup ánh sáng. Mỗi nhân viên sẽ được chụp từ 8~10 kiểu ảnh khác nhau. Hình ảnh sẽ được chỉnh sửa cẩn thận sau khi chụp để thể hiện sự chuyên nghiệp của một Bussiness Man. "
          descriptions2="Nếu bạn muốn chụp hình ảnh và sản phẩm của mình: Giải pháp là chụp tại studio hoặc phòng chứa sản phẩm có tính lặp lại. Tại sao phải có tính lặp lại (pattern)? Theo một nghiên cứu trong nhiếp ảnh, hiệu ứng lặp lại sẽ kích thích người xem nhớ lâu hơn chi tiết được lặp lại trong nền ảnh. Hay nói cách khác, đây là một cách để PR sản phẩm của bạn tới khách hàng."
        />
        <TitleLeft
          link_image="/img/image_category/doanhnghiep3.jpg"
          title="Các lưu ý nhỏ khi chụp ảnh doanh nhân"
          descriptions="Đối với chụp ảnh doanh nhân, không cần thiết phải trang điểm cầu kỳ. Quan trọng là phải thể hiện được độ chân thực và style hình ảnh doanh nhân đó liên quan đến công việc."
          descriptions1="Sử dụng các phụ kiện để tăng sự nam tính cho doanh nhân nam: Đồng hồ, vest kèm cà vạt, máy tính, tủ sách (nếu ở phòng làm việc)."
          descriptions2="Đối với doanh nhân nữ thì cần làm tóc gọn gàng, sử dụng dây chuyền, đồng hồ, sách, ngòi viết…làm phụ kiện khi chụp."
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

export default BangGiaChupAnhDoanhNhan;
