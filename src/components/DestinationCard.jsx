import { Col, Card, Space, DatePicker } from "antd";
const { Meta } = Card;

const { RangePicker } = DatePicker;

export default function DestinationCard({ destination }) {
  return (
    <Col style={{ width: "300px", margin: "1.5em" }} key={destination.id}>
      <Card
        cover={
          <img
            alt={`Image representing ${destination.name}`}
            src={destination.image}
          />
        }
        hoverable
      >
        <Meta title={destination.name} />
        <p>
          <Space direction="vertical" description="RangePicker">
            <RangePicker />
          </Space>
        </p>
        <p>Status: {destination.status}</p>
      </Card>
    </Col>
  );
}
