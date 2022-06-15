import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },

  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

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
        {/* <Form.Item
          name="image"
          type="url"
          label="Photo:"
          action="/action_page.php"
        >
          <input type="file" id="myFile" name="filename" />
        </Form.Item> */}
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
        <br />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
