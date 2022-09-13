import { Container, Row, Col } from "react-bootstrap";
import fonts from "../fonts.module.css";
import friends from "../assets/friends.jpeg";
import bags from "../assets/bags.jpeg";
import dpack from "../assets/dpack.jpeg";
import myeverything from "../assets/myeverything.jpeg";
import buggy from "../assets/buggy.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container>
      <Row style={{ marginBottom: "2%", marginTop: "2%" }}>
        <h3 className={fonts.poppinssemibold}>who am i?</h3>
      </Row>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Row>
          <Col sm={12} lg={4}>
            <img style={{ width: "100%" }} src={friends} alt="friends" />
          </Col>
          <Col sm={12} lg={4} className={fonts.poppinssemibold}>
            hello!! i'm{" "}
            <span style={{ color: "#AC5AFE" }}>
              prashant, a 20 year old from cary, north carolina.
            </span>{" "}
            i currently attend university in illinois.{" "}
            <span style={{ color: "#AC5AFE" }}>
              i have a cat named bagheera
            </span>
            , who my family and i adopted in december 2021. in my past time, i
            really enjoy watching trashy tv with my friends and trying new foods
            in new places. i'm also a huge fan of coffee brewing, and i'm
            starting to get into cooking as well.
          </Col>
          <Col sm={12} lg={4}>
            <img
              style={{ width: "100%" }}
              src={myeverything}
              alt="meandtrisha"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "2%", marginBottom: "1%" }}>
          <Col sm={12} lg={3} className={fonts.poppinssemibold}>
            i'm currently a{" "}
            <span style={{ color: "#AC5AFE" }}>
              junior at the university of illinois studying computer science
            </span>
            . i had previous roles working in either{" "}
            <span style={{ color: "#AC5AFE" }}>software engineering</span> or
            roles tangent to the field. most recently, i worked as a{" "}
            <span style={{ color: "#AC5AFE" }}>
              software engineer intern at metlife and capital one
            </span>
            . i've worked as a full-stack engineer, creating apis to return
            appropriate payloads and using that data to render dynamically on
            the front-end.
          </Col>
          <Col sm={6} lg={3}>
            <img style={{ width: "100%" }} src={buggy} alt="bagheera" />
          </Col>
          <Col sm={6} lg={3} style={{ marginBottom: "1%" }}>
            <img style={{ width: "100%" }} src={dpack} alt="deepak" />
          </Col>
          <Col sm={12} lg={3}>
            <img style={{ width: "100%" }} src={bags} alt="bagheera2" />
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}
