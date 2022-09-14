import React, { Component } from "react";
import { Helmet } from "react-helmet";
import AboutInStudio from "./components/AboutInStudio";
import Carousel from "./components/Carousel";
import QuickWizard from "./components/QuickWizard";
import PhimCuoiStudio from "./components/PhimCuoiStudio";
import KinhNghiemCuoi from "./components/KinhNghiemCuoi";
///
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

class HomePage extends Component {
  state = {
    open: false,
  };

  setOpen() {
    this.open = true;
  }
  setClose() {
    this.open = true;
  }
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onButtonClick1 = this._onButtonClick1.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  _onButtonClick1() {
    this.setState({
      showComponent: false,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>Kanjo Studio</title>
        </Helmet>
        <Button variant="outlined" onClick={this._onButtonClick}>
          Slide in alert dialog
        </Button>

        {/* <Button onClick={this._onButtonClick}>Button</Button> */}
        {/* {this.state.showComponent ? <div>vảy</div> : null} */}
        <Dialog
          open={this.state.showComponent}
          TransitionComponent={Transition}
          keepMounted
          onClose={true}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._onButtonClick1}>Disagree</Button>
            <Button onClick={this._onButtonClick1}>Agree</Button>
          </DialogActions>
        </Dialog>
        <Carousel />
        <QuickWizard />
        <AboutInStudio />
        <PhimCuoiStudio />
        <KinhNghiemCuoi />
      </div>
    );
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const handleClickOpen = () => {
//   this.state.open = true;
// };

// const handleClose = () => {
//   this.state.open = false;
// };
export default HomePage;
