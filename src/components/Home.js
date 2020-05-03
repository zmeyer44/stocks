import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer2 } from "./Buttons";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6  mx-auto mt-5 zoom">
            <img src="../img/HutchMeyer.png" width="500px"></img>
          </div>
        </div>

        <div className="row align-items-center mt10 pt-5 mb-5">
          <ButtonContainer2 className="px-4 ml-5 py-1">
            <Link to="/stats" className="ml-auto my-0 align-items-center">
              <div className="row align-items-center text-blue">
                <span className="mr-2">
                  <i className="fas fa-search fa-2x"></i>
                </span>
                Track a stock
              </div>
            </Link>
          </ButtonContainer2>

          <div className="col-5"></div>

          <ButtonContainer2 className="px-4 button2 py-1">
            <Link to="/details" className="ml-auto align-items-center">
              <div className="row align-items-center text-blue">
                <span className="mr-2">
                  <i className="fas fa-play-circle fa-2x"></i>
                </span>
                Learn About Stocks
              </div>
            </Link>
          </ButtonContainer2>
        </div>

        <hr className="mt=5" />
      </div>
    );
  }
}
