import React, { Component } from "react";
import { connect } from "react-redux";
import { addComponent } from "./burgerSlice";
import "./css/BaiTapBurger.css";

class Ex_Redux_Burger extends Component {
  renderBreadMid = () => {
    // console.log("this.props: ", this.props);

    let breadMide = [];

    this.props.burgerMaterial.forEach(({ name, quatity }, index) => {
      for (let i = 0; i < quatity; i++) {
        breadMide.push(<div key={index.toString() + i} className={name}></div>);
      }
    });

    return breadMide;
  };
  renderMenu = () => {
    return this.props.burgerMaterial.map(({ name, quatity, price }, index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleAdd(name, -1);
              }}
              className="btn-danger"
            >
              <i className="fa fa-minus" />
            </button>
            <span className="px-2">{quatity}</span>
            <button
              onClick={() => {
                this.props.handleAdd(name, 1);
              }}
              className="btn-success"
            >
              <i className="fa fa-plus" />
            </button>
          </td>
          <td>{price * quatity}</td>
        </tr>
      );
    });
  };
  getTotalMoney = () => {
    let total = 0;
    this.props.burgerMaterial.forEach(
      ({ price, quatity }) => (total += price * quatity)
    );
    return total;
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center py-5">
          <div className="hinhAnh col-6">
            <h3 className="py-5">Bánh Burger</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="menu col-6">
            <h3 className="py-5">Menu</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Thành phần</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {this.renderMenu()}
                <tr className="table-dark text-danger font-weight-bold">
                  <td colSpan="2" className="text-right">
                    TỔNG TIỀN:
                  </td>
                  <td>{this.getTotalMoney()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    burgerMaterial: state.burgerReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (name, value) => {
      dispatch(addComponent({ name, value }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ex_Redux_Burger);
