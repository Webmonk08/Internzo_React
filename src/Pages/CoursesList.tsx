import React, { useState, ChangeEvent, MouseEvent } from 'react';
import '../Css/Cart.css';
import { SearchIcon, Filter, Grid, List, Star, Clock, Users } from 'lucide-react';
import all_courses, { Course } from '../Components/all_courses';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';

function CoursesList() {
    const [likedCourses, setLikedCourses] = useState<{ [key: string]: boolean }>({});
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isSideContainerVisible, setIsSideContainerVisible] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value.toLowerCase());
    }

    function filterCourse(e: MouseEvent<HTMLButtonElement>, category: string) {
        setSelectedCategory(category);
    }

    const filteredCourses = all_courses.filter(
        (course) =>
            (selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase()) &&
            (course.name.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm))
    );

    function handleSelectedCourse(e: MouseEvent<HTMLSpanElement>, item: Course) {
        setSelectedCourse(item);
        setIsSideContainerVisible(true);
    }

    const categories = ['All', 'Web', 'App', 'Web3', 'DSA', 'Python', 'CPP', 'SEO', 'Cyber', 'AIML'];

    return (
        <>
            <div className="modern-header">
                <div className="header-content">
                    <div className="search-section">
                        <div className="search-container">
                            <SearchIcon className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search courses, skills, or topics..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="search-input"
                            />
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <div className="category-filters">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={(e) => filterCourse(e, category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="courses-main-container">
                <section className="courses-section">
                    <div className="section-header">
                        <div className="header-text">
                            <span className="section-badge">COURSES</span>
                            <h1 className="section-title">Discover Popular Courses</h1>
                            <p className="section-subtitle">
                                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
                            </p>
                        </div>
                    </div>

                    <div className="courses-grid-container" style={isSideContainerVisible ? { display: 'flex', gap: '2%' } : { display: 'block' }}>
                        <div className={`courses-content ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((item: Course) => (
                                    <Link to={`/Courses/${item.name}`} key={item.name} className="course-link">
                                        <div className="course-card">
                                            <div className="course-image-container">
                                                <img src={item.image} alt={item.name} className="course-image" />
                                                <div className="course-overlay">
                                                    <div className="course-rating">
                                                        <Star className="star-icon" />
                                                        <span>4.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="course-content">
                                                <div className="course-header">
                                                    <h3 className="course-title">{item.name}</h3>
                                                    <div className="course-meta">
                                                        <div className="meta-item">
                                                            <Clock size={14} />
                                                            <span>{item.period} Month{item.period > 1 ? 's' : ''}</span>
                                                        </div>
                                                        <div className="meta-item">
                                                            <Users size={14} />
                                                            <span>2.5k+ Students</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <p className="course-description">{item.description}</p>
                                                
                                                <div className="course-skills">
                                                    {item.skills?.slice(0, 3).map((skill, index) => (
                                                        <span key={index} className="skill-tag">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <div className="course-footer">
                                                    <div className="course-price">
                                                        <span className="price-current">${item.Price}</span>
                                                    </div>
                                                    <button className="enroll-btn">
                                                        Enroll Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="no-courses">
                                    <div className="no-courses-content">
                                        <SearchIcon size={48} className="no-courses-icon" />
                                        <h3>No courses found</h3>
                                        <p>Try adjusting your search or filter criteria</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Contact />
        </>
    );
}

export default CoursesList;