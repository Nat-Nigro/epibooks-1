import { Card, Row, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Row className="g-2">
      <Col xs={12} md={4} key={props.asin}>
        <Card>
          <Card.Img variant="top" src="props.img" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleBook;
