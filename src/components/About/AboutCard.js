import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Phyllis
            from <span className="purple"> Singapore 🇸🇬 .</span>
            <br />
            <span className="purple"> Innovative </span> UI/UX designer and software developer with a passion for <span className="purple">  balancing </span> creative breakthroughs  with <span className="purple">  practical, </span>  user-focused solutions.
            <br />
            <br />
            Recently crafted a dashboard to monitor remote devices, <span className="purple">  leveraging unconventional approaches </span> and expanding my technical toolkit to achieve <span className="purple">  effective results. </span>
            <br />
            <br />
            Skilled in <span className="purple">  Python and the MERN stack, </span> I accelerated my learning from HTML to full-stack projects in record time, demonstrating my <span className="purple">  adaptability and commitment.</span>
            <br/> 
            <span className="purple">  Aspiring product manager </span> with a solid <span className="purple">  foundation in client management and team motivation </span> from three years in a multi-cultural, construction industry—driven to <span className="purple">  lead and inspire innovation. </span>
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
