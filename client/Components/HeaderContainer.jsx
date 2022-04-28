import React from 'react';
import Login from './Login.jsx';
import Cart from './Cart.jsx';

function HeaderContainer(props) {
  return (
    <div className='HeaderContainer'>
      <div className='LeftContainer'>
        <h2>Miyaki</h2>
      </div>
      <div className='RightContainer'>
        {/* <div className='cartIcon'>Cart </div> */}
        <Cart
          cartList={props.cartList}
          isLoggedIn={props.isLoggedIn}
          userID={props.userID}
          deleteFromCart={props.deleteFromCart}
        />
        <Login handleClick={props.handleClick} isLoggedIn={props.isLoggedIn} />
      </div>
    </div>
  );
}

export default HeaderContainer;
