import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/internzo_edu?igsh=MXYwYWttNmVveXJ5Zg%3D%3D&utm_source=qr' },
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: 'https://x.com/internzo?s=21' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/internzo/' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/#categories' },
    { name: 'Courses', path: '/#courses' },
    { name: 'About', path: '/#about' }
  ];

  const contactInfo = [
    { label: 'Address', value: '2/34 Pothiyampallam, Karur-3' },
    { label: 'Email', value: 'info@internzo.com' },
    { label: 'Phone', value: '9344742778' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          {/* Logo Section */}
          <div className="contact-section">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Internzo Logo" 
              className="contact-logo"
            />
          </div>

          {/* Social Links */}
          <div className="contact-section">
            <h4 className="contact-title">Follow Us</h4>
            <div className="contact-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="contact-section">
            <h4 className="contact-title">Quick Links</h4>
            <div className="contact-links">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="contact-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-section">
            <h4 className="contact-title">Contact Info</h4>
            <div className="contact-links">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-link">
                  <strong>{info.label}:</strong> {info.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;