// src/App.jsx
import React from "react";
import Navbar from "./NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* We use the className here so it matches the CSS below */}
      <main className="main-content">
        {/* SECTION 1: The First Page */}
        <section className="page-section first-page">
          <h1>KYC & AML Management System</h1>
          <p>The future of secure fintech verification.</p>
          <button className="SignUp">Get Started</button>
        </section>

        {/* SECTION 2: The Next Page (appears after scrolling) */}

        <section className="page-section second-page">
          <h2>Our Core Services</h2>
          <div className="card-container">
            <div className="kyc-card">KYC SERVICE</div>
            <div className="kyc-card">Anti-Money Laundering</div>
            <div className="kyc-card">Risk Assessment</div>
          </div>
        </section>
        {/* SECTION 3: The Next Page (appears after scrolling) */}
        <section className="page-section third-page">
          <h2>Our Details</h2>
          <div>
            {" "}
            <ul>
              <li>WhatsApp</li>
              <li>Netflix</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
