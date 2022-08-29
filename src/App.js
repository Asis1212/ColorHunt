import React from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ColorPage from "./pages/ColorPage";
import Header from "./components/UI/Header";

function App() {
  return (
    <Container>
        <Header />
      <main>
        <Routes>
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/pageColor/:id' element={<ColorPage />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 5px;
  max-width: 1500px;
  width:95%;
  margin: 0 auto;
`;