import React from "react";
import "./stylecard.css";
import Cricket from "./image/cricket.png";
import football from "./image/football.jpg";
import basketball from "./image/basketball.jpg";
import tabletennis from "./image/badmintontable.jpg";
import hockey from "./image/hockey.jpg";
import vollyball from "./image/vollyball.jpg";

const Card = () => {
  return (
    <>
      <div>
        {/* <body style={{ backgroundImage: `url(${Bg})` }}> */}

        <section className="bg-image">
          <center className="heading">
            <h1>OUR EVENT </h1>
          </center>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={Cricket} alt="cricket" />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <h1 style={{ color: "white" }}>Cricket</h1>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={football} alt="football" />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <h1 style={{ color: "white" }}>Football</h1>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={basketball} alt="basketball" />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <h1 style={{ color: "white" }}>Basketball</h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={tabletennis} alt="tabletennis" />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <h1 style={{ color: "white" }}>Tabletennis</h1>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={hockey} alt="hockey" />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <h1 style={{ color: "white" }}>Hockey</h1>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={vollyball} alt="vollyball" />
                </div>
              </div>
              <ul className="sci">
                <li>
                  <h1 style={{ color: "white" }}>vollyball</h1>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
