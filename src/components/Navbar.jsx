import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Search } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Apply the theme to the entire body
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Component Library</h1>

      {/* 🔍 Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search components..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearch(e.target.value); // Call parent search function
          }}
          className="search-input"
        />
        <Search className="search-icon" />
      </div>

      {/* Navigation Links */}
      <div className="nav-right">
        <ul className="nav-links">
          {[
            { name: "Home", path: "/" },
            { name: "Navbar", path: "/navbar" },
            { name: "Hero", path: "/hero" },
            { name: "Animations", path: "/animations" },
            { name: "Websites", path: "/websites" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🌙 Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
