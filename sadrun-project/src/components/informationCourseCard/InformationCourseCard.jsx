import React from 'react';
import "./InformationCourseCard.scss";
import icon1 from "./img/icon1.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";

const propTypes = {};
const defaultProps = {};

const InformationCourseCard = () => {
    return <div className="container">

        <div className="card">

            <div className="p titer">
                <p>مشخصات دوره</p>
            </div>

            <div className="row-1">
                <div className="row-r">
                    <img src={icon1} alt="icon" className="icon-book"/>
                    <p>نام دوره</p>
                </div>

                <p className="course-name">Angular</p>

            </div>

            <div className="row-2">
                <div className="row-r">
                    <img src={icon2} alt="icon" />
                    <p>ترم ارائه شده</p>
                </div>

                <p className="information">3</p>

            </div>

            <div className="row-3">
                <div className="row-r">
                    <img src={icon3} alt="icon" />
                    <p>شروع ترم</p>
                </div>

                <p className="information">1400/3/13</p>

            </div>

            <div className="row-4">
                <div className="row-r">
                    <img src={icon3} alt="icon" />
                    <p>پایان ترم</p>
                </div>

                <p className="information">1400/9/13</p>

            </div>

        </div>

    </div>;
}



export default InformationCourseCard;