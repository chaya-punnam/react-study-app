import React from "react";
import "./App.css";
import bg from "./assets/bg.jpg";
import logo from "./assets/logo.png";

function App() {
  const links = {
    C: "https://www.w3schools.com/c/",
    "C++": "https://www.w3schools.com/cpp/",
    Java: "https://www.w3schools.com/java/",
    Python: "https://www.w3schools.com/python/",
    SQL: "https://www.w3schools.com/sql/",
    React: "https://react.dev/",
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="login-box">
          <h3>Login</h3>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </header>

      <main className="main">
        <h1>Study App</h1>
        <div className="welcome-box">
          <p>Welcome to Study App.</p>
          <p>Here you can learn multiple programming languages.</p>
          <p>Click on any language button below to explore.</p>
          <p>Happy Learning!</p>
        </div>

        <div className="button-grid">
          {Object.keys(links).map((lang) => (
            <button key={lang} onClick={() => openLink(links[lang])}>
              {lang}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
