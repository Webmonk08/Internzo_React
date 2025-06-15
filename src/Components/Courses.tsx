import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12 weeks',
      students: '2.5K',
      rating: 4.9,
      price: '$99',
      description: 'Master HTML, CSS, JavaScript, React, and Node.js'
    },
    {
      id: 2,
      title: 'Mobile App Development with React Native',
      category: 'App Development',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '10 weeks',
      students: '1.8K',
      rating: 4.8,
      price: '$89',
      description: 'Build cross-platform mobile apps with React Native'
    },
    {
      id: 3,
      title: 'AI & Machine Learning Fundamentals',
      category: 'Artificial Intelligence',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '16 weeks',
      students: '3.1K',
      rating: 4.9,
      price: '$129',
      description: 'Learn Python, TensorFlow, and machine learning algorithms'
    }
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>COURSES</span>
          </div>
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-description">
            Discover our most popular courses designed by industry experts to help you advance your career.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <div className="course-category">{course.category}</div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-duration">
                  <Clock size={16} /> {course.duration}
                </p>
                <p className="category-description">{course.description}</p>
                <div className="course-footer">
                  <div className="course-price">{course.price}</div>
                  <div className="course-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{course.rating}</span>
                    <span>({course.students})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="section-cta">
          <Link to="/courses" className="btn-outline">
            <span>View All Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;