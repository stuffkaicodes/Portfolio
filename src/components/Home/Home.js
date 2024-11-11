import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Projects from "../Projects/Projects.js";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {

  const [pdf , setPdf] = useState('');

  useEffect(async () => {
    try {const res = await fetch('https://docs.google.com/document/d/11_3uuc7K7F4PkwPDUUx3RnRk3mp_YIaCVSJiBM3nkbM/export?format=pdf');
    setPdf(res.url);
    } 
    catch(error){
      console.log(error);
    }
  })

  return (
    <>
    <section>
      <Container fluid className="home-section" id="home">
        <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong style={{display: 'block', marginBottom:'1rem'}} className="main-name"> Phyllis' Portfolio</strong>
                UI/UX Design. JS/Python Full-Stack Developer. Project Mangement. 
              </h1>
              {/* <Row style={{ paddingLeft:"2.5rem", position: "relative", zIndex:'9999'}}> */}
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ width:'fit-content', cursor: 'pointer', fontSize:'1.5rem', padding:'1rem', margin:'2.5rem'}}
                // onClick={handleDownload()}
              >
                <span>
                  <AiOutlineDownload />
                  &nbsp; Download Resume
                </span>
              </Button>
              {/* </Row> */}
            </Col>
            <Col md={5} style={{ marginTop: '5rem', paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <div style={{ padding: '2.5rem' }}>
            <Type style={{ width: '100%'}} />
            </div>
        </Container>
      </Container>
      <Projects></Projects>
    </section>
    </>
  );
}

export default Home;
