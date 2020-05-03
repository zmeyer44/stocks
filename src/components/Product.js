import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {ProductConsumer} from '../context'
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img} = this.props.product;
    return(
<ProductWrapper className="className=col-9 mx-auto col-md-8 col-lg-7 my-3">
<div className="card">
          <ProductConsumer>
              {value => (
                  <div 
                  className="img-container p-0"
                  onClick={()=>
                    value.handleDetail(id)
                }
                 >

              <Link to="/details">
                <img src={img} alt="product" className="card-img-top"></img>
              </Link>
              
            </div>
              )}
              </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            
          </div>
        </div>
</ProductWrapper>
    );


    
  }}
  Product.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  };
  const ProductWrapper = styled.div``