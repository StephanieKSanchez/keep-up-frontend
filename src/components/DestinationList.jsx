import { useContext, useEffect } from "react";
import { Row } from "antd";
import DestinationCard from "./DestinationCard";
import { DestinationsContext } from "./DestinationContext";
import LogOutButton from "./LogOut";

function DestinationList() {
  const { destinations, setDestinations } = useContext(DestinationsContext);
  useEffect(() => {
    fetch("https://keep-up-sks.web.app/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch(console.error);
  }, [setDestinations]);
  return (
    <section style={{ marginTop: "60px" }}>
      <LogOutButton />
      <Row>
        {!destinations ? (
          <h2>Loading...</h2>
        ) : (
          destinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.id} />
          ))
        )}
      </Row>
    </section>
  );
}

export default DestinationList;
