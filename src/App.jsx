import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import SmsVerificationForm from "./pages/SMSVerification";

const App = () => {
  const [onWork, setWork] = useState(false);
  return (
    <>
      <Navbar setWork={setWork} onWork={onWork}/>
      {onWork ? <SmsVerificationForm /> : <LandingPage setWork={setWork}/>}
      <Footer />
    </>
  );
};

export default App;
