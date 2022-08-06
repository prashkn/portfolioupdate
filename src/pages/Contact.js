import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import fonts from "../fonts.module.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.svg";
import resume from "../assets/resume.png";

export default function Contact() {
  return (
    <Container>
      <Row style={{ marginBottom: "2%", marginTop: "2%" }}>
        <h3 className={fonts.poppinssemibold}>connect with me.</h3>
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
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            sm={6}
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1%",
            }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://drive.google.com/file/d/1_6EKayrHfZ89q_g4aSV7b8ZTTw2p_kFH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src={resume} alt="resume" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col
            sm={6}
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1%",
            }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://github.com/prashkn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col
            sm={6}
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1%",
            }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/prashant-n/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col
            sm={6}
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1%",
            }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="message:pnaganab@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gmail} alt="gmail" style={styles.img} />
              </a>
            </motion.div>
          </Col>
          <Col
            sm={6}
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1%",
            }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.instagram.com/accounts/login/?next=/prashantk.n/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" style={styles.img} />
              </a>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

const styles = {
  img: {
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
};
