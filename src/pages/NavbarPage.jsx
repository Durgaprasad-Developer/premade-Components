import React from "react";
import Navbar1 from "./Navbar1"; // Import your Navbar component
import "./NavbarPage.css";

export default function NavbarPage() {
  const navbars = [
    {
      id: 1,
      component: <Navbar1 />,
      code: `<Navbar1 />`,
    },
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard! ✅");
  };

  return (
    <div className="navbar-page">
      {navbars.map((nav) => (
        <div key={nav.id} className="navbar-container">
          <div className="preview">{nav.component}</div>
          <div className="code-section">
            <pre className="code-box">{nav.code}</pre>
            <button className="copy-btn" onClick={() => copyToClipboard(nav.code)}>
              📋 Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
