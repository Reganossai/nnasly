import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Meat = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D"
        className="farm-about"
        alt="farm"
      />
      <div className="third-text">
        <h1>OUR MEAT</h1>
        <p>HANDLED WITH CARE AT EVERY STEP</p>
      </div>

      <div className="we-do">
        <div className="we-do-sub">
          
          <div className="we-do-sub-sub">
            <img src="https://images.unsplash.com/photo-1547637205-fde0c9011f9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TEFNQiUyMG1lYXR8ZW58MHx8MHx8fDA%3D" alt="lamb"/>
            <h2>LAMB</h2>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29hdCUyMG1lYXR8ZW58MHx8MHx8fDA%3D" alt="goat"/>
           <h2>GOAT</h2>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://images.unsplash.com/photo-1691410065039-25bdbb56c23b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcmt8ZW58MHx8MHx8fDA%3D" alt="pork"/>
            <h2>PORK</h2>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://plus.unsplash.com/premium_photo-1664527009531-9e41adb0cdfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D" alt="chicken" />
            <h2>CHICKEN</h2>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://images.unsplash.com/photo-1723893905879-0e309c2a8e06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJFRUZ8ZW58MHx8MHx8fDA%3D" alt="beef" />
            <h2>BEEF</h2>
          </div>

          <div className="we-do-sub-sub">
            <img src="https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D" alt="eggs" />
            <h2>EGGS</h2>
          </div>
        </div>
      </div>

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

export default Meat;
