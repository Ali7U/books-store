import React from "react";
import { Button } from "react-bootstrap";

function Cart(props) {
  const { bookItem, onAdd, onRemove } = props;

  const bookPrice = bookItem.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const taxPrice = bookPrice * 0.15;
  const totalPrice = bookPrice + taxPrice;

  return (
    <div className="bookCart">
      <h2>Cart</h2>
      <hr />
      <div>{bookItem.length === 0 && <div>Cart is empty</div>}</div>

      {bookItem.map((item) => (
        <div className="bk">
          <div>{item.bkName}</div>
          <div className="cbook">
            <button onClick={() => onAdd(item)}>+</button>
            <p>{item.qty}</p>
            <button onClick={() => onRemove(item)}>-</button>
            <p>${item.price}</p>
          </div>
        </div>
      ))}

      {bookItem.length !== 0 && (
        <>
          <hr />
          <div className="bk">
            <div>Price</div>
            <div>${bookPrice}</div>
          </div>
          <div className="bk">
            <div>Tax Price</div>
            <div>${taxPrice}</div>
          </div>
          <div className="bk">
            <div>Total Price</div>
            <div>${totalPrice}</div>
          </div>
          <div>
            <Button onClick={() => alert("request is done")}>Chickout</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
