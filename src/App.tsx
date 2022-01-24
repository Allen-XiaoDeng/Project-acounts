import * as React from "react";
import {Routes, Route, Navigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border:1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
   border:1px solid green;
   flex-grow:1;
  overflow: auto;
`;
const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    >li{
      width: 33.333333%;
      text-align: center;
      padding: 16px;
    }
  }
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
      <Nav>
        <ul>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </Nav>

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