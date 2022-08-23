import React,{Fragment, useState} from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import Colors from "../components/Colors";

const HomePage = (props) => {
    const [clickedButton, setClickedButton] = useState(3);
    const arrayOfColors = props.list;

    const changeColor = (id) => {
        setClickedButton(id);
    }

  return (
      <Container>
        <Sidebar clickedButton={clickedButton} changeColor={changeColor}/>
        <Colors clickedButton={clickedButton} list={arrayOfColors}/>
      </Container>
  );
}

export default HomePage;

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content,20vw) minmax(6rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(0.5rem, 20vw);
  grid-row-gap: 1rem;

  @media only screen and (max-width: 715px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;