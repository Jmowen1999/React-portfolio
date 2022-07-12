// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Jacob Mitchell Owen"/>
      <p className="content is-italic mt-4">
        I am Jacob Owen and currently studying to become a Fullstack Developer. 
        I am currently a EMT-B at Lifecare Ambulance, and we provide EMS for majorty of Lorain county.
      </p>
      <p className="content">
        I always act as a product manager for learning resources, which guides
        users to what they need in the moment, I am also determined 
      </p>
    </div>
  );
}

export default About;