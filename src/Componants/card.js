import React, { Component } from "react"
import img from '../Images/bakeground.jpg'

function Person(props) {
    return (
        <div className="card-info">
            <div className='bakegroundCard'>
                <img src={img} alt="Image bakeground in star" className="bakeground-Img" />
            </div>
            <img key={props.key} src={props.image} alt="imge" className="user-img" />
            
            <div className="information-User">
                <h2>{props.name}</h2>
                <p>{props.summary}</p>
                <div className="soctal">
                    <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Person;