import React, { useState } from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ColorPage from "./pages/ColorPage";
import Header from "./components/UI/Header";

import colors from './colors.json';

colors.map((item) => {
  item.date = new Date(item.date);
});
const arrayOfColors = colors;

function App() {

  return (
    <Container>
      <Header/>
      <main>
        <Routes>
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/' element={<HomePage list={arrayOfColors} />} />
          <Route path='/pageColor/:id' element={<ColorPage list={arrayOfColors}/>} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-rows: 7rem calc(100vh - 7rem);
`;