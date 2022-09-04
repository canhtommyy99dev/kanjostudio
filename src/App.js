import { BrowserRouter } from "react-router-dom";
import Footer from "./page/components/Footer";
import Navbar from "./page/components/Navbar";
import Topbar from "./page/components/Topbar";
import RouterLink from "./RouterLink";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <RouterLink />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
