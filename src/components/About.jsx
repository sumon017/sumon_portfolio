import React from 'react';
import about from '../components/img/about.jpg'
function About(props) {
    return (
        <div className="container py-4">
            <div className="row shadow py-4">
                <div className="col-md-6">
                    <img src={about} alt="about" className="about_img"/>
                </div>
                <div className="col-md-6 about_text">
                    <h1>About Me</h1>
                    <p className="lead">
                        Include your education background and any projects you've worked on.
                        If you'd like your “About Me” page to include a CV, keep it short and simple.
                        Your biography should be descriptive, but not too long.
                        Add job headings, dates, and a quick description of your work and skills.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;