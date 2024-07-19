import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
 

  
  const {expenses,cush,product} = useSelector((s)=>s)
  console.log(expenses);
  console.log(cush);
  const dispatch = useDispatch()

  console.log(product, "aidANA");
  const addProduct = () => {
    if ((productName.trim() === "", productPrice.trim() === "")) {
      alert("Заполните поле!");
    } else {
      let newProduct = {
        id: Date.now(),
        name: productName,
        price: productPrice,
      };
   dispatch({type:"ADD_PRODUCT",payload:newProduct})

    }

    setProductName("");
    setProductPrice("");
  };

  const expensesBuy = (productPrice)=>{
    console.log(productPrice);
    dispatch({type:"EXPENSES_BAY",payload:+productPrice})
}



  return (
    <div className="flex ">
      <div className="container mx-auto my-14 w-[80%] flex items-center justify-center flex-col ">
        <div className="flex gap-96 " >
          <div className=" flex justify-center mt-9  h-40 w-60 bg-violet-900 rounded-md text-white">
            <h1 className="mt-7">Expenses:{expenses} <br />
            </h1>
          </div>

          <div className=" flex justify-center mt-9 h-40 w-60 bg-red-700 rounded-md text-white">
            <h1 className=" mt-7">Cash: <br />
           {cush} <br />
            </h1>
          </div>
        </div>

        <div class="relative z-0 w-[300px]   mb-5 group mt-20 ">
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" Name"
          />

          <input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Price "
          />
        </div>
        <button
       
          onClick={addProduct}
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Buy product
        </button>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" class="px-6 py-3">
                  №
                </th>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Prise
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product.map((el, id) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  ></th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {el.name}
                  </th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {el.price}$
                  </th>

                  <button
                  onClick={()=>expensesBuy(el.price)}
                  
                    type="button"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-1.5 text-center mt-5 me-3 mb-2"
                  >
                   Buy
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
