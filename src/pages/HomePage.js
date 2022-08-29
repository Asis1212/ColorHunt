import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Colors from "../components/Colors";


const HomePage = () => {
  return (
      <Container>
        <Sidebar />
        <Colors />
      </Container>
  );
}

export default HomePage;

const Container = styled.div`
  height: 100%;
  display: flex;

  @media only screen and (max-width: 715px) {
    flex-direction: column;
  }
`;