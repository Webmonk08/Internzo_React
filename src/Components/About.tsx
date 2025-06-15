import React from 'react';
import { CheckCircle, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    'Expert-led courses with real-world projects',
    'Flexible learning schedule that fits your life',
    'Industry-recognized certificates upon completion',
    'Dedicated career support and mentorship'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* Text Content */}
          <div className="about-text">
            <div className="section-badge">
              <span>ABOUT US</span>
            </div>
            <h2 className="about-title">
              Empowering Your Learning Journey
            </h2>
            <p className="about-description">
              At Internzo, we believe that quality education should be accessible to everyone. Our platform combines cutting-edge technology with expert instruction to deliver an unparalleled learning experience.
            </p>
            
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="about-feature">
                  <CheckCircle size={20} className="about-feature-icon" />
                  <span className="about-feature-text">{feature}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              <span>Join Our Community</span>
            </button>
          </div>

          {/* Image */}
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students learning together"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;