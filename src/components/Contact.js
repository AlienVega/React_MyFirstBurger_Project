import React from "react";
import BannerImages from "../assets/banner.jpg";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImages})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen mail adresinizi giriniz"
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            id=""
            placeholder="lütfen mesajınızı giriniz"
            rows="6"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
