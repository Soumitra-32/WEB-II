import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import About from './About';

function Home() {
  return (
    <div className="App">
      <header className="App-header">

        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px"
          }}
        >
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              border: "1px solid white",
              padding: "8px 16px",
              borderRadius: "5px"
            }}
          >
            About
          </Link>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;