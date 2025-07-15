import React from 'react';
import { Link } from 'react-router-dom';
import {  Clock,IndianRupeeIcon } from 'lucide-react';
import all_courses , {Course} from './all_courses';

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-description">
            Discover our most popular courses designed by industry experts to help you advance your career.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {all_courses.slice(0,4).map((course) => (
            <Link to={`/Courses/${course.name}`}>
            <div key={course.name} className="course-card">
              <img src={course.image} alt={course.name} className="course-image" />
              <div className="course-content">
                <div className="course-category">{course.category}</div>
                <h3 className="course-title">{course.name}</h3>
                <p className="course-duration">
                  <Clock size={16} /> {course.period}
                </p>
                <p className="category-description">{course.description}</p>
                <div className="course-footer">
                  <div className="course-price"><IndianRupeeIcon size={16} />{course.Price}-/</div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

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