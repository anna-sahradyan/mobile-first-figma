import React from 'react';
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {dataWorld} from "../components/data";
const SliderComponent = () => {
    var settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: () =><ul className="custom-dot"></ul>,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
        responsive: [
            {
                breakpoint: 1440,
                settings: {

                },
            },
            {
                breakpoint: 1024,
                settings: {
                }
            },
            {
                breakpoint: 640,
                settings: {
                    },

            },


        ],

    };
    return (
        <>
            <section className={"head"}>
                <div className="top-slider">
                    <Slider {...settings}>
                        {dataWorld.map((item,index)=>(
                            <div className="top-slider__item" key={`${item}_${index}`}><h3 className={"top-slider__title"}>{item.title}</h3>
                                <p className="top-slider__text">
                                    Di Gі - это диджитал агентство полного цикла, направленное на самый лучший результат наших клиентов в маркетинге, продажах и управлении
                                </p>
                                <button className="top-slider__btn">ПОДРОБНЕЕ</button></div>))}

                    </Slider>

                </div>

            </section>
        </>
    );
};

const CustomNextArrow = (props) => (
    <button className="custom-arrow next" onClick={props.onClick} >
       <img src={"/img/back.svg"} alt="next"/>
    </button>
);

const CustomPrevArrow = (props) => (
    <button className="custom-arrow prev" onClick={props.onClick}>
        <img src="/img/back.svg" alt="prev" className={"prevImg"}/>
    </button>
);
export default SliderComponent;
