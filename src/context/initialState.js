import {
  fetchCart,
  fetchUser,
} from "../components/utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: [], //in video foodItems is null but error should I change this []
  cartShow: false,
  cartItems: cartInfo,
};
