import React from 'react';
import Slider from  "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {dataWorld} from "../components/data";
const SliderComponent = () => {
    var settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                }
            },
            {
                breakpoint: 640,
                settings: {

                    nextArrow:false,
                    prevArrow:false,


                }
            },

        ],
        customPaging: () =><ul className="custom-dot"></ul>,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>
    };
    return (
        <>
            <section className={"head"}>
                <div className="top-slider">
                    <Slider {...settings}>
                        {dataWorld.map((item,index)=>(
                            <div className="top-slider__item" key={`${item}_${index}`}><h3 className={"top-slider__title"}>{item.title}</h3></div>))}

                    </Slider>

                </div>

            </section>
        </>
    );
};

const CustomNextArrow = (props) => (
    <button className="custom-next-arrow" onClick={props.onClick}>
       <img src={"/img/next1.png"} alt="next"/>
    </button>
);

const CustomPrevArrow = (props) => (
    <button className="custom-prev-arrow" onClick={props.onClick}>
        <img src="/img/prev.png" alt="prev" className={"prevImg"}/>
    </button>
);
export default SliderComponent;
