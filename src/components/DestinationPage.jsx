import { useParams } from "react-router-dom";

export default function DestinationPage() {
  const { destinationId } = useParams();
  return <h1>This destination: {destinationId}</h1>;
}
