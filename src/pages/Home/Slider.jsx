// src = https://react-bootstrap.github.io/components/carousel/#example
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Carousel.Item from 'react-bootstrap/Carousel';
// import Carousel.Caption from 'react-bootstrap/Carousel';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img02.aws.kooomo-cloud.com/upload/299/cms/494712/default/16238/VKboa1920x8003.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>I still have my feet on the ground, I just wear better shoes</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wss.media.adc.aptos.io/pws/client/images/homepage/slider/200612_seeley.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Marathon_shoes.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>You can never take too much care over the choice of your shoes</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;