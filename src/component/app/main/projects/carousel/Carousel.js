import styles from "./Carousel.module.css";
import React from "react";
import {connect} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Preview from "../preview/Preview";

function Carousel(props) {
    let settings = {
        dots: false,
        slidesToShow: props.slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return (
        <div className={styles.sliderContent}>
            <Slider {...settings}>
                {
                    props.projects.map((project, i) =>
                        <Preview activeSrc={project.previewUrl}
                                 activeType={project.previewType}
                                 activeId={project.id}
                                 isLink={true}
                                 isLoaded={props.isLoaded}
                                 size={0}
                                 key={i}/>
                    )
                }
            </Slider>
        </div>
    );
}

function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <img src={require('../../../../../assets/rightarrow.svg')}
             className={className}
             style={{...style}}
             onClick={onClick}
             alt="Right arrow"/>
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <img src={require('../../../../../assets/leftarrow.svg')}
             className={className}
             style={{...style}}
             onClick={onClick}
             alt="Left arrow"/>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Carousel);