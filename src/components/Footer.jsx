import React from 'react';

function Footer(props) {
    return (
        <div className="footer-wrapper shadow py-4">
            <h6 className="lead" >You Can Also Contact Below Link </h6>
            <ul className="list-group list-group-horizontal py-2">
                <li className="list-group-item mx-2"><a href="https://www.facebook.com/0mdsumon1"><i className="fab fa-facebook"></i></a></li>
                <li className="list-group-item"><a href="https://www.linkedin.com/in/engineer-sumon/"><i className="fab fa-linkedin">

                </i></a></li>
                <li className="list-group-item mx-2"><a href="https://www.instagram.com/md_sumon_insta/"><i className="fab fa-instagram-square"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;