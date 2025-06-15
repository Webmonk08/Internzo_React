import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import all_courses, { Course } from '../Components/all_courses';
import '../Css/CourseDetail.css';
import emailjs from '@emailjs/browser';
import { 
    ChevronRight, 
    ArrowRight, 
    Clock, 
    Users, 
    Star, 
    BookOpen, 
    Award, 
    Play,
    X,
    CheckCircle,
    Globe,
    Calendar,
    DollarSign
} from "lucide-react";

interface CourseDetailsProps {}

const CourseDetails: React.FC<CourseDetailsProps> = () => {
    const form = useRef<HTMLFormElement>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const { courseName } = useParams<{ courseName: string }>();
    const [selectedCategory] = useState<string>('All');
    const [clicked, setClicked] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [showAllCourses] = useState<boolean>(false);
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Find and set the selected course
    useEffect(() => {
        setIsLoading(true);
        const course = all_courses.find((c) => c.name === courseName);
        if (course) {
            setSelectedCourse(course);
        }
        setIsLoading(false);
    }, [courseName]);

    // Email sending functionality
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        try {
            await emailjs.sendForm(
                'service_w3t17uv', 
                'template_5s16f4h', 
                form.current, 
                { publicKey: 'JyHwk0wdw6SS0qP5x' }
            );
            window.alert('Enrollment request sent successfully!');
            setClicked(false);
        } catch (error: any) {
            console.error('Failed to send email:', error.text);
            window.alert('Failed to send enrollment request. Please try again.');
        }
    };

    // Search functionality
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filter courses based on search term and category
    const getFilteredCourses = (): Course[] => {
        let courses = showAllCourses ? all_courses : all_courses.slice(0, 6);
        
        return courses.filter((course) => {
            const matchesCategory = selectedCategory === 'All' || 
                course.category.toLowerCase() === selectedCategory.toLowerCase();
            const matchesSearch = course.name.toLowerCase().includes(searchTerm) || 
                course.description.toLowerCase().includes(searchTerm);
            const isNotCurrentCourse = course.name !== selectedCourse?.name;
            
            return matchesCategory && matchesSearch && isNotCurrentCourse;
        });
    };

    // Handle course card click
    const handleCourseClick = (courseName: string) => {
        navigate(`/Courses/${courseName}`);
    };

    // Handle enrollment button click
    const handleEnrollClick = () => {
        setClicked(true);
    };

    // Toggle module expansion
    const toggleModule = (index: number) => {
        setExpandedModule(expandedModule === index ? null : index);
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="course-details-container">
                <div className="loading-container">
                    <div className="loading-spinner" />
                    <p>Loading course details...</p>
                </div>
            </div>
        );
    }

    // Course not found state
    if (!selectedCourse) {
        return (
            <div className="course-details-container">
                <div className="error-state">
                    <div className="error-content">
                        <BookOpen size={64} className="error-icon" />
                        <h2>Course not found</h2>
                        <p>The requested course could not be found. Please check the URL or browse our available courses.</p>
                        <Link to="/courses" className="error-cta">
                            <span>Browse All Courses</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const filteredCourses = getFilteredCourses();

    return (
        <div className="course-details-wrapper">
            {/* Hero Section */}
            <div className="course-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="course-breadcrumb">
                            <Link to="/courses">Courses</Link>
                            <ChevronRight size={16} />
                            <span>{selectedCourse.category}</span>
                            <ChevronRight size={16} />
                            <span>{selectedCourse.name}</span>
                        </div>
                        <h1 className="hero-title">{selectedCourse.name}</h1>
                        <p className="hero-description">{selectedCourse.description}</p>
                        
                        <div className="course-stats">
                            <div className="stat-item">
                                <Star className="stat-icon" />
                                <span>4.8 (2,847 reviews)</span>
                            </div>
                            <div className="stat-item">
                                <Users className="stat-icon" />
                                <span>12,543 students</span>
                            </div>
                            <div className="stat-item">
                                <Clock className="stat-icon" />
                                <span>{selectedCourse.period} month{selectedCourse.period > 1 ? 's' : ''}</span>
                            </div>
                            <div className="stat-item">
                                <Globe className="stat-icon" />
                                <span>English</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <button className="enroll-primary-btn" onClick={handleEnrollClick}>
                                <Play size={20} />
                                <span>Enroll Now - ₹{selectedCourse.Price}</span>
                            </button>
                            <div className="price-info">
                                <span className="original-price">₹{selectedCourse.Price * 2}</span>
                                <span className="discount-badge">50% OFF</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-image">
                        <img 
                            src={selectedCourse.image} 
                            alt={`${selectedCourse.name} course cover`}
                        />
                        <div className="image-overlay">
                            <button className="play-preview">
                                <Play size={24} />
                                <span>Preview Course</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="course-details-container">
                {/* Main Course Content */}
                <div className="main-content">
                    {/* Course Overview */}
                    <section className="content-section">
                        <h2 className="section-title">
                            <BookOpen className="section-icon" />
                            Course Overview
                        </h2>
                        <div className="overview-content">
                            <p>{selectedCourse.overview}</p>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="content-section">
                        <h2 className="section-title">
                            <Award className="section-icon" />
                            Skills You'll Master
                        </h2>
                        <div className="skills-grid">
                            {selectedCourse.skills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <CheckCircle className="skill-icon" />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Syllabus Section */}
                    <section className="content-section">
                        <h2 className="section-title">
                            <Calendar className="section-icon" />
                            Course Curriculum
                        </h2>
                        <div className="syllabus-container">
                            <div className="syllabus-header">
                                <p>{selectedCourse.syllabus.length} modules • {selectedCourse.period} month{selectedCourse.period > 1 ? 's' : ''} duration</p>
                            </div>
                            <div className="modules-list">
                                {selectedCourse.syllabus.map((module, index) => (
                                    <div key={index} className="module-item">
                                        <div 
                                            className="module-header"
                                            onClick={() => toggleModule(index)}
                                        >
                                            <div className="module-info">
                                                <span className="module-number">Module {index + 1}</span>
                                                <h4 className="module-title">{module.title}</h4>
                                            </div>
                                            <ChevronRight 
                                                className={`module-arrow ${expandedModule === index ? 'expanded' : ''}`}
                                                size={20} 
                                            />
                                        </div>
                                        {expandedModule === index && (
                                            <div className="module-content">
                                                <p>{module.description}</p>
                                                <div className="module-meta">
                                                    <span className="module-duration">
                                                        <Clock size={14} />
                                                        2-3 weeks
                                                    </span>
                                                    <span className="module-lessons">
                                                        <Play size={14} />
                                                        8-12 lessons
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Instructors Section */}
                    <section className="content-section">
                        <h2 className="section-title">
                            <Users className="section-icon" />
                            Meet Your Instructors
                        </h2>
                        <div className="instructors-grid">
                            {selectedCourse.instructors.map((instructor, index) => (
                                <div key={index} className="instructor-card">
                                    <div className="instructor-avatar">
                                        <Users size={32} />
                                    </div>
                                    <div className="instructor-info">
                                        <h4>{instructor.name}</h4>
                                        <p>{instructor.bio}</p>
                                        <div className="instructor-stats">
                                            <span>⭐ 4.9 rating</span>
                                            <span>👥 10K+ students</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="sidebar">
                    {/* Enrollment Card */}
                    <div className="enrollment-card">
                        <div className="price-section">
                            <div className="current-price">₹{selectedCourse.Price}</div>
                            <div className="price-details">
                                <span className="original-price">₹{selectedCourse.Price * 2}</span>
                                <span className="discount">50% off</span>
                            </div>
                        </div>
                        
                        <button className="enroll-btn" onClick={handleEnrollClick}>
                            <DollarSign size={20} />
                            <span>Enroll Now</span>
                        </button>
                        
                        <div className="enrollment-features">
                            <div className="feature-item">
                                <CheckCircle size={16} />
                                <span>Lifetime access</span>
                            </div>
                            <div className="feature-item">
                                <CheckCircle size={16} />
                                <span>Certificate of completion</span>
                            </div>
                            <div className="feature-item">
                                <CheckCircle size={16} />
                                <span>30-day money-back guarantee</span>
                            </div>
                            <div className="feature-item">
                                <CheckCircle size={16} />
                                <span>Mobile and desktop access</span>
                            </div>
                        </div>
                    </div>

                    {/* Related Courses */}
                    <div className="related-courses">
                        <h3>Related Courses</h3>
                        <div className="related-courses-list">
                            {filteredCourses.slice(0, 4).map((course: Course) => (
                                <div 
                                    key={course.name} 
                                    className="related-course-card" 
                                    onClick={() => handleCourseClick(course.name)}
                                >
                                    <img 
                                        src={course.image} 
                                        alt={`${course.name} course thumbnail`}
                                        loading="lazy"
                                    />
                                    <div className="related-course-info">
                                        <h4>{course.name}</h4>
                                        <p>₹{course.Price}</p>
                                        <div className="course-rating">
                                            <Star size={12} />
                                            <span>4.8</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <Link to='/courses' className="view-all-btn">
                            <span>View All Courses</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Enrollment Form Modal */}
            {clicked && (
                <div className="modal-overlay" role="dialog" aria-modal="true">
                    <div className="modal-backdrop" onClick={() => setClicked(false)} />
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Enroll in {selectedCourse.name}</h3>
                            <button 
                                className="modal-close" 
                                onClick={() => setClicked(false)}
                                aria-label="Close enrollment form"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <form ref={form} onSubmit={sendEmail} className="enrollment-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="user_name">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="user_name"
                                        name="user_name" 
                                        required 
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_email">Email Address *</label>
                                    <input 
                                        type="email" 
                                        id="user_email"
                                        name="user_email" 
                                        required 
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="user_phone">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="user_phone"
                                        name="user_phone" 
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Additional Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    rows={4}
                                    placeholder="Any questions or special requirements?"
                                />
                            </div>
                            
                            <input type="hidden" name="course_name" value={selectedCourse.name} />
                            <input type="hidden" name="course_price" value={selectedCourse.Price} />
                            
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => setClicked(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary">
                                    Submit Enrollment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseDetails;