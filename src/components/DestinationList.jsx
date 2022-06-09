import { useEffect, useState } from "react";
import { Col, Row, Card, Space, DatePicker } from "antd";

const { RangePicker } = DatePicker;

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
            <Col
              style={{ width: "300px", margin: "1.5em" }}
              key={destination.id}
            >
              <Card
                cover={
                  <img
                    alt={`Image representing ${destination.name}`}
                    src={destination.image}
                  />
                }
                hoverable
              >
                <Card.Meta title={destination.name} />
                <p>
                  <Space direction="vertical" description="RangePicker">
                    <RangePicker />
                  </Space>
                </p>
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
