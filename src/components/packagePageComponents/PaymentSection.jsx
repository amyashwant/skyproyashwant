import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
import { useSelector } from "react-redux";

const PaymentSection = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="checkout-outer" onClick={handleModalToggle}>
        <div className="checkout-sec">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div id="viewcart-style" className="viewcart-style">
                  <span className="img-style1">
                    <img
                      src="https://www.hathway.com/digitaltv-images/cart.png"
                      alt="#"
                    />
                  </span>
                  <p>
                    <span>
                      <span className="add_cart">{cartItems.length}</span>View Cart
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal show={showModal} handleClose={handleCloseModal}>
        <div className="your-shoping-cart">
          <div className="container">
            <div className="title-box">
              <h1>Your Cart</h1>
            </div>
            <div className="product-box">
              <div className="info-box">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <hr />
            <div className="cost-box">
              <div>
                <p>Standard Package</p>
                <p>₹ 0</p>
              </div>
              <div>
                <p>Total VAT</p>
                <p className="VAT">-</p>
              </div>
              <div>
                <p>Total NOK</p>
                <p className="NOK">₹ 0</p>
              </div>
            </div>
            <button className="Checkout-btn">Checkout</button>
              
          </div>
        </div>
      </PaymentModal>
    </>
  );
};

export default PaymentSection;
