import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Wrapper = styled.div`
  margin-bottom: 10px;
  overflow: hidden;

  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    opacity: 1;
    color: #f0f0f0;
  }

  .slick-dots li.slick-active button:before {
    color: #e31713;
    opacity: 1;
  }

  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    color: #e31713;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <img src="https://elandroidelibre.elespanol.com/wp-content/uploads/2018/01/mwc-2018.jpg" />
          </div>
          <div>
            <img
              src="https://www.lavanguardia.com/ra/lowres/GODO/LV/p5/WebSite/2018/05/26/img_jcanyissa_20180518-093415_imagenes_lv_terceros_ps_cartel2018.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://www.elperfildelatostada.com/wp-content/uploads/2018/06/cruilla-2018-750x308.jpg"
              alt=""
            />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}

export default SimpleSlider;
