import { useEffect, useState } from "react";
import { Col, Row, Card } from "antd";

function DestinationList() {
  const [destinations, setDestinations] = useState();
  useEffect(() => {
    fetch("https://keep-up-sks.web.app/destinations")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch(console.error);
  }, []);
  return (
    <section>
      <Row gutter={16}>
        {!destinations ? (
          <h2>Loading...</h2>
        ) : (
          destinations.map((destination) => (
            <Col style={{ width: "300px" }} key={destination.id}>
              <Card title={destination.name} hoverable>
                <p>Start Date: {destination.startDate}</p>
                <p>End Date: {destination.endDate}</p>
                <p>Status: {destination.status}</p>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </section>
  );
}

export default DestinationList;
