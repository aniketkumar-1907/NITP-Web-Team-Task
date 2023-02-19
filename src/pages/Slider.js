import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFirestore from "../hooks/useFirestore";
import Footer from '../comps/Footer';
import logo from './logo.jpg';

const Slider = ({ setSelectedImg }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { docs } = useFirestore("images");

  return (
    <div className="slider-div">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="your-carousel">Carousel of Images</h1>
      <Carousel responsive={responsive}>
        {docs &&
          docs.map((doc) => (
            <div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 0 }}
              s
              onClick={() => setSelectedImg(doc.url)}
            >
              <img src={doc.url} alt="uploaded pic" initial={{ opacity: 1 }} />
            </div>
          ))}
      </Carousel>
      <Footer />
    </div>
  );
};

export default Slider;
