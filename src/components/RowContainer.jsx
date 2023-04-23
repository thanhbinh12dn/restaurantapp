import React, { useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const [items, setItems] = useState([]);
  const rowContainerRef = useRef();
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainerRef}
      className={`w-full my-12 flex items-center gap-3 ${
        flag
          ? "overflow-x-scroll scrollbar-none scroll-smooth"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between w-300 md:w-340 h-[225px] min-w-[300px] md:min-w-[340px] my-12 backdrop-blur-lg bg-cardOverlay rounded-lg p-2 hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
              >
                <img
                  className="w-full h-full object-contain"
                  src={item?.imageURL}
                  alt={item?.title}
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md "
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white " />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500 ">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img className="h-340" src={NotFound} alt="Not Found" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
