import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

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
      .then(() => navigate("/"))
      .catch(setError);
  };
  return (
    <section style={{ margin: "2em 1em" }}>
      <h1>Add Destination</h1>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      <Form onFinish={handleSubmit}>
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
        <Form.Item
          name="image"
          type="url"
          label="Photo:"
          action="/action_page.php"
        >
          <input type="file" id="myFile" name="filename" />
        </Form.Item>
        <br />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
