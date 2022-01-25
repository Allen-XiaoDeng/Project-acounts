import * as React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NotFound from './views/NotFound';



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

export default App;