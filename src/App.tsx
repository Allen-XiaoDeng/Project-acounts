import * as React from "react";
import {Routes, Route, Navigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
   flex-grow:1;
   overflow: auto;
`;
const NavWrapper = styled.nav`
  line-height: 2.4rem;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    >li{
      width: 33.333333%;
      text-align: center;
      padding: 1.6rem;
    }
  }
`;

const Nav =()=>{
  return (
    <NavWrapper>
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
    </NavWrapper>
  )
}

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