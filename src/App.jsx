// src/App.jsx
import React from "react";
import Navbar from "./NavBar";
import "./App.css"; // Make sure your @tailwind lines are at the top of this file!

function App() {
  return (
    <div className="App">
      <Navbar />


      <main className="main-content">
         {/* SECTION 1: The First Page */}
        <section className="page-section first-page">
          <h1 className="text-3xl font-bold">KYC & AML Management System</h1>
          <p>The future of secure fintech verification.</p>
          <button className="SignUp">Get Started</button>
        </section>




        {/* Section 2 */}
        <section className="page-section second-page">
          <h2 className="text-2xl font-semibold mb-6">Our Core Services</h2>
          <div className="card-container">
          
            <div className="kyc-card">KYC SERVICE</div>
            <div className="kyc-card">Anti-Money Laundering</div>
            <div className="kyc-card">Risk Assessment</div>
          </div>
          <button className="demo">Free Demo</button>
        </section>

     <section className="page-section fourth-page">
      <h1 className='text-7xl'>We aspire to be the world's most exceptional financial institution.</h1>
      <div className="image-grid">
    <div className="image-card">
      <img src="https://shepwedd.com/wp-content/uploads/2025/06/Digital-ID-card_0-1350x900.jpg" alt="Team" />
      <div className="image-caption">Identity Verification (KYC)</div>
    </div>

    <div className="image-card">
      <img src="https://fincom.co/wp-content/uploads/2024/02/lanugage-barrier.jpg" alt="Security" />
      <div className="image-caption">AML & Sanction Screening</div>
    </div>

    <div className="image-card">
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" alt="Data" />
      <div className="image-caption">Decision Case Management</div>
    </div>
  </div>
  
     </section>

      {/* Section 3: Final Page / Contact */}
<section className="page-section third-page">
  <div className="faq-container">
    <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
    <div className="faq-box">
      <p>
        Have questions about our services? Check out our FAQs section to find 
        answers to common queries regarding KYC, AML, and integration.
      </p>
      <button className="faq-btn">Visit Help Center</button>
    </div>
  </div>
  
  <div className="contact-container">
    <h2 className="text-2xl font-bold">Connect With Us</h2>
    <div className="social-grid">
      <div className="social-card whatsapp">
        <span>WhatsApp</span>
      </div>
      <div className="social-card netflix">
        <span>Support</span>
      </div>
      <div className="social-card facebook">
        <span>Facebook</span>
      </div>
      <div className="social-card instagram">
        <span>Instagram</span>
      </div>
    </div>
  </div>

  <footer className="mini-footer">
    <p> 2025 KYC Secure Management. All Rights Reserved.</p>
  </footer>
</section>

      </main>
    </div>
  );
}export default App;