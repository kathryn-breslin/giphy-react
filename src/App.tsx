import React from 'react';
import Landing from "../src/pages/Landing";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Landing/>
        </div>
      </header>
    </div>
  );
}

export default App;
