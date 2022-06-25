import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Upload, message } from "antd";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { DestinationsContext } from "./DestinationContext";

export default function UpdateDestination() {
  let navigate = useNavigate();
  const { destination, setDestination } = useContext(DestinationsContext);
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    fetch(`https://keep-up-sks.web.app/destinations/${destination.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(destination.id),
    });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setDestination({
      ...destination,
      [e.target.name]: newValue,
    });
  };

  return (
    <>
      <section>
        <div>
          <h3>Update your trip information below! </h3>
          <Form onFinish={handleUpdate}>
            <div>
              <Form.Item for="name">
                Name:
                <Input
                  name="name"
                  type="text"
                  value={destination.name}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="beginDate">
                Begin Date:
                <Input
                  name="beginDate"
                  type="text"
                  value={destination.beginDate}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="endDate">
                Begin Date:
                <Input
                  name="beginDate"
                  type="text"
                  value={destination.endDate}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item for="image">
                Photo:
                <Input
                  name="image"
                  type="url"
                  value={destination.image}
                  onChange={handleChange}
                />
              </Form.Item>
            </div>
            <br />
            <br />
            <Button
              onClick={() => {
                handleUpdate();
                navigate("/destinations");
              }}
              id="updateButton"
              htmlType="submit"
            >
              Update
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}
