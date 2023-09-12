import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            At BlueOwl, we are your one-stop shop for all things electronic. We
            pride ourselves on curating a vast and diverse selection of
            electronic devices to cater to the ever-evolving needs of tech
            enthusiasts, professionals, and everyday users alike. Step into the
            future of technology with us, where innovation meets convenience.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Bangalore, Karnataka, 560064</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0672 276 3456</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@bluowl.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            BLUEOWL STORE 2023 CREATED PREMIUM E-COMMERCE SOLUTIONS..
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
