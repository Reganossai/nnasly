import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D"
        className="farm-about"
        alt="farm"
      />
      <div className="third-text">
        <h1>ABOUT US</h1>
        <p>LOCAL FOOD FOR A SUSTAINABLE FUTURE</p>
      </div>

      <div className="fourth-text">
        <h4>
          Nnasly California Farms is a start-up agro-based enterprise focused on
          animal farming – poultry, piggery, fish, and others. The company is a
          new venture powered by Nnasly Farms – a Nigerian farm operator based
          in Owerri, Imo State. Nnasly California Farms desires to replicate the
          parent company’s successful operations in California. The company
          plans to use the experience, capital and network of the promoter to
          build a successful farm in California. The promoter’s drive is ooted
          in hard work, humility, and purpose with the clear mission of playing
          a a key role in feeding the world’s growing population with
          well-raised and organically-healthy foods.{" "}
        </h4>
      </div>

      <div className="we-do">
        <h1>BEST PRACTICES</h1>
        <div className="we-do-sub">
          <div className="we-do-sub-sub">
            <img src="https://www.marinsunfarms.com/wp-content/uploads/Screen-Shot-2016-03-20-at-6.21.09-PM.png" />
            <h6>
              <span>
                <b>OUR SLAUGHTERHOUSE</b>
              </span>{" "}
              <br />
              We operate the last remaining USDA inspected slaughterhouse in the
              San Francisco Bay Area, a critical piece of infrastructure to
              ensure the long-term viability of local livestock and meat
              production.
            </h6>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://www.marinsunfarms.com/wp-content/uploads/Screen-Shot-2016-03-20-at-6.21.16-PM.png" />

            <h6>
              <span>
                <b>PROCESSING</b>
              </span>{" "}
              <br />
              Our butchers are masters of their craft and everything is done by
              hand.
            </h6>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://www.marinsunfarms.com/wp-content/uploads/Screen-Shot-2016-03-20-at-6.21.23-PM.png" />
            <h6>
              <span>
                <b>DIRECT DISTRIBUTION</b>
              </span>{" "}
              <br />
              Look out for our friendly white vans delivering Monday through
              Friday to wholesale customers around California. Our meat and eggs
              never leave our sight until they reach our customers kitchen.
            </h6>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://www.marinsunfarms.com/wp-content/uploads/Screen-Shot-2016-03-20-at-6.21.30-PM.png" />
            <h6>
              <span>
                <b>WASTE MANAGEMENT </b>
              </span>{" "}
              <br />
              We feel a deep responsibility to creatively manage waste and
              byproducts of meat production. As a result we work extra hard to
              find homes for all items that come from our production. Tallow
              production makes things like soap, fertilizers and biofuels
            </h6>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://www.marinsunfarms.com/wp-content/uploads/Screen-Shot-2016-03-20-at-6.21.41-PM.png" />
            <h6>
              <span>
                <b>CERTIFICATIONS</b>
              </span>{" "}
              <br />
              The slaughterhouse is USDA Certified Organic by Marin Organic
              Certified Agriculture and is Animal Welfare Approved.
            </h6>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://www.marinsunfarms.com/wp-content/uploads/framework.png" />
            <h6>
              <span>
                <b>FRAMEWORK</b>
              </span>{" "}
              <br />
              All of our products come from livestock raised with our strict
              protocols which have been developed to support our mission and
              values. Our top priorities are always grass fed, pasture raised
              and LOCAL but there are many other important parts of the process
            </h6>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
