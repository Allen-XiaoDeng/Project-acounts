import * as React from "react";
import {Routes, Route, Navigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
   flex-grow:1;
   overflow: auto;
`;


function App() {
  return (
    <Wrapper>
      <Main>
        <Routes>
          <Route path="tags" element={<Tags />} />
          <Route path="money" element={<Money />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="" element={<Navigate to="/money" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
      <Nav/>
    </Wrapper>
  );
}
// App.js
function NotFound(){
  return (
    <div>页面不存在</div>
  )
}

function Tags() {
  return (
    <>
      <h2>标签页面</h2>
    </>
  );
}


function Money() {
  return (
    <>
      <h2>记账页面</h2>
    </>
  );
}

function Statistics() {
  return (
    <>
      <h2>统计页面</h2>
    </>
  );
}
export default App;