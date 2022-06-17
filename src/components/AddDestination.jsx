import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "../styling/addDestination.css";

export default function AddDestination() {
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = ({ name, beginDate, endDate, image, status }) => {
    const newDestination = { name, beginDate, endDate, image, status };
    fetch("https://keep-up-sks.web.app/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDestination),
    })
      .then(() => navigate("/destinations"))
      .catch(setError);
  };
  return (
    <section style={{ margin: "2em 1em" }} className="form2">
      <h1>Add Destination</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <Form onFinish={handleSubmit} className="form">
        <Form.Item name="name" type="text" label="Name:">
          <Input />
        </Form.Item>
        <br />
        <Form.Item name="beginDate" type="date" label="Begin Date:">
          <Input />
        </Form.Item>
        <br />
        <Form.Item name="endDate" label="End Date:" type="date">
          <Input />
        </Form.Item>
        <br />
        <Form.Item name="status" type="text" label="Status:">
          <Input />
        </Form.Item>
        <br />
        <Form.Item name="image" type="url" label="Photo:">
          <Input
            placeholder={"Paste the url for your destination's picture here"}
          />
        </Form.Item>
        <br />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
