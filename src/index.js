import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Fake comments
//cách custom event để tự phát đi 1 event
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment của lesson ${id}`
      })
    );//chủ động tự phát event,giống như addlistener sự kiện như onClick khi sự kiện đó xảy ra trong DOM thì dom tự động phát ra event
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
