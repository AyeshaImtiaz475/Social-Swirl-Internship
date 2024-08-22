// import React, { useState } from 'react';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const Checkout = ({ setorder }) => {
//     const [billingToggle, setBillingToggle] = useState(true);
//     const [shippingToggle, setShippingToggle] = useState(false);
//     const [paymentToggle, setPaymentToggle] = useState(false);
//     const [paymentMethod, setPaymentMethod] = useState("cod");

//     const cart = useSelector(state => state.cart);
//     const [shippingInfo, setShippingInfo] = useState({
//         address: '',
//         city: '',
//         zip: ''
//     });

//     const navigate = useNavigate();

//     const handleOrder = () => {
//         // Validate input fields
//         if (!shippingInfo.address || !shippingInfo.city || !shippingInfo.zip) {
//             alert("Please complete all shipping information fields.");
//             return;
//         }

//         if (cart.products.length === 0) {
//             alert("Your cart is empty.");
//             return;
//         }

//         const newOrder = {
//             products: cart.products,
//             orderNumber: '12344', // You might want to generate this dynamically
//             shippingInformation: shippingInfo,
//             totalPrice: cart.totalPrice
//         };

//         // Debugging info
//         console.log("Order Details:", newOrder);

//         // Call the passed setorder function
//         if (typeof setorder === 'function') {
//             setorder(newOrder);
//         } else {
//             console.error("setorder is not a function.");
//         }

//         // Navigate to order confirmation
//         navigate('/order-confirmation');
//     };

//     return (
//         <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
//             <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
//             <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
//                 <div className='md:w-2/3'>
//                     {/* Billing Information */}
//                     <div className='border p-2 mb-6'>
//                         <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
//                             <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
//                             {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
//                         </div>
//                         {billingToggle && (
//                             <div className='space-y-4'>
//                                 <div>
//                                     <label className='block text-gray-700'>Name</label>
//                                     <input type="text" name="name" placeholder="Enter Name" className="w-full px-3 py-2 border" />
//                                 </div>
//                                 <div>
//                                     <label className='block text-gray-700'>Email</label>
//                                     <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
//                                 </div>
//                                 <div>
//                                     <label className='block text-gray-700'>Phone</label>
//                                     <input type="text" name="phone" placeholder="Enter phone #" className="w-full px-3 py-2 border" />
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Shipping Information */}
//                     <div className='border p-2 mb-6'>
//                         <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
//                             <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
//                             {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
//                         </div>
//                         {shippingToggle && (
//                             <div className='space-y-4'>
//                                 <div>
//                                     <label className='block text-gray-700'>Address</label>
//                                     <input
//                                         type="text"
//                                         name="address"
//                                         placeholder="Enter Address"
//                                         className="w-full px-3 py-2 border"
//                                         onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className='block text-gray-700'>City</label>
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         placeholder="Enter City"
//                                         className="w-full px-3 py-2 border"
//                                         onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className='block text-gray-700'>Zip Code</label>
//                                     <input
//                                         type="text"
//                                         name="zip"
//                                         placeholder="Enter Zip Code"
//                                         className="w-full px-3 py-2 border"
//                                         onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
//                                     />
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Payment Information */}
//                     <div className='border p-2 mb-6'>
//                         <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
//                             <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
//                             {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
//                         </div>
//                         {paymentToggle && (
//                             <div className='space-y-4'>
//                                 <div className='flex items-center mb-2'>
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         checked={paymentMethod === "cod"}
//                                         onChange={() => setPaymentMethod("cod")}
//                                     />
//                                     <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
//                                 </div>

//                                 <div className='flex items-center mb-2'>
//                                     <input
//                                         type="radio"
//                                         name="payment"
//                                         checked={paymentMethod === "dc"}
//                                         onChange={() => setPaymentMethod("dc")}
//                                     />
//                                     <label className='block text-gray-700 ml-2'>Debit Card</label>
//                                 </div>

