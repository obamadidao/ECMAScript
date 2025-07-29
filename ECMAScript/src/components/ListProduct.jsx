import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // đúng package

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure you want to delete this product?");
    if (!isConfirm) return;

    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchProduct(); // cập nhật lại sau khi xóa
  };

  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="relative overflow-x-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <table className="w-full text-sm text-left text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                >
                  Delete
                </button>
                <Link
                  to={`/update-product/${product.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
