import React from "react";
import Skeleton from "react-loading-skeleton";
import { Col, Card } from "react-bootstrap";

export default function Threeline() {
  return (
    <Col>
      <Card className="coin-card" bg="Secondary">
        <Card.Header>
          {" "}
          <Skeleton height={100} style={{ width: "100%" }} />
        </Card.Header>
        <Card.Body style={{ paddingTop: 0 }}>
          <Card.Title>
            <Skeleton height={24} />
          </Card.Title>
          <Card.Title>
            {" "}
            <Skeleton height={20} />
          </Card.Title>
        </Card.Body>
      </Card>{" "}
      <br />
    </Col>
  );
}
