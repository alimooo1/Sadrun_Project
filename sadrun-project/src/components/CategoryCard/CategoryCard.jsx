import React from 'react';
import "./CategoryCard.scss"
import photo1 from './img/chemistry.svg'
import photo2 from './img/computer.svg'
import photo3 from './img/math.svg'
import photo4 from './img/architecture.svg'
import photo5 from './img/stockMarkett.svg'
import photo6 from './img/industry.svg'
import photo7 from './img/physics.svg'
import photo8 from './img/electricity.svg'
import circle1 from './img/circle-b.svg'
import circle2 from './img/circle-l.svg'
import circle3 from './img/circle-3.svg'
import "../../sass/fonts.scss";

const propTypes = {};
const defaultProps = {};

const object = [
    {
        id: "one",
        img: photo1,
        name: "شیمی"
    },
    {
        id: "two",
        img: photo2,
        name: "کامپیوتر"

    },
    {
        id: "three",
        img: photo3,
        name: "ریاضی"

    },
    {
        id: "four",
        img: photo4,
        name: "معماری"

    },
    {
        id: "five",
        img: photo5,
        name: "بازار سهام"

    },
    {
        id: "six",
        img: photo6,
        name: "صنعت"

    },
    {
        id: "seven",
        img: photo7,
        name: "فیزیک"

    },
    {
        id: "eight",
        img: photo8,
        name: "برق"

    }

]


const CategoryCard = () => {
    return <div className="container">

        <div className="header">

       
            <img src={circle1} alt="img" className="circle-b"/>
            <img src={circle2} alt="img" className="circle-l"/>
            <p className="text-1">دسته بندی ها</p>
            <p className="text-2">گستره وسیعی از موضوعات</p>

        </div>

        <div className="CategoryCard">

            <div className="items">
                {object.map((item,index)=>{

                    return( 
                        <div key={index} className="item">
                            <div className="div-img">
                                <img src={item.img} alt='img' className="img"/>
                            </div>
                            <p className={item.id}>{item.name}</p>
                        </div>
                    )
                })}
            </div>


            <div className="div-btn">
                <button className="btn">بیشتر</button>
            </div>

            <img src={circle2} alt="img" className="p-1"/>
            <img src={circle2} alt="img" className="p-2"/>
            <img src={circle2} alt="img" className="p-3"/>
            <img src={circle3} alt="img" className="p-4"/>


        </div>

        <img src={circle1} alt="img" className="p-5"/>
        <img src={circle1} alt="img" className="p-6"/>

    
    </div>;
}


export default CategoryCard;