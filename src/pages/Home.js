import React from "react";
import Footer from "../components/Footer";
import HomeContainer from "../components/HomeContainer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="contents">
        <div className="contents__heading">Products</div>
        <div className="products">
          <HomeContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
