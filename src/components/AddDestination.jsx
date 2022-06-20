import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "../styling/addDestination.css";

export default function AddDestination() {
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = ({
    name,
    beginDate,
    endDate,
    image,
    status,
    gettingAround,
    gettingAroundDetails,
    gettingThere,
    gettingThereDetails,
    lodging,
    lodgingDetails,
  }) => {
    const newDestination = {
      name,
      beginDate,
      endDate,
      image,
      status,
      gettingAround,
      gettingAroundDetails,
      gettingThere,
      gettingThereDetails,
      lodging,
      lodgingDetails,
    };
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
        <Form.Item
          name="gettingThere"
          type="text"
          label="How will you get there?:"
        >
          <Input
            placeholder={
              "Enter mode of transportation. For example: car, plane, train, etc."
            }
          />
        </Form.Item>
        <Form.Item
          name="gettingThereDetails"
          type="text"
          label="Getting There Details:"
        >
          <Input
            placeholder={
              "Enter details related to how you will get there. For example: airline, flight time, etc."
            }
          />
        </Form.Item>
        <Form.Item
          name="gettingAround"
          type="text"
          label="How will you be getting around while there?:"
        >
          <Input
            placeholder={
              "Enter details related to how you will get around. For example: car rental, public transportation, chauffeur, etc."
            }
          />
        </Form.Item>
        <Form.Item
          name="gettingAroundDetails"
          type="text"
          label="Getting Around Details:"
        >
          <Input
            placeholder={
              "Enter details related to how you will get there. For example: car rental company, car pickup & drop off time, etc."
            }
          />
        </Form.Item>
        <Form.Item name="lodging" type="text" label="Lodging:">
          <Input
            placeholder={
              "Enter where you will be staying. For example: hotel, airbnb, etc."
            }
          />
        </Form.Item>
        <Form.Item name="lodgingDetails" type="" label="Lodging Details:">
          <Input
            placeholder={
              "Enter details related to where you will be staying. For example: hotel name, address, etc."
            }
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
