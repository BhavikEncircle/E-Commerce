import React from "react";
import { useEffect } from "react";
import { getProducts } from "./Redux Async Thunk/productSlice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  if (productState.loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
      </div>
    );
  }
  if (productState.error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold text-red-600">
          {productState.error}
        </h2>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to E-commerce
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productState.data.map((product) => (
            <div key={product.id} className="bg-white rounded shadow p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-100 object-cover mb-2"
              />
              <h3 className="text-lg font-medium mb-2">{product.title}</h3>
              <p className="font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
