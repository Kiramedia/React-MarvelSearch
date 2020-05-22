import React from 'react';
import './App.css';

function App({ children }) {
  return (
    <div className="o-marvel-search-characters">
      {children}
    </div>
  );
}

export default App;
