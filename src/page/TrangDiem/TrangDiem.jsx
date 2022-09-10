import React, { Component } from "react";
import PageHeader from "../components/TilteCS";
import { Helmet } from "react-helmet";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { BrowserView, MobileView } from "react-device-detect";
import axios from "axios";

class TrangDiem extends Component {
  state = {
    itemData: [],
  };
  componentDidMount() {
    axios
      .get(`http://kanjostudio.com/list_api_kanjo/get_images/makeup`)
      .then((res) => {
        const itemData = res.data["images"];
        this.setState({ itemData });
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Trang điểm</title>
        </Helmet>
        <PageHeader title="Trang Điểm" />
        <div className="container-xxl py-5">
          <BrowserView>
            <ImageList variant="quilted" cols={4}>
              {this.state.itemData.map((item) => (
                <ImageListItem key={item.image_link}>
                  <ImageListItem key={item.image_link}>
                    <img
                      src={`${item.image_link}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt=""
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                    {/* <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}
                    /> */}
                  </ImageListItem>
                </ImageListItem>
              ))}
            </ImageList>
          </BrowserView>
          <MobileView>
            <ImageList variant="quilted" cols={2}>
              {this.state.itemData.map((item) => (
                <ImageListItem key={item.image_link}>
                  <ImageListItem key={item.image_link}>
                    <img
                      src={`${item.image_link}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  </ImageListItem>
                </ImageListItem>
              ))}
            </ImageList>
          </MobileView>
        </div>
      </div>
    );
  }
}

export default TrangDiem;
