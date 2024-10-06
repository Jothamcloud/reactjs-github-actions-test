import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const gradientStyle = {
    background: `linear-gradient(${gradientAngle}deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)`
  };

  return (
    <div className="App" style={gradientStyle}>
      <header className="App-header">
        <h1>Sample ReactJS-GitHub Actions Test</h1>
        <p>A responsive and dynamic landing page</p>
      </header>
    </div>
  );
}

export default App;