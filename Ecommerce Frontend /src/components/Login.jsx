import React from 'react';

const Login = ({ openSignup }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter Password"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-yellow-600" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-yellow-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don't have an account?</span>
        <button
          className="text-yellow-600 hover:underline ml-2"
          onClick={openSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
