import React from 'react';
import { render } from 'react-dom';
import App from './App.tsx';

export class ReactAppWebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(mountPoint);

    const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
.addon-window-container {
	position: fixed;
}
.addon-window {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	border: 0.5px solid rgba(255, 255, 255, 0.15);
	outline: 0.25px solid rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	overflow: hidden;
	box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
	background: #1F1F1F;
	
	min-width: 64px;
	min-height: 64px;
}

.title-bar{
	color: white;
	background: #171717;
	font-family: 'Inter', sans-serif;
	height: 32px;
	width:100%;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;

	display: flex;
	align-items: center;
	padding: 10px;
	box-sizing: border-box;
	overflow: hidden;
	flex-shrink: 0;
	flex-grow: 0;
}

iframe{
	display: block;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: none;
	flex-grow: 1;
	width: 100%;
}
    `;

    const style = document.createElement('style');
    style.textContent = css;
    shadowRoot.appendChild(style);

    // Render the React app inside the web component
    render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      mountPoint
    );
  }
}
