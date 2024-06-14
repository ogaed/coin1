import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import BarazaComponent from "./Pages/About";
import PublishStoryComponent from "./Pages/Share";
import BlogCardsComponent from "./Pages/Barazas";
import ArticleComponent from "./Pages/Baraza";
import WalletPopup from "./components/Wallet";
import WhitePaper from "./Pages/Whitepaper";
import Roadmap from "./Pages/Roadmap";
import HowItWorks from "./Pages/Technical";

const App = () => {
  const [principal, setPrincipal] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  //const [showPurchasePopup, setShowPurchasePopup] = useState(false);

  // const handleConnectWallet = () => {
  //   setShowPopup(true);
  // };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePurchasePopup = () => {
   // setShowPurchasePopup(true);
  };

  return (
    <BrowserRouter>
      {showPopup && (
        <WalletPopup
          principal={principal}
          setPrincipal={setPrincipal}
          onClose={handleClosePopup}
          handlePurchasePopup={handlePurchasePopup}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<BarazaComponent />} />
        <Route path="/Share" element={<PublishStoryComponent principal={principal} setPrincipal={setPrincipal} />} />
        <Route path="/Barazas" element={<BlogCardsComponent />} />
        <Route path="/Whitepaper" element={<WhitePaper />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/How it works" element={<HowItWorks />} />
        <Route path="/Barazas/:barazaId" element={<ArticleComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
