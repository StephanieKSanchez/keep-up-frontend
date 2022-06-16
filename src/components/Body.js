import { Card, Col, Row } from "antd";

export default function Body() {
  return (
    <>
      <h3>Easy to use, easy to share</h3>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Easy to use, easy to Share" bordered={false}>
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
    </>
  );
}
