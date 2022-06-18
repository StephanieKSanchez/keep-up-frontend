import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import "../styling/hero.css";

export default function Hero() {
  const { user } = useContext(UserContext);
  return (
    <div className="hero">
      <section className="hero-section">
        {/* <img
          src="https://s.inspirockcdn.com/images/home/hero-klarna.png"
          className="Hero-image"
        /> */}
        <div className="hero-title">
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
        <Link to={!user ? "/login" : "/destinations"}>
          <button className="hero-link-button">Get Started</button>
        </Link>
        {/* <div className="hero-pic">
        <img
          src="../assets/group.jpg"
          alt="Silhouette photo of six persons on top of mountain"
        />
      </div> */}
      </section>
    </div>
  );
}
