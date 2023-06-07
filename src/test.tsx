// this is to try to test it as a web component
import { ReactAppWebComponent } from './web-component';
customElements.define('react-app', ReactAppWebComponent);

import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
