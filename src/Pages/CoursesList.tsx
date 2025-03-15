import React, { useState, ChangeEvent, MouseEvent } from 'react';
import '../Css/Cart.css';
import { SearchIcon } from 'lucide-react';
import all_courses, { Course } from '../Components/all_courses';
import Contact from '../Components/Contact';
import { useCart } from '../context/CourseContext';
import { Link } from 'react-router-dom';

function CoursesList() {
    const [likedCourses, setLikedCourses] = useState<{ [key: string]: boolean }>({});
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const { addToCart, addTofav } = useCart();
    const [isSideContainerVisible, setIsSideContainerVisible] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

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

    return (
        <>
            <div className="header">
                <div className="search">
                    <li>
                        <SearchIcon />
                    </li>
                    <input
                        type="text"
                        placeholder="Search the Courses"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="cart-container">
                <section className="cart-courses" id="courses">
                    <div className="center-text">
                        <h5>COURSES</h5>
                        <h2>Popular Courses</h2>
                    </div>
                    <div className="courses-grid" style={isSideContainerVisible ? { display: 'flex', gap: '2%' } : { display: 'block' }}>

                        <div className="courses-content-main">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((item: Course) => (
                                    <Link to={`/Courses/${item.name}`}>
                                        <div key={item.name} className="row-main">
                                            <img src={item.image} alt={item.name} />
                                            <div className="course-text-main">
                                                <h1>{item.name}</h1>
                                                <h3>{item.description}</h3>
                                                <h6>{item.period}-Month</h6>
                                                <ul className="sci">
                                                    <li>
                                                        <h6>{item.skills[0]}</h6>
                                                        <h6>{item.skills[1]}</h6>
                                                        <h6>{item.skills[2]}</h6>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No courses found.</p>
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