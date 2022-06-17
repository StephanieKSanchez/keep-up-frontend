import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import "../styling/hero.css";

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <section className="hero-section">
      <div>
        <div className="hero-tile">
          <h1>
            The place
            <br />
            for keeping
            <br />
            travel details together
          </h1>
        </div>
        <div className="hero-text">
          Keep up
          <br />
          with your travel
        </div>
        {/* {}

        <Link
          to={!user ? "/login" : "/destinations"}
          className="mr-auto text-center my-8 font-bold hover:opacity-80 bg-black py-2 px-4 text-white rounded-lg active:scale-110 transition-all"
        >
          Get Started
        </Link> */}
      </div>
      {/* <div className="hero-pic">
        <img
          src="../assets/group.jpg"
          alt="Silhouette photo of six persons on top of mountain"
        />
      </div> */}
    </section>
  );
}
