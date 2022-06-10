import { useState } from "react";
import { Col, Card, Space, DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const { RangePicker } = DatePicker;
const { Option } = Select;

function handleChange(optionValue) {
  console.log(`selected ${optionValue}`);
}

export default function DestinationCard({ destination }) {
  let navigate = useNavigate();
  const [beginDate, setBeginDate] = useState();
  const [endDate, setEndDate] = useState();
  console.log(beginDate);
  console.log(endDate);
  return (
    <Col style={{ width: "300px", margin: "1.5em" }} key={destination.id}>
      <Card
        loading={!destination}
        onClick={() => navigate(`/destinations/${destination.id}`)}
        cover={
          <img
            alt={`Image representing ${destination.name}`}
            src={destination.image}
          />
        }
        hoverable
      >
        <Meta title={destination.name} />
        <br />
        <p>
          <Space direction="vertical" description="RangePicker">
            <RangePicker
              onCalendarChange={(newValue) => {
                setBeginDate(newValue[0]._d);
                setEndDate(newValue[1]._d);
              }}
            />
          </Space>
        </p>
        <p>
          <Select
            placeholder="Status"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option optionValue="upcoming">Upcoming</Option>
            <Option optionValue="in progress">In Progress</Option>
            <Option optionValue="completed">Completed</Option>
          </Select>
        </p>
      </Card>
    </Col>
  );
}
