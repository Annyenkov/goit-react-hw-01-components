import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-01-components/">
  <App />
</BrowserRouter>
);
