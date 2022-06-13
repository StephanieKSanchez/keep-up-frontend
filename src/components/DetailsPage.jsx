import { Carousel } from "antd";
import { useParams } from "react-router-dom";
import { DestinationsContext } from "./DestinationContext";

export default function DetailsPage({ destination }) {
  //   const { destination, setDestination } = useContext(DestinationsContext);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    destination && (
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <p> {destination.gettingThere} </p>
            <p> {destination.gettingThereDetails} </p>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <p> {destination.lodging} </p>
            <p> {destination.lodgingDetails} </p>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <p> {destination.gettingAround} </p>
            <p> {destination.gettingAroundDetails} </p>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <p> {destination.ChildOrPetCare} </p>
            <p> {destination.ChildOrPetCareDetails} </p>
          </h3>
        </div>
      </Carousel>
    )
  );
}