//                                 {paymentMethod === 'dc' && (
//                                     <div className='bg-gray-100 p-4 rounded-lg mb-4'>
//                                         <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
//                                         <div className='mb-4'>
//                                             <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
//                                             <input type="text" placeholder='Enter Card Number' className='border p-2 w-full rounded' />
//                                         </div>
//                                         <div className='mb-4'>
//                                             <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
//                                             <input type="text" className='border p-2 w-full rounded' />
//                                         </div>
//                                         <div className='flex justify-between mb-4'>
//                                             <div className='w-1/2 mr-2'>
//                                                 <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
//                                                 <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' required />
//                                             </div>
//                                             <div className='w-1/2 ml-2'>
//                                                 <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
//                                                 <input type="text" placeholder='CVV' className='border p-2 w-full rounded' required />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Order Summary */}
//                 <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
//                     <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
//                     <div className='space-y-4'>
//                         {cart.products.map(product => (
//                             <div key={product.id} className='flex justify-between'>
//                                 <div className='flex items-center'>
//                                     <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
//                                     <div className='ml-4'>
//                                         <h4 className='text-md font-semibold'>{product.name}</h4>
//                                         <p className='text-gray-600'>${product.price} x {product.quantity}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='flex justify-between mt-4'>
//                         <span>Total Price:</span>
//                         <span>${cart.totalPrice.toFixed(2)}</span>
//                     </div>
//                 </div>
//             </div>
//             <button className='mt-8 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800' onClick={handleOrder}>
//                 Place Order
//             </button>
//         </div>
//     );
// };

// export default Checkout;

import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cart = useSelector(state => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: ''
  });

  const navigate = useNavigate();

  const handleOrder = () => {
    // Make sure to check if setOrder is a function before calling it
    if (typeof setOrder === 'function') {
      const newOrder = {
        products: cart.products,
        orderNumber: '12345',  // Placeholder order number
        shippingInformation: shippingInfo,
        totalPrice: cart.totalPrice
      };
      setOrder(newOrder);
      navigate('/order-confirmation');
    } else {
      console.error('setOrder is not a function');
    }
  };

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
          {/* Billing Information */}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
              <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {billingToggle && (
              <div className='space-y-4'>
                <div>
                  <label className='block text-gray-700'>Name</label>
                  <input type="text" name="name" placeholder="Enter Name" className="w-full px-3 py-2 border" />
                </div>
                <div>
                  <label className='block text-gray-700'>Email</label>
                  <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
                </div>
                <div>
                  <label className='block text-gray-700'>Phone</label>
                  <input type="text" name="phone" placeholder="Enter phone #" className="w-full px-3 py-2 border" />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Information */}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
              <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {shippingToggle && (
              <div className='space-y-4'>
                <div>
                  <label className='block text-gray-700'>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className='block text-gray-700'>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  />
                </div>
                <div>
                  <label className='block text-gray-700'>City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  />
                </div>
                <div>
                  <label className='block text-gray-700'>Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Information */}
          <div className='border p-2 mb-6'>
            <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
              <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {paymentToggle && (
              <div className='space-y-4'>
                <div className='flex items-center mb-2'>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                </div>

                <div className='flex items-center mb-2'>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className='block text-gray-700 ml-2'>Debit Card</label>
                </div>

                {paymentMethod === 'dc' && (
                  <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                    <div className='mb-4'>
                      <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                      <input type="text" placeholder='Enter Card Number' className='border p-2 w-full rounded' />
                    </div>
                    <div className='mb-4'>
                      <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                      <input type="text" className='border p-2 w-full rounded' />
                    </div>
                    <div className='flex justify-between mb-4'>
                      <div className='w-1/2 mr-2'>
                        <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                        <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' required />
                      </div>
                      <div className='w-1/2 ml-2'>
                        <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                        <input type="text" placeholder='CVV' className='border p-2 w-full rounded' required />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
          <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
          <div className='space-y-4'>
            {cart.products.map(product => (
              <div key={product.id} className='flex justify-between'>
                <div className='flex items-center'>
                  <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                  <div className='ml-4'>
                    <h4 className='text-md font-semibold'>{product.name}</h4>
                    <p>{product.quantity} x ${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className='font-semibold'>
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className='mt-4 flex justify-between items-center'>
              <span className='text-lg font-semibold'>Total Price:</span>
              <span className='text-xl font-bold'>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 flex justify-end'>
        <button 
          className='bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition mr-4'
          onClick={handleOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;


