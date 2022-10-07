import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fonts from "../fonts.module.css";

export default function MetLife() {
  return (
    <Container style={{ marginBottom: 30 }}>
      <Row style={{ marginBottom: 35, marginTop: 20 }}>
        <Col>
          <h3 className={fonts.poppinssemibold}>{info.companyheader}</h3>
          <h4 className={fonts.poppinsmedium}>{info.jobTitle}</h4>
        </Col>
      </Row>
      <Row style={{ marginBottom: 35 }}>
        <h4
          className={fonts.poppinssemibold}
          style={{ color: "#AC5AFE", marginBottom: 10 }}
        >
          Coming Soon!
        </h4>
        <h6 className={fonts.poppinsmedium}>
          Until then, please check my{" "}
          <a
            href="https://www.linkedin.com/in/prashant-n/"
            target="_blank"
            rel="noopener"
          >
            linkedin
          </a>{" "}
          for information on my experience at MetLife.
        </h6>
      </Row>
    </Container>
  );
}

const info = {
  companyheader: "MetLife",
  jobTitle: "Software Engineer Intern",
  outline:
    "MetLife is a life insurance and employee benefits company. I was on the Retirement & Income Solutions team, and worked on a platform that met many different loose-ends business needs for internal teams.",
  work1:
    "I was a full-stack engineer intern on the Retirement & Income Solutions team at MetLife. I worked alongside the team, and was apart of every sprint and had ownership over my own tickets and user stories. I was apart of a few key features, including creating 4 APIs, and dynamically rendering widgets and graphs/tables on the home page of the application.",
};
