import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
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
      <MessengerCustomerChat
        pageId="103029631106754"
        appId="982805379051894982805379051894982805379051894"
      />
    </div>
  );
}

export default App;
