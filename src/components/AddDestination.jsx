import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

export default function AddDestination() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDestination = { name, beginDate, endDate, image };
    fetch("https://keep-up-sks.web.app/destinations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDestination),
    })
      .then(() => navigate("/"))
      .catch(setError);
  };
  return (
    <section style={{ margin: "2em 1em" }}>
      <h1>Add Destination</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <Form onFinish={handleSubmit}>
        <Form.Item for="name">
          Name:
          <Input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <br />
        <Form.Item for="begin date">
          Begin Date:
          <Input
            name="begin date"
            type="date"
            value={beginDate}
            onChange={(e) => setBeginDate(e.target.value)}
          />
        </Form.Item>
        <br />
        <Form.Item for="end date">
          End Date:
          <Input
            name="end date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Item>
        <br />
        <Form.Item for="status">
          Status:
          <Input
            name="status"
            type="text"
            value={status}
            onSelect={(e) => setStatus(e.target.value)}
          />
        </Form.Item>
        <br />
        <Form.Item for="image">
          Photo:
          <Input
            name="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
