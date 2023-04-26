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
import girlFlowerSet from "./serviceCard-images/girlFlowerSet .svg";

const serviceList = [
  {
    title: "مدرک معتبر",
    img: certificate,
  },
  {
    title: "امتحان",
    img: exam,
  },
  {
    title: "فرصت های شغلی",
    img: opportunities,
  },
  {
    title: "مشاوره",
    img: counseling,
  },
];

const ServiceCard = () => {
  return (
    <>
      <div className="service-container">
        <img className="path" src={path2} alt="path2" />
        <img className="boy" src={boy2} alt="boy2" />
        <img
          className="girlFlowerSet"
          src={girlFlowerSet}
          alt="girlFlowerSet"
        />
        <div className="service_carts">
          {serviceList.map((item, i) => (
            <ServiceItem title={item.title} img={item.img} />
          ))}
        </div>

        <div className="servicesCartTitle">
          <div className="servicesCart-content">
            <h2> خدمات </h2>
            <p>تمام آنچه نیاز دارید </p>
          </div>
          <img
            className="puepleFlower2"
            src={puepleFlower2}
            alt="puepleFlower2"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

const ServiceItem = (props) => {
  return (
    <div className="cart">
      <span className="cartImg">
        <img src={props.img} alt={props.title} />
      </span>
      <span>{props.title}</span>
    </div>
  );
};
