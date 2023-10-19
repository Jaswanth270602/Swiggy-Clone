import React from 'react';


const Contact = () => {
    return (
        <div className="contact">
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>
            <div className="contact-content">
                <p>If you have any questions or inquiries, feel free to get in touch with us:</p>
                <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                <p>Instagram: <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram Profile</a></p>
                <hr />
                <h2>Our Team</h2>
                <ul>
                    <li>Jaswanth Kumar - CEO</li>
                    <li>Sai Chandu - Marketing Manager</li>
                    <li>Jhon Rich - Sales Representative</li>
                </ul>
                <hr />
                <h2>Our Services</h2>
                <p>We offer a wide range of services to meet your needs:</p>
                <ul>
                    <li>Web Development</li>
                    <li>Digital Marketing</li>
                    <li>Graphic Design</li>
                    <li>Consulting Services</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
