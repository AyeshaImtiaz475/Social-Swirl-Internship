// import React from 'react';
// import { useSelector } from 'react-redux';
// import ProductCard from '../components/ProductCard';
// import zeromatch from '../assets/images/zeromatch.png';

// const FilterData = () => {
//     const filterProducts = useSelector(state => state.product.filterData || []);

//     console.log(filterProducts); // Debugging line

//     return (
//         <div>
//             <div className='container mx-auto py-12 px-4 md:px-16 lg:px-24'>
//                 {filterProducts.length > 0 ? (
//                     <>
//                         <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
//                         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
//                             {filterProducts.map(product => (
//                                 <ProductCard key={product.id} product={product} />
//                             ))}
//                         </div>
//                     </>
//                 ) : (
//                     <div className='flex justify-center'>
//                         <img src={zeromatch} alt="No products found" />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FilterData;

import React, { useEffect, useState } from 'react';
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find(product => product.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);

    if (!product) return <div>Loading....</div>;

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
                    <img src={product.image} alt={product.name} className='object-cover h-full w-full' />
                </div>

                <div className='md:w-1/2 p-4 shadow-md md:p-8 flex flex-col items-start gap-4'>
                    <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
                    <p className='text-xl font-semibold text-gray-800 mb-4'>${product.price}</p>
                    <div className='flex items-center mb-4 gap-x-2'>
                        <input id='quantity' type="number" min="1" className='border p-2 w-16' />
                        <button className='bg-yellow-600 text-white py-2 px-4 hover:bg-red-800'>
                            Add to Cart
                        </button>
                    </div>
                    <div className='flex flex-col gap-y-4 mt-4'>
                        <p className='flex items-center'>
                            <FaCarSide className='mr-2' />
                            Delivery & Return
                        </p>
                        <p className='flex items-center'>
                            <FaQuestion className='mr-2' />
                            Ask a Question
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='text-2xl font-semibold mb-2'>Product Description</h3>
                <p>Product Description will go here.</p>
            </div>
        </div>
    );
}

export default ProductDetail;


