import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Binance from "../../../Public/Logo/Binance";

export default function MainNavbar() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>
            Power By
            <Binance />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{ textDecoration: "none", color: "White" }} to="/">
              Home
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
