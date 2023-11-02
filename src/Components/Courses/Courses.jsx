import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination' 
import data from "../../data/data.json" 
import {BiPurchaseTagAlt} from "react-icons/bi" 
import "./Courses.css"
import {PiArrowSquareLeftLight} from "react-icons/pi" 
import {PiArrowSquareRightLight} from "react-icons/pi" 
import {carousselProps} from "../../carousselProps"
const Courses = () => {
  return (
    <div className="courses-wrapper" id="courses">
      <div className="paddings innerWidth courses-container">
        <div className="flexColStart courses-header">
                <span className="orangeText">Best Choices</span>
                <span className="primaryText">Top-Rated Courses</span>
        </div>  
        <Swiper slidesPerView={4} 
        spaceBetween={120}  
        {...carousselProps}>
            <ButtonsSlider />
                {
                    data.map((item,index)=>
                    (
                    <SwiperSlide key={index}>
                        <article className="flexColStart course">
                            <img src={item.image} />
                            <div className="flexCenter course-purchase">
                                    <span>{item.price}</span> 
                                    <span><BiPurchaseTagAlt style={{color:"orangered",fontWeight:"bold",fontSize:"2rem"}}/></span>
                            </div>
                            <div className="flexColStart title-container">
                                 <span className="primaryText">{item.name}</span> 
                               
                            </div> 
                            <span className="course-desc secondaryText">{item.detail}</span>  
                        </article>
                    </SwiperSlide>  
                    ))
                }
        </Swiper>   
      </div>
    </div>
  );
};
export default Courses; 
const ButtonsSlider = () => 
{
    const swiper = useSwiper(); 
    return (
        <div className="flexCenter swipeButtons">
                <button onClick={()=>swiper.slidePrev()}>
                <PiArrowSquareLeftLight fontSize={36}/> 
                </button>
                <button onClick={()=>swiper.slideNext()}><PiArrowSquareRightLight fontSize={36}/>
                </button>
        </div>
    )
}
