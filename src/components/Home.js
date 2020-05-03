import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer2 } from "./Buttons";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6  mx-auto mt-5 zoom">
            <img src="../img/HutchMeyer.png" max-width="500px"></img>
          </div>
        </div>

        <div className="row mt10 align-items-center">

        <div className="  mx-auto">
          <Link to="/stats" className="mx-auto my-0 align-items-center">
            <ButtonContainer2 className="px-4">
                <div className="row align-items-center text-center">
              <span className="mr-2">
                <i className="fas fa-search fa-2x"></i>
              </span>
              Track a stock
              </div>
            </ButtonContainer2>
          </Link>
          </div>
            <div className="col-md-3 col-0"></div>
            <div className=" mx-auto">
          <Link to="/details" className="mx-auto my-0 align-items-center">
            <ButtonContainer2 className="px-4">
                <div className="row align-items-center text-center">
              <span className="mr-2">
                <i className="fas fa-play-circle fa-2x"></i>
              </span>
              Learn about stocks
              </div>
            </ButtonContainer2>
          </Link>
          </div>
        </div>

        <hr className="mt=5" />
      </div>
    );
  }
}
