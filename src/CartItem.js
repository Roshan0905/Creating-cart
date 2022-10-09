import React from "react";

class CartItem extends React.Component {
  // this.increaseQuantity = this.increaseQuantity.bind(this); //instead of this you can use arrow function
  // increaseQuantity = () => {
  // this.state.qty += 1;
  // console.log("this", this.state);
  //setState form 1
  // this.setState({
  //   qty: this.state.qty + 1,
  // });

  //setState form 2 ->if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  // };

  // decreaseQuantity = () => {
  //   const { qty } = this.state;
  //   if (qty === 1) {
  //     return;
  //   }

  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1,
  //     };
  //   });
  // };
  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}> Rs {price} </div>
          <div style={{ color: "#777" }}> Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 180,
    width: 180,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
