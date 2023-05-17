import React from "react";
import "../index.css"
import pinImg from "../images/pin.svg"


export default function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.imageUrl} className="card-image" alt="location image"/>
            </div>
            <div>
                <div className="card-header">
                    <div className="card-location">
                        <img src={pinImg} alt="location" />
                        <span>{props.location}</span>
                    </div>
                    <a href={props.googleMapsUrl} className="card-link" target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h3 className="card-title">{props.title}</h3>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}