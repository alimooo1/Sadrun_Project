import React from "react";
import "./ServiceCart.scss";
import boy2 from "./serviceCard-images/boy@2x.png";
import girl2 from "./serviceCard-images/girl@2x.png";
import certificate from "./serviceCard-images/certificate.svg";
import counseling from "./serviceCard-images/counseling.svg";
import exam from "./serviceCard-images/exam.svg";
import opportunities from "./serviceCard-images/opportunities.svg";
import path2 from "./serviceCard-images/Path 620@2x.png";
import puepleFlower2 from "./serviceCard-images/purpleFlower@2x.png";
import purpleFlower from "./serviceCard-images/purpleFlower@2x.png";
import girlFlowerSet from './serviceCard-images/girlFlowerSet .svg'
const ServiceCard = () => {
  return (
    <>
      <div className="container">
        <img className="path" src={path2} alt="path2" />
        <img className="boy" src={boy2} alt="boy2" />
        <div className="girlFlowerSet">
          <img className="girlFlowerSet" src={girlFlowerSet} alt="girlFlowerSet" />


        </div>
        <div className="service_carts">

          <div className="cart">
            <img src={certificate} alt="certificate" />
            <span>مدرک معتبر </span>
          </div>
          <div className="cart">
            <img src={exam} alt="exam" />
            <span>امتحان </span>
          </div>
          <div className="cart">
            <img src={opportunities} alt="opportunities" />
            <span> فرصت های شغلی </span>
          </div>
          <div className="cart">
            <img src={counseling} alt="counseling" />
            <span> مشاوره </span>
          </div>
        </div>

        <div className="servicesCrtTitle">
          <div className="servicesCart-content">
            <h2> خدمات </h2>
            <p>تمام آنچه نیاز دارید </p>
          </div>
          <img className="puepleFlower2" src={puepleFlower2} alt="puepleFlower2" />
        </div>

      </div>
    </>
  );
};

export default ServiceCard;
