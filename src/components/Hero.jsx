import React from "react";
import "../css/hero.css";
import { ReactComponent as Facebook } from '../images/facebook.svg'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Insta } from '../images/insta.svg'

export default function Hero() {
  return (
    <div className="heroMainDiv">
      <p className="heading1">
        It’s time to trade, the <span className="future">future.</span>
      </p>
      <p className="trade">
        Trade BTC, ETH Futures with 125x leverage and earn rewards.
      </p>
      <div className="backgroundshadow">
        <div className="background1"></div>
      </div>

      <div className="frame1">
        <div className="frameDiv">
          <h3>00%</h3>
          <p>Conversion Fee </p>
        </div>
        <div className="rightBorder"></div>
        <div className="frameDiv">
          <h3>500 Mn+</h3>
          <p>Lifetime Volume Traded</p>
        </div>
        <div className="rightBorder"></div>
        <div className="frameDiv">
          <h3>250+</h3>
          <p>Total Tradable Pairs</p>
        </div>
        <div className="rightBorder"></div>
        <div className="frameDiv">
          <h3>15000+</h3>
          <p>Traders</p>
        </div>
      </div>

      <div className="frame2">
        <img
          className="phone"
          src={require("../images/phone1.png")}
          alt="img"
        />
        <img
          className="phone"
          src={require("../images/phone2.png")}
          alt="img"
        />
        <img
          className="phone"
          src={require("../images/phone3.png")}
          alt="img"
        />
      </div>

      <div className="frame3">
        <h2>
          Trade More. <span className="payLess">Pay Less.</span>
        </h2>
        <p>Our low Fees Supercharge Your Profits</p>
      </div>

      <div className="frame4">
        <img
          className="img"
          src={require("../images/Frame 1000005525.png")}
          alt="img"
        />
      </div>

      <div className="frame5">
        <h2>
          Explore the Markets <br /> like it is your{" "}
          <span className="playground">Playground.</span>
        </h2>
        <p>Search for your favorite coins and stay ahead of the market</p>
        <img
          className="img"
          src={require("../images/Group 1000003815.png")}
          alt="img"
        />
        <button>EXPLORE MARKET</button>
      </div>

      <div className="frame6">
        <h1>
          <span className="unlock">Unlock</span> New Frontiers.
        </h1>
        <p>
          Are you a stock trader looking for new opportunities to make <br />{" "}
          money? We got you covered!
        </p>

        <div className="frame">
          <h3>
            Same <br /> Strategies
          </h3>
          <div className="rightBorder"></div>
          <h3>
            Same <br /> Indicators
          </h3>
          <div className="rightBorder"></div>
          <h3>
            Better <br /> Leverage
          </h3>
          <div className="rightBorder"></div>
          <h3>
            24x7 <br />
            Trading
          </h3>
          {/* </div> */}
        </div>
        <div>
          <img
            className="img"
            src={require("../images/Group 1000003839.png")}
            alt="img"
          />
        </div>
      </div>

      <div className="frame7">
        <h3>Start Small. Earn Big.</h3>
        <p>
          Deposity a minimum of 1000 and get a Deposit bonus + <br /> dedicagted
          relationship manager
        </p>

        <div className="frame">
          <div className="div1">
            <img src={require("../images/twentyfivePer.png")} alt="img" />
            <h2>
              Deposit <br /> Bonus.
            </h2>
            <p>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </p>
          </div>
          <div className="div2">
            <img src={require("../images/Manager.png")} alt="img" />
            <h2>
              Dedicated <br /> Relationship Manager.
            </h2>
            <p>
              Our assets' liquidity is unmatched in the market, with a small
              bid-ask spread and a well-balanced order book.
            </p>
          </div>
        </div>
      </div>

      <div className="frame8">
        <h3>
          Derivates made simple <br /> in <span className="three">3 Easy</span>{" "}
          Steps
        </h3>
        <div className="frame">
          <div className="div1">
            <img
              className="img"
              src={require("../images/iPhone 14 Pro Space Black Mockup.png")}
              alt="img"
            />
          </div>
          <div className="div2">
            <img src={require("../images/Group 1000003801.png")} alt="img" />
            <h3>Create an Account</h3>
            <p>
              Register & Complete your <br /> Verification in less than 2
              minutes
            </p>
            <button>TRADE NOW</button>
          </div>
        </div>
        <div className="hline"></div>
      </div>

      <div className="frame8">
        <div className="frame">
          <div className="div1">
            <img
              className="img"
              src={require("../images/iPhone 14 Pro Space Black Mockup (1).png")}
              alt="img"
            />
          </div>
          <div className="div2">
            <img src={require("../images/Group 626789 (1).png")} alt="img" />
            <h3>Deposit Funds</h3>
            <p>
              Add funds quickly using a variety <br /> of payment methods
            </p>
            <button>TRADE NOW</button>
          </div>
        </div>
        <div className="hline"></div>
      </div>

      <div className="frame8">
        <div className="frame">
          <div className="div1">
            <img
              className="img"
              src={require("../images/iPhone 14 Pro Space Black Mockup (2).png")}
              alt="img"
            />
          </div>
          <div className="div2">
            <img
              src={require("../images/Group 1000003802 (1).png")}
              alt="img"
            />
            <h3>Become a Trader</h3>
            <p>
              Choose Your Trading Pair & Trade <br /> Seamlessly
            </p>
            <button>TRADE NOW</button>
          </div>
        </div>
      </div>

      <div className="frame9">
        <img
          className="img"
          src={require("../images/Frame 1000005536 (1).png")}
          alt="img"
        />
      </div>

      <div className="frame10">
        <h3>Don’t take our word for it.</h3>
        <p>
          Hear it from our expert community of traders who have made insane
          amounts in a short amount of time
        </p>
        <div className="card-main-Div">
          <div className="card">
            <p>
              As someone who's always looking for the next big thing, I was
              really excited to try out Density’s crypto futures trading
              platform. And I have to say, it definitely lived up to my
              expectations.
            </p>

            <div className="card-inside-div">
              <div className="title">
                <h3>Prakash Jamatia.</h3>
                <p>Founder, Tradeshala</p>
              </div>
              <img
                src={require("../images/unsplash_iEEBWgY_6lA.png")}
                alt="img"
              />
            </div>
          </div>

          <div className="card">
            <p>
              I'm not a seasoned trader, but this website has made it easy for
              me to get started with crypto futures trading. Their KYC was very
              fast and the educational resources were really helpful.
            </p>

            <div className="card-inside-div">
              <div className="title">
                <h3>Shambhavi Nayak.</h3>
                <p>Commodity Trader</p>
              </div>
              <img
                src={require("../images/unsplash_o5NBw8GTnMc.png")}
                alt="img"
              />
            </div>
          </div>

          <div className="card">
            <p>
              I've been using this platform for a few months now and it's been a
              great experience. I was delighted to see all the major crypto
              coins listed on Density Exchange.
            </p>

            <div className="card-inside-div">
              <div className="title">
                <h3>Arjun Naik.</h3>
                <p>Equity Trader</p>
              </div>
              <img
                src={require("../images/unsplash_ZHvM3XIOHoE.png")}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="frame11">
        <img src={require("../images/Frame 1000005536 (2).png")} alt="img"/>
        <img src={require("../images/Frame 1000005536 (3).png")} alt='img'/>
      </div>

      <div className="frame8">
        <h3 className="meet">
          Meet the <span className="future">Visionaries</span> behind Density.
        </h3>
        <img
          style={{ width: "75%" }}
          src={require("../images/Frame 1000005669.png")} alt="img"
        />
      </div>

      <div className="frame13">
        <h3>Get started now.</h3>
        <img src={require('../images/Group 1000003804 (1).png')} alt="img"/>
        <button>Start Trading</button>
      </div>

      <div className="frame12">
        <img src={require("../images/Group 626657.png")} alt="img" />
        <div className="navigation">
          <ul>
            <li>Blog</li>
            <li>Fees</li>
            <li>Leaderboard</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <p>
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
        </p>
        <div className="social">
          <Facebook />
          <Twitter />
          <Linkedin />
          <Insta />
                  
        </div>
      </div>
    </div>
  );
}
