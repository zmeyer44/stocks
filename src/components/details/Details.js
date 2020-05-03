import React, { Component } from "react";
import { ProductConsumer } from "../../context.js";
import { Link } from "react-router-dom";
import { ButtonContainer2 } from "../Buttons";
import { storeProducts, detailProduct } from "../../data";
import NormalSlide from "./NormalSlide";
import FirstSlide from "./FirstSlide";
import LastSlide from "./LastSlide";
import VideoSlide from "./VideoSlide";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, info, video } = value.detailProduct;
          if (video === true) {
            return <VideoSlide />;
          }
          if (id !== storeProducts.length) {
            if (id !== 1) {
              return <NormalSlide />;
            } else {
              return <FirstSlide />;
            }
          } else {
            return <LastSlide />;
          }
        }}
      </ProductConsumer>
    );
  }
}
