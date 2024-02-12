"use client";

import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";

function ModalComponent({ buttonName, totalAmount, UserID, cartItems }) {
  const [openModal, setOpenModal] = useState(false);
  const [userAddress, setUserAddress] = useState({});
  const [cartNumber, setCartNumber] = useContext(CartContext);

  useEffect(() => {
    const fetchUserAddress = async () => {
      const result = await axios.post(`http://localhost:5000/user/get-user`, {
        UserID: UserID,
      });
      const obj = {
        Name: result.data.Name,
        Addre1: result.data.AddressLine1,
        Addre2: result.data.AddressLine2,
        City: result.data.City,
        State: result.data.State,
        PhoneNo: result.data.PhoneNo,
      };
      setUserAddress(obj);
    };
    fetchUserAddress();
  }, []);

  async function handlePay() {
    try {
      const result = await axios.post(
        "http://localhost:5000/cart/delete-user-items",
        { UserID: UserID }
      );
      const addLiveOrder = await axios.post(
        "http://localhost:5000/user/add-live-orders",
        cartItems
      );
      setCartNumber(0);
      console.log("Order has placed Successfully!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>{buttonName}</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Check Out Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-2">
            <p className="text-base leading-relaxed  dark:text-gray-400 mb-10">
              Total amount to pay:
              <h1 className="text-black-500 text-2xl">₹ {totalAmount}</h1>
            </p>
            <h1 className="bold">Delivery Details</h1>
            <p>Name: {userAddress.Name} </p>
            <p> {userAddress.Addre1} </p>
            <p> {userAddress.Addre2} </p>
            <p>City: {userAddress.City} </p>
            <p>State: {userAddress.State} </p>
            <p>Phone Number: {userAddress.PhoneNo} </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModal(false);
              handlePay();
            }}
          >
            Pay
          </Button>
          {/* <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComponent;
