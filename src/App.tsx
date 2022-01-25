import * as React from "react";
import {Routes, Route, Navigate, Link } from 'react-router-dom';
import Layout from 'components/Layout';



function App() {
  return (

        <Routes>
          <Route path="tags" element={<Tags />} />
          <Route path="money" element={<Money />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="" element={<Navigate to="/money" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

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
    <Layout>标签页面</Layout>
  );
}


function Money() {
  return (
    <Layout>记账页面</Layout>
  );
}

function Statistics() {
  return (
    <Layout>统计页面</Layout>
  );
}
export default App;