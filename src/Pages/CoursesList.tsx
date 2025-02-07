import React, { useState, ChangeEvent, MouseEvent } from 'react';
import '../Css/Cart.css';
import { SearchIcon, Heart, ShoppingCart } from 'lucide-react';
import all_courses, { Course } from '../Components/all_courses';
import Contact from '../Components/Contact';
import { useCart } from '../context/CourseContext';

function CoursesList() {
    const [likedCourses, setLikedCourses] = useState<{ [key: string]: boolean }>({});
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const { addToCart,addTofav } = useCart();

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

    return (
        <>
            <div className="header">
                <h1>Courses</h1>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search the Courses"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <li>
                        <SearchIcon />
                    </li>
                </div>
            </div>
            <div className="cart-categories">
                <button onClick={(e) => filterCourse(e, 'All')}>All</button>
                <button onClick={(e) => filterCourse(e, 'Web')}>Web</button>
                <button onClick={(e) => filterCourse(e, 'App')}>App</button>
                <button onClick={(e) => filterCourse(e, 'Cyber')}>CyberSecurity</button>
                <button onClick={(e) => filterCourse(e, 'AI/ML')}>AI/ML</button>
            </div>
            <div className="cart-container">
                <section className="cart-courses" id="courses">
                    <div className="center-text">
                        <h5>COURSES</h5>
                        <h2>Popular Courses</h2>
                    </div>

                    <div className="courses-content-main">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((item: Course) => (
                                <div key={item.name} className="row-main">
                                    <img src={item.image} alt={item.name} />
                                    <div className="course-text-main">
                                        <h1>{item.name}</h1>
                                        <h3>{item.description}</h3>
                                        <h6>{item.period}-Month</h6>
                                        <h3>Price: {item.Price}/-</h3>
                                    </div>
                                    <div className="heart">
                                        <Heart
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLikedCourses((prev) => ({
                                                    ...prev,
                                                    [item.name]: !prev[item.name],
                                                }));
                                                addTofav(item)
                                            }}
                                            fill={likedCourses[item.name] ? '#f66962' : '#ffffff'}
                                        />
                                        <ShoppingCart
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                addToCart(item);
                                                console.log("clicked")
                                            }}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No courses found.</p>
                        )}
                    </div>

                    <div className="main-btn">
                        <button className="btn">
                            <a href="#buy">Buy Now</a>
                        </button>
                    </div>
                </section>
            </div>

            <Contact />
        </>
    );
}

export default CoursesList;