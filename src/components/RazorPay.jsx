import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { firestore } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { addOrders } from '../redux/userOrdersSlice';

const RazorPay = (props) => {
  const user = useSelector(setUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buyNow = async () => {
    var options = {
      key: "rzp_test_JHYaX11s6e4is0",
      key_secret: "w1ImdQ3gNSxBHonSUOYw7lZU",
      amount: parseInt(props.amount * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + props.id,
      name: "sneek-shop",
      description: "for testing purpose",
      handler: async function (response) {
        console.log(response);
        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          Items: props.items,
          Address: props.address,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: user.userData.email,
          userid: user.userData.uid,
          paymentId

        };

        console.log(orderInfo);

        try {
           
        //   Assuming `addDoc` and `firestore` are defined elsewhere in your code.
          const orderRef = collection(firestore, 'orders');
          await addDoc(orderRef, orderInfo);

          dispatch(addOrders({ orders: props.items, userId:user.userData.uid }));

          navigate('/prevorders', { replace: true });
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <div>
      <button
        className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
        onClick={buyNow}
      >
        Place Order
      </button>
    </div>
  );
};

export default RazorPay;
