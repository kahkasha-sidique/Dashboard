import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';

const Cart = ({ cart }) => {
  console.log(cart.length)
  return (
    <div>

    <div id='shop-addtocart'>
      <h2 id='shop'></h2>
      <table className='shop-cart-table'>
    <tr id='shop-tr'>
    <th>Product</th>
  
    <th>Price</th>
    </tr>
        {cart.map((item, index) => (
          <tr id='table-tr-cart' >
            <td> <img id="cart-img" src={item.img} /> {item.name}</td> 
          
            <td id="price">${item.price} </td> 
          </tr>  
        ))}
</table>
    </div>
 <h2 id='addtocart-count'>{cart.length}</h2>
</div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);