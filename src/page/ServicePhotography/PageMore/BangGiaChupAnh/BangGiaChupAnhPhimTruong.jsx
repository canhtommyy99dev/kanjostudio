import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/TilteCS";
import axios from "axios";

class BangGiaChupAnhPhimTruong extends Component {
  state = {
    rendered: "",
    title: "",
    // bodyExtends: Helmet.bodyExtends;
  };
  componentDidMount() {
    axios
      .get(`https://kanjostudio.com/wp/wp-json/wp/v2/pages/158`)
      .then((res) => {
        const rendered = res.data["content"]["rendered"];
        const title = res.data["title"]["rendered"];
        this.setState({ rendered });
        this.setState({ title });
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`${this.state.title} | Kanjo Studio`}</title>
        </Helmet>
        <PageHeader title={this.state.title} />

        <div className="container-xxl py-5">
          <div className="container">
            <div
              dangerouslySetInnerHTML={{ __html: this.state.rendered }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BangGiaChupAnhPhimTruong;
