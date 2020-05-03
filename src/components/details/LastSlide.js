import React from 'react'
import { ProductConsumer } from "../../context.js";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Buttons";
import {storeProducts, detailProduct} from '../../data';

export default function LastSlide() {
    return (
        <ProductConsumer>
        {(value) => {
          const { id, title, img, info, video } = value.detailProduct;
          return(
            <div className="container py-5">
            {/*title}*/}
            <div className="row">
              <div className="col-9 mx-auto text-center text-slanted text-blue my-1">
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
                <img src={img} className="img-fluid" width="100%" alt="product"></img>
              </div>
              
<Link to="/done">
              <span className="">
                <i className="fas fa-graduation-cap fa-3x ttt grad" 
                onClick={()=>value.handleDetailR(id)
                }
                />
              </span>
              </Link>
            </div>
          </div>
        )}}
      </ProductConsumer>
            
        
    )
}
