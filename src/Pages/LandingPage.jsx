import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="we-do">
        <h1>OUR PROTOCOL</h1>
        <div className="we-do-sub">
          <div className="we-do-sub-sub">
            <img src="http://www.marinsunfarms.com/wp-content/uploads/noanti-268x179.png" />
            <p>
              <span>
                <b>NO ANTIBIOTICS OR HORMONES</b>
              </span>{" "}
              <br />
              Our meat and eggs are never raised with antibiotics or hormones.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="http://www.marinsunfarms.com/wp-content/uploads/humane-268x179.png" />

            <p>
              <span>
                <b>HUMANELY RAISED & HANDLED</b>
              </span>{" "}
              <br />
              Livestock are raised, handled and processed using proven low
              stress, humane practices.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="http://www.marinsunfarms.com/wp-content/uploads/farms-268x179.png" />
            <p>
              <span>
                <b>FROM LOCAL FAMILY FARMS</b>
              </span>{" "}
              <br />
              Farms are the lifeblood of a healthy food system responsibly
              embedding nature into the human experience.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="http://www.marinsunfarms.com/wp-content/uploads/sustainable-268x179.png" />
            <p>
              <span>
                <b>SUSTAINABLY RAISED </b>
              </span>{" "}
              <br />
              We believe in pasture focused production that promotes land
              management practices which, foster ecosystem resiliency.
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="http://www.marinsunfarms.com/wp-content/uploads/wholeanimal-268x179.png" />
            <p>
              <span>
                <b>WHOLE FAMILY BUTCHERY</b>
              </span>{" "}
              <br />
              From nose to tail we endeavor to use every part. Nothing goes to
              waste!
            </p>
          </div>

          <div className="we-do-sub-sub">
            <img src="http://www.marinsunfarms.com/wp-content/uploads/resilliant-268x179.png" />
            <p>
              <span>
                <b>PROCESSING RESILIENCY</b>
              </span>{" "}
              <br />
              By overseeing ALL of our own harvesting we set ourselves apart and
              can ensure uninterrupted fulfillment.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default LandingPage;
