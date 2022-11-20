import React from "react";
import "./stylecard.css";
import Cricket from "./cricket.png";
import Bg from "./image/cardbg.jpg";

const Card = () => {
  return (
    <>
      <div>
        <body style={{ backgroundImage: `url(${Bg})` }}>
          <section>
            <div class="container">
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={Cricket} alt="basketball" />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <h1 style={{ color: "white" }}>Cricket</h1>
                  </li>
                </ul>
              </div>
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img
                      src="https://image.flaticon.com/icons/png/256/4213/4213736.png"
                      alt="football"
                    />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <h1 style={{ color: "white" }}>Football</h1>
                  </li>
                </ul>
              </div>
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img
                      src="https://image.flaticon.com/icons/png/256/4213/4213641.png"
                      alt="cricket"
                    />
                  </div>
                </div>
                <ul class="sci">
                  <li>
                    <h1 style={{ color: "white" }}>Basketball</h1>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </body>
      </div>
    </>
  );
};

export default Card;
