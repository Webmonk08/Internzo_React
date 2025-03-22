import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import all_courses, { Course } from '../Components/all_courses';
import '../Css/CourseDetail.css';
import emailjs from '@emailjs/browser';
import { ArrowLeftRight, ArrowRightIcon, ChevronRight, Clock } from "lucide-react";
import AddressForm from '../Components/Form';

function CourseDetails() {
    const form = useRef<HTMLFormElement>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();
    const { courseName } = useParams<{ courseName: string }>();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [Clicked, SetClicked] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [showAllCourses, setShowAllCourses] = useState(false);

    useEffect(() => {
        const newCourse = all_courses.find((c) => c.name === courseName);
        if (newCourse) setSelectedCourse(newCourse);
    }, [courseName]);

    if (!selectedCourse) {
        return <h2>Course not found</h2>;
    }

    let displayedCourses = showAllCourses ? all_courses : all_courses.slice(0, 9);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm('service_w3t17uv', 'template_5s16f4h', form.current, {
                publicKey: 'JyHwk0wdw6SS0qP5x',
            }).then(() => {
                window.alert('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error.text);
            });
        }
    };
    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value.toLowerCase());
    }

    displayedCourses = all_courses.filter(
        (course) =>
            (selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase()) &&
            (course.name.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm))
    );
    return (
        <div className="course-details-container">
            <div className="right-container">
                <h1>All Our Other Courses</h1>
                <div className="course-grid">
                    {displayedCourses
                        .filter((item: Course) => item.name !== selectedCourse?.name) // Ensure selectedCourse is excluded
                        .map((item: Course) => (
                            <Link to={`/Courses/${item.name}`}>
                                <div key={item.name} className="course-card" onClick={() => navigate(`/Courses/${item.name}`)}>
                                    <img src={item.image} alt={item.name} />
                                    <div className="course-text">
                                        <h1>{item.name}</h1>
                                        <h3>{item.description}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
                <Link to='/courses'>
                    <button className="cta">
                        <span className="hover-underline-animation"> See More</span>
                        <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                        >
                            <path
                                id="Path_10"
                                data-name="Path 10"
                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                transform="translate(30)"
                            ></path>
                        </svg>
                    </button>

                </Link>
            </div>
            <div className="left-container">
                <div className="course-img">
                    <img src={selectedCourse.image} alt={selectedCourse.name} />
                </div>
                <div className="head">
                    <h1>{selectedCourse.name}</h1>
                    <p>{selectedCourse.description}</p>
                </div>
                <div className="course-overview">
                    <h2>Overview</h2>
                    <p>{selectedCourse.overview}</p>
                </div>
                <div className="skills-gained">
                    <h2>Skills You'll Gain</h2>
                    <ul>
                        {selectedCourse.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="syllabus">
                    <h2>Syllabus</h2>
                    {selectedCourse.syllabus.map((module, index) => (
                        <div key={index} className="module">
                            <ChevronRight id='Arrow' size={50} />
                            <h4>Module {index + 1}: {module.title}</h4>
                        </div>
                    ))}
                </div>

                <div className="enrollment-options">
                    <h2>Payment</h2>
                    <div>
                        <p>Price: {selectedCourse.Price}/-</p>
                        <Link to={`/Form/${selectedCourse.name}`}>
                            <button onClick={() => SetClicked(true)}>
                                <span className="circle1"></span>
                                <span className="circle2"></span>
                                <span className="circle3"></span>
                                <span className="circle4"></span>
                                <span className="circle5"></span>
                                <span className="text">Enroll Now</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="form" style={{ display: Clicked ? 'block' : 'none' }}>
                <div className='x-button' onClick={() => SetClicked(false)}>X</div>
            </div>
        </div>
    );
}

export default CourseDetails;
