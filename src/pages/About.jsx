import React from "react";
import { Link } from "react-router-dom";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";

const About = () => {
  return (
    <Paper>
      <Container>
        <h2>Hello World</h2>
        <Link to="/">kembali ke halaman home</Link>
      </Container>
    </Paper>
  );
};

export default About;
