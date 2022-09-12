import { Container, Row, Col } from "react-bootstrap";
import fonts from "../fonts.module.css";

export default function Home() {
  return (
    <Container>
      <Row style={{ marginTop: "15%" }}>
        <Col>
          <h1 className={fonts.poppinssemibold} style={{ fontSize: "3rem" }}>
            prashant naganaboyina
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className={fonts.poppinssemibold} style={{ fontSize: "2rem" }}>
            cs @ illinois | interned @ metlife, capital one, abbvie, cisco
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          <h3 className={fonts.poppinsregular} style={{ fontSize: "1.25rem" }}>
            a junior studying cs at the university of illinois, interested in
            creating consumer products.
          </h3>
          <h3 className={fonts.poppinsregular} style={{ fontSize: "1.25rem" }}>
            proficient in{" "}
            <span className={fonts.poppinssemibold}>
              java, javascript, python, c++, react.
            </span>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
