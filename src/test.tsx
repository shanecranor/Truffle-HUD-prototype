// this is to try to test it as a web component
import { ReactAppWebComponent } from './web-component';
customElements.define('react-app', ReactAppWebComponent);
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css'
import {embedList, creatorList} from './state.ts'
render(
  <React.StrictMode>
  <App 
  embedList={embedList}
  creatorList={creatorList}
  />
</React.StrictMode>,
  document.getElementById('root')
);
