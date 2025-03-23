import React, { FormEvent, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Css/form.css";

export default function JoinForm() {
    const navigate = useNavigate();

    useEffect(() => {
        // Disable body scroll when modal is open
        document.body.classList.add("modal-open");
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    const handleClose = () => {
        navigate(-1); // Go back to previous page
    };

    const formRef = useRef<HTMLFormElement>(null);

    const sendDataToGoogleSheets = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const jsonData = Object.fromEntries(formData.entries());


            try {
                const response = await fetch("http://localhost:5001/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(jsonData),
                });

                const result = await response.json();
                console.log(result);

                if (response.ok) {
                    alert("Data added successfully!");
                } else {
                    alert("Error: " + result.error);
                }
            } catch (error) {
                console.error("Submission failed:", error);
            }
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <span className="close-btn" onClick={handleClose}>&times;</span>
                <h2>Become an Instructor – Join Our Team Today!</h2>
                <form ref={formRef} onSubmit={sendDataToGoogleSheets}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="first_name" required />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" name="last_name" required />
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" name="email" required />
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" required />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" name="City" required />
                    </div>
                    <div>
                        <label>Area Of Intrest</label>
                        <select name="age" required>
                            <option key="Web" value="Full Stack Dev">Full Stack Dev</option>
                            <option key="App" value="App Dev">App Dev</option>
                            <option key="Web3" value="Web3">Web3 Dev</option>
                            <option key="AIML" value="AIML">AIML</option>
                            <option key="Cyber" value="Cyber Security">Cyber Security</option>
                            <option key="SEO" value="SEO">SEO</option>
                            <option key="Progmming lang" value="Programming Lang">Programming Lang</option>
                            <option key="DSA" value="DSA">DSA</option>
                        </select>
                    </div>

                    <div>
                        <label>Gender</label>
                        <select name="gender" required>
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <button type="submit" >Enroll</button>
                </form>
            </div>
        </div>
    );
}

