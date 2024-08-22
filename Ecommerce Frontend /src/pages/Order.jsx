
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Order = ({ order }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
//             <h2 className="text-3xl font-bold mb-6">Thank you for your order</h2>
//             <p className="text-xl mb-6">
//                 Your order has been placed successfully. You will receive an email confirmation shortly.
//             </p>
//             <div className="mt-6 p-6 border rounded-lg bg-gray-100">
//                 <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                 <p className="mb-4">Order Number: {order.orderNumber}</p>
                
//                 <div className="mb-4">
//                     <h3 className="text-md font-semibold mb-2">Shipping Information</h3>
//                     <p>{order.shippingInformation.name}</p>
//                     <p>{order.shippingInformation.address}</p>
//                     <p>{order.shippingInformation.city}</p>
//                      <p>{order.shippingInformation.zip}</p>
//                 </div>
                
//                 <div className="mb-4">
//                     <h3 className="text-md font-semibold mb-2">Products Ordered</h3>
//                     {order.products.map(product => (
//                         <div key={product.id} className="flex justify-between items-center mt-2">
//                             <p>{product.name} x {product.quantity}</p>
//                             <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
//                         </div>
//                     ))}
//                 </div>
                
//                 <div className="mt-4 flex justify-between items-center">
//                     <span className="text-lg font-semibold">Total Price:</span>
//                     <span className="text-xl font-bold">${order.totalPrice.toFixed(2)}</span>
//                 </div>
//             </div>
            
//             <div className="mt-6 flex space-x-4">
//                 <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
//                     Order Tracking
//                 </button>
//                 <button 
//                     className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition"
//                     onClick={() => navigate('/')}
//                 >
//                     Continue Shopping
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Order;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate();

    if (!order) {
        return (
            <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
                <h2 className="text-3xl font-bold mb-6">Order Error</h2>
                <p className="text-xl mb-6">
                    There was an issue with your order. Please try again.
                </p>
                <button 
                    className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition"
                    onClick={() => navigate('/')}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
            <h2 className="text-3xl font-bold mb-6">Thank you for your order</h2>
            <p className="text-xl mb-6">
                Your order has been placed successfully. You will receive an email confirmation shortly.
            </p>
            <div className="mt-6 p-6 border rounded-lg bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <p className="mb-4">Order Number: {order.orderNumber || 'N/A'}</p>
                
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-2">Shipping Information</h3>
                    <p>{order.shippingInformation?.name || 'N/A'}</p>
                    <p>{order.shippingInformation?.address || 'N/A'}</p>
                    <p>{order.shippingInformation?.city || 'N/A'}</p>
                    <p>{order.shippingInformation?.zip || 'N/A'}</p>
                </div>
                
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-2">Products Ordered</h3>
                    {order.products && order.products.length > 0 ? (
                        order.products.map(product => (
                            <div key={product.id} className="flex justify-between items-center mt-2">
                                <p>{product.name} x {product.quantity}</p>
                                <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products ordered.</p>
                    )}
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Price:</span>
                    <span className="text-xl font-bold">${order.totalPrice?.toFixed(2) || '0.00'}</span>
                </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                    Order Tracking
                </button>
                <button 
                    className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition"
                    onClick={() => navigate('/')}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default Order;

