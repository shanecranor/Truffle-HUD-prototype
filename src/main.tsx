import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App inputData={
      [
        {
          // id: "whatever the unique ID is",
          id:"A",
          iframeSrc: "https://pigtionary-embed.netlify.app/streamer.html", 
          title: "🐷 Pigtionary Addon",
          tooltipDescription: "A pictionary game for Truffle",
          dimensions: {x:900,y:400},
          isResizeable: true
        },
        {
          id:"B",
          // id: "another unique ID 0",
          iframeSrc: "https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20", 
          title: "Cringe Twitter Addon",
          tooltipDescription: "A tweet from the founder of Twitter",
          dimensions: {x:550,y:220},
          isResizeable: true,
          resizeBounds: {minWidth: 320, maxWidth: 550, minHeight: 280, maxHeight: 280}
        },
        {
          id:"C",
          // id: "another unique ID 0",
          iframeSrc: "https://codepen.io/Thisisntme/embed/Qxqgvv?default-tab=html%2Cresult&theme-id=dark&editable=true", 
          title: "Random Codepen",
          tooltipDescription: "A cool random codepen",
          dimensions: {x:850,y:420},
          isResizeable: true,
        },
      ]
    }/>
  </React.StrictMode>,
)
