import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Onboarding from '../pages/onboarding';
import Header from "../components/header/header";
import LeftSideBar from "../components/sidebar/leftsideBar";
import Footer from "../components/footer/footer";
import Dashboard from "../pages/dashboard";

function PageRouting() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header/>
        <div className="flex flex-1">
          <LeftSideBar />
          <div className="flex-1 bg-black p-4">
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default PageRouting