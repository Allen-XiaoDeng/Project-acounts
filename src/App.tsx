import * as React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NotFound from './views/NotFound';
import styled from 'styled-components';
import {Tag} from './views/Tag';


const AppWrapper = styled.div`
  color: #333;
  max-width: 520px;
  margin: 0 auto;
  
  
`;


function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="tags" element={<Tags/>}/>
        <Route path="tags/:id" element={<Tag/>}/>
        <Route path="money" element={<Money/>}/>
        <Route path="statistics" element={<Statistics/>}/>
        <Route path="" element={<Navigate to="/money"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AppWrapper>
  );
}

export default App;