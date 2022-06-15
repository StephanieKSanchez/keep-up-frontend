// import { Carousel } from "antd";
// import { useParams } from "react-router-dom";
// import { DestinationsContext } from "./DestinationContext";

// export default function DetailsPage({ destination }) {
//   //   const { destination, setDestination } = useContext(DestinationsContext);

//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };

//   const contentStyle = {
//     height: "160px",
//     color: "#fff",
//     lineHeight: "160px",
//     textAlign: "center",
//     background: "#364d79",
//   };

//   return (
//     destination && (
//       <Carousel afterChange={onChange}>
//         <div>
//           <h3 style={contentStyle}>
//             <p> {destination.gettingThere} </p>
//             <p> {destination.gettingThereDetails} </p>
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//             <p> {destination.lodging} </p>
//             <p> {destination.lodgingDetails} </p>
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//             <p> {destination.gettingAround} </p>
//             <p> {destination.gettingAroundDetails} </p>
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//             <p> {destination.ChildOrPetCare} </p>
//             <p> {destination.ChildOrPetCareDetails} </p>
//           </h3>
//         </div>
//       </Carousel>
//     )
//   );
// }

import { Card, Col, Row } from "antd";

export default function DetailsPage({ destination }) {
  return (
    destination && (
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Getting There"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <h2> {destination.gettingThere} </h2>
              <p> {destination.gettingThereDetails} </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Getting Around"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <h2> {destination.gettingAround} </h2>
              <p> {destination.gettingAroundDetails} </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Lodging"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <h2> {destination.lodging} </h2>
              <p> {destination.lodgingDetails} </p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  );
}
