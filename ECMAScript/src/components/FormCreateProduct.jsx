import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductSchema } from "../Schemas/Product"; 

const FormCreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductSchema),
  });

  const navigate = useNavigate();

  const createProduct = async (product) => {
    try {
      const res = await axios.post("http://localhost:3000/products", product);
      if (res.status === 201) {
        navigate("/products");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating product!");
    }
  };

  const onSubmit = (value) => {
    createProduct(value);
  };

  return (
    <div className="w-[500px] mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Create Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2">
            Product Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="category" className="block mb-2">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            defaultValue=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option value="" disabled>
              Choose a Category
            </option>
            <option value="Laptop">Laptop</option>
            <option value="SmartPhone">SmartPhone</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCreateProduct;
