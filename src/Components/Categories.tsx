import React from 'react';
import { Code, Smartphone, Shield, Brain, Database, Palette, Globe, Cpu } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Master HTML, CSS, JavaScript, React, and modern web technologies',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      iconColor: '#3b82f6',
      students: '2.5K+'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build mobile apps with React Native, Flutter, and native development',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      iconColor: '#10b981',
      students: '1.8K+'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Learn ethical hacking, network security, and digital forensics',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      iconColor: '#ef4444',
      students: '1.2K+'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Explore artificial intelligence, deep learning, and data science',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      iconColor: '#8b5cf6',
      students: '3.1K+'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analyze data with Python, R, SQL, and visualization tools',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      iconColor: '#f59e0b',
      students: '2.2K+'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful interfaces and user experiences',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      iconColor: '#ec4899',
      students: '1.9K+'
    },
  ];

  return (
    <section id="categories" className="categories">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Popular Courses We Provide</h2>
          <p className="section-description">
            Explore our comprehensive range of courses designed to help you master the skills that matter most in today's digital world.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div 
                className="category-icon" 
                style={{ backgroundColor: category.bgColor }}
              >
                <category.icon size={32} color={category.iconColor} />
              </div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;