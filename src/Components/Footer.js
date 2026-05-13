import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        Copywrite © {year} | Developed by <a href="https://saikat.com.bd" target="_blank" rel="noreferrer">Saikat</a>
      </Container>
    </div>
  );
}

export default Footer;
