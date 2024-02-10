import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Bannerimage from "../assets/burger2.jpg";
const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${Bannerimage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
