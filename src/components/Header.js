import React from 'react';
import Typed from 'react-typed';
import Particles from "react-particles-js";

function Header(props) {
    return (
<>
    <Particles
        params={{
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 1000,
                    }
                },
                shape:{
                    type:"square",
                    stroke:{
                        width:6,
                        color:"#fff"
                    }
                }
            },
        }}
    />
    <div className="header-wrapper">
        <div className="header-info">
            <h1>Web design Web development, React bootstrap</h1>
            <Typed
                className="typed-text"
                strings={[
                    'Web design',
                    'web Development',
                    'Graphics design']}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <button className="btn btn-outline-info my-4">Know More</button>
        </div>
    </div>
</>
    );
}

export default Header;