import React from "react";
import "./bottompage.css";

function Bottompage() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📱 Mobile: +962775570312</p>
          <p>📧 Email: ahmad.borno@yahoo.com</p>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="#" className="icon">🌐</a>
            <a href="#" className="icon">💼</a>
            <a href="#" className="icon">📸</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Developer</h4>
          <p>All Rights Reserved © 2025</p>
          <p>Developed By <span className="name-highlight">Ahmad Alborno</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Bottompage;