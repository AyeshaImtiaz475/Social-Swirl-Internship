// import React, { useState } from 'react';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Modal from './Modal';
// import Login from './Login';
// import Register from './Register';
// import { setSearchTerm } from '../redux/productSlice';

// const Navbar = () => {
//     const products = useSelector(state => state.cart.products);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const [dispatch] = useDispatch();
//     const navigate = useNavigate();

//     const [search, setSearch] = useState();

//     const handleSearch=(e) => {
//         e.preventDefault()
//         dispatch(setSearchTerm(search))
//         navigate('/filter-data')
//     }

//     const openSignUp = () => {
//         setIsLogin(false);
//         setIsModalOpen(true);
//     };

//     const openLogin = () => {
//         setIsLogin(true);
//         setIsModalOpen(true);
//     };

//     return (
//         <nav className='bg-white shadow-md'>
//             <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
//                 <div className='text-lg font-bold'>
//                     <Link to="/">e-SHOP</Link>
//                 </div>
//                 <div className='relative flex-1 mx-4'>
//                     <form onSubmit={handleSearch}>
//                         <input
//                             type="text"
//                             placeholder='Search Product'
//                             className='w-full border py-2 px-4'
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                         <FaSearch className='absolute top-3 right-3 text-yellow-500' />
//                     </form>
//                 </div>
//                 <div className='flex items-center space-x-4'>
//                     <Link to="/cart" className='relative'>
//                         <FaShoppingCart className='text-lg' />
//                         {products.length > 0 && (
//                             <span className='absolute top-0 left-3 text-xs w-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
//                                 {products.length}
//                             </span>
//                         )}
//                     </Link>
//                     <button className='hidden md:block' onClick={openLogin}>
//                         Login | Register
//                     </button>
//                     <button className='block md:hidden' onClick={openLogin}>
//                         <FaUser />
//                     </button>
//                 </div>
//             </div>
//             <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
//                 <Link className='hover:underline' to="/">Home</Link>
//                 <Link className='hover:underline' to="/shop">Shop</Link>
//                 <Link className='hover:underline' to="/contact">Contact</Link>
//                 <Link className='hover:underline' to="/about">About</Link>
//             </div>
//             <Modal isModelOpen={isModalOpen} setIsModelOpen={setIsModalOpen}>
//                 {isLogin ? <Login openSignup={openSignUp} /> : <Register openLogin={openLogin} />}
//             </Modal>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/productSlice';

const Navbar = () => {
    const products = useSelector(state => state.cart.products);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch(); // Corrected this line
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate('/filter-data');
    }

    const openSignUp = () => {
        setIsLogin(false);
        setIsModalOpen(true);
    };

    const openLogin = () => {
        setIsLogin(true);
        setIsModalOpen(true);
    };

    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/">e-SHOP</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder='Search Product'
                            className='w-full border py-2 px-4'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch className='absolute top-3 right-3 text-yellow-500' />
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute top-0 left-3 text-xs w-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block' onClick={openLogin}>
                        Login | Register
                    </button>
                    <button className='block md:hidden' onClick={openLogin}>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link className='hover:underline' to="/">Home</Link>
                <Link className='hover:underline' to="/shop">Shop</Link>
                <Link className='hover:underline' to="/contact">Contact</Link>
                <Link className='hover:underline' to="/about">About</Link>
            </div>
            <Modal isModelOpen={isModalOpen} setIsModelOpen={setIsModalOpen}>
                {isLogin ? <Login openSignup={openSignUp} /> : <Register openLogin={openLogin} />}
            </Modal>
        </nav>
    );
};

export default Navbar;

