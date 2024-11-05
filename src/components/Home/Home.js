import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Projects from "../Projects/Projects.js";
import pdf from "../../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";


const handleDownload = () => {
  // console.log('buttonClicked!')
  // // Create a temporary anchor element
  // const link = document.createElement('a');
  // link.href = pdf; // Set the href to the PDF file
  // link.download = 'document.pdf'; // Specify the default name for the downloaded file

  // // Append to the body to make it work in Firefox
  // document.body.appendChild(link);
  
  // // Programmatically click the link to trigger the download
  // link.click();
  
  // // Remove the link from the document
  // document.body.removeChild(link);
};

function Home() {
  return (
    <>
    <section>
      <Container fluid className="home-section" id="home">
        <Particle/>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {/* Hi There!{" "} */}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong style={{display: 'block', marginBottom:'1rem'}} className="main-name"> Phyllis' Portfolio</strong>
                UI/UX Design. JS/Python Full-Stack Developer. Project Mangement. 
              </h1>

              <div style={{ padding: '2.5rem' }}>
              <Type />
              </div>
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
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects></Projects>
    </section>
    </>
  );
}

export default Home;
