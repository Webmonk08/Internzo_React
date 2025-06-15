import React from 'react';
import { ArrowRight, Play, Star, Users, BookOpen, Award } from 'lucide-react';

const Home = () => {
  return (
    <section className="home">
      {/* Background Elements */}
      <div className="home-bg"></div>
      <div className="home-bg-element-1"></div>
      <div className="home-bg-element-2"></div>

      <div className="container">
        <div className="home-content">
          {/* Left Content */}
          <div className="home-text">
            <div className="home-badge">
              <Star size={16} fill="currentColor" />
              <span>Best Online Learning Platform</span>
            </div>

            <h1 className="home-title">
              <span className="home-title-primary">Accessible Online</span>
              <br />
              <span className="home-title-accent">Courses For All</span>
            </h1>

            <p className="home-description">
              Transform your career with our comprehensive online courses and internship programs. Learn from industry experts and build real-world skills.
            </p>

            {/* CTA Buttons */}
            <div className="home-actions">
              <button className="btn-primary">
                <span>Start Learning</span>
                <ArrowRight size={20} />
              </button>
              
              <button className="btn-secondary">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
            
          </div>

          {/* Right Content - Hero Image */}
          <div className="home-image">
            <div className="home-image-container">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online Learning"
              />
              
              {/* Floating Elements */}
              <div className="floating-element floating-element-1">
                <div className="floating-content">
                  <div className="status-dot"></div>
                  <span className="floating-text">Live Classes</span>
                </div>
              </div>

              <div className="floating-element floating-element-2">
                <div className="floating-content">
                  <Award size={20} color="#fbbf24" />
                  <span className="floating-text">Certified</span>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="home-bg-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;