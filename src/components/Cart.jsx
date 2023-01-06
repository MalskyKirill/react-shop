function Cart(props) {
  const { order = [], handleBasketShow = Function.prototype } = props;

  return (
    <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
      <i className='material-icons'>shopping_cart</i>
      {order.length ? <span className='cart-quantity'>{(order.reduce((accum, currentOrder) => accum + currentOrder.quantity, 0))}</span> : null}
    </div>
  );
}

export { Cart };


