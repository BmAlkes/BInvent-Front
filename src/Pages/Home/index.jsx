import React from "react";
import Logo1 from "../../assets/Logo.png";
import heroImg from "../../assets/inv-img.png";
import { Link } from "react-router-dom";
import "./Home.scss";
import Footer from "../../Components/Footer";
import { ShowOnLogin, ShowOnLogout } from "../../Components/Protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          <img src={Logo1} />
        </div>
        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">DashBoard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
      <Footer />
    </div>
  );
};
const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};
export default Home;
