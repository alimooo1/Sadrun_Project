import React from 'react';
import "./dashboard.scss";
import profile from "./img/profile.svg";

const propTypes = {};
const defaultProps = {};

const dashboard = () => {
    return <div className="container">

        <div className="dashboard">

            <div className="top">

                <img src={profile} alt="profile" />
                <p>زهرا چلوئی دارابی</p>

            </div>

            <div className="down">

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </div>


    </div>;
}




export default dashboard;
