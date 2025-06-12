import React from "react";
import "./NoCity.css"
import { FiAlertTriangle } from "react-icons/fi";


const NoCity = () => {
    return (
        <div className="backdrop nocity">
            <form className="nocity__modal">
                <div className="nocity__alert"><FiAlertTriangle/></div>
                <h2 className="nocity__title">Location not found</h2>
            </form>
        </div>
    )
}


export default NoCity