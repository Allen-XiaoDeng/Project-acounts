import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from 'App';

ReactDOM.render(
  <BrowserRouter basename="/acounts-website">
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
