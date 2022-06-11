import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationCard from "./DestinationCard";

export default function DestinationPage() {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState();
  useEffect(() => {
    fetch(`https://keep-up-sks.web.app/destinations/${destinationId}`)
      .then((response) => response.json())
      .then((data) => setDestination(data))
      .catch(console.error);
  }, [destinationId]);
  return (
    <>
      <DestinationCard destination={destination} />
    </>
  );
}
