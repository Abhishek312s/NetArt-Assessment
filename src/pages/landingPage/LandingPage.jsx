import React from "react";
import "./landingPage.css";
import trophyImg from "../../assets/1.png";
import peopleImg from "../../assets/2.png";
import productsImg from "../../assets/3.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Navbar />

      <main className="main-container">
        <section className="hero-section">
          <div className="img-container">
            <img src={trophyImg} alt="Trophy" />
          </div>
          <div className="content-container">
            <p>
              <b>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </b>
            </p>

            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>

            <img src={peopleImg} alt="" />

            <p>
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha &#38; Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </p>
          </div>
        </section>

        <section className="products-container">
          <div className="punch-line">
            <p>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </p>
          </div>

          <div className="productsImg-container">
            <img src={productsImg} alt="" />
            <p>
              Valves - Pumps - Pipes - IoT Drives &#38; Controllers - Wires
              &#38; Cables - Solar Systems - Motors
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
