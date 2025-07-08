import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'Categories', path: '/', hash: '#categories' },
    { name: 'Courses', path: '/', hash: '#courses' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Contact', path: '/', hash: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <BookOpen size={24} />
            </div>
            <span className="logo-text">Internzo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.hash}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="header-actions">
            <button type='button' title='search' className="search-btn">
              <Search size={20} />
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.hash}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;