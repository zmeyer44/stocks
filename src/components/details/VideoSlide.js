import React from 'react'
import { ProductConsumer } from "../../context.js";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Buttons";
import {storeProducts, detailProduct} from '../../data';

export default function VideoSlide() {
    return (
        <ProductConsumer>
        {(value) => {
          const { id, title, img, info, video } = value.detailProduct;
          return(
            <div className="container py-5">
            {/*title}*/}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-1">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title*/}
            <div className="row align-items-center">
              <span className="">
                <i
                  className="fas fa-arrow-circle-left
                           fa-3x ttt"
                onClick={()=>value.handleDetailL(id)
              }
                />
              </span>

              <div className="col-9 mx-auto col-md-9 my-1 text-capitalize box">
                <iframe width="100%" height="410px" src={img} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              

              <span className="">
                <i className="fas fa-arrow-circle-right fa-3x ttt" 
                onClick={()=>value.handleDetailR(id)
                }
                />
              </span>
            </div>
            
            
          </div>
        
        )}}
      </ProductConsumer>
            
        
    )
}
