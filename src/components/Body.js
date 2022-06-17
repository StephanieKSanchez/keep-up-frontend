import { Card, Col, Row } from "antd";

export default function Body() {
  return (
    <>
      <h3>Easy to use, easy to share</h3>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Stay organized" bordered={false}>
            Keep all your travel details in one place
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Share it" bordered={false}>
            Everyone on the same page
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Stress less" bordered={false}>
            Enjoy knowing your plans are set
          </Card>
        </Col>
      </Row>
      {/* </div>
      <h3>Easy to use, easy to Share</h3>
      <ul>
        <li>
          <div></div>
          <div>Stay organized</div>
          <div>Keep all your travel details in one place</div>
        </li>
        <li>
          <div></div>
          <div>Share it</div>
          <div>Everyone on the same page</div>
        </li>
        <li>
          <div></div>
          <div></div>
          <div>Everyone on the same page</div>
        </li>
      </ul> */}
    </>
  );
}
