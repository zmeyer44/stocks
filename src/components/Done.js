import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer2 } from "./Buttons";
export default class Done extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto text-center pt-5">
            <h1 className="display-3 d-none d-lg-block mb-3 text-green">Congratulations!</h1>
            <h1 className="display-4 d-none d-md-block d-lg-none text-green">Congratulations!</h1>
            <h1 className="display-5 d-block d-md-none d-lg-none text-green">Congratulations!</h1>
            <h1 className="my-2">Now it's time to start trading</h1>
            <h2></h2>
            <h3 className="mt-5 mb-lg-5 mb-4">
              We hope you have found this informative and all suggestions are
              greatly appreciated.
            </h3>
          </div>
        </div>
        <div className="row mt-3 align-items-center">

            <div className="mx-auto">
<img src="../img/approval-512.png" width="300px" alt="logo" className="mx-5"></img>
            </div>
            <div className="col-lg-4 col-0"></div>
            <div className=" mx-auto">
          <Link to="/stats" className="mx-auto my-0 align-items-center">
            <ButtonContainer2 className="px-4">
                <div className="row align-items-center">
              <span className="mr-2">
                <i className="fas fa-search fa-2x"></i>
              </span>
              Look for a Stock
              </div>
            </ButtonContainer2>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}
