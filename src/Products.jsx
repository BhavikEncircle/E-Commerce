import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Redux Async Thunk/productSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productState = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (productState.loading)
    return (
      <h2 className="h-screen flex items-center justify-center font-bold text-3xl">
        Loading...
      </h2>
    );
  if (productState.error) return <h2>{productState.error}</h2>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productState.data.map((product) => (
          <div
            key={product.id}
            className="border p-4 cursor-pointer"
            onClick={() => navigate(`/productdetails/${product.id}`)}
          >
            <img src={product.image} className="h-40 mx-auto" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
