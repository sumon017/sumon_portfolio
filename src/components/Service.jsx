import React from 'react';
import serviceData from "./serviceData";
import "animate.css"
function Service(props) {
    return (
        <div className="container py-4">
            <h1 className="text-center animate__animated animate__slideInDown">Services</h1>
            <div className="row shadow py-4">
                {serviceData.map(item =>{
                    return <div className="col-md-6 card-columns py-1 service-info">
                        <div className="card animate__animated animate__zoomIn">
                            <img className="card-img-top" src={item.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                    <a href="#" className="btn btn-primary">Know More</a>
                                </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Service;