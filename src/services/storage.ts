import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "MYSHOPPY_CART";

export const saveCart = async (cart: any) => {
  try {
    await AsyncStorage.setItem(
      CART_KEY,
      JSON.stringify(cart)
    );
  } catch (e) {
    console.log(e);
  }
};

export const loadCart = async () => {
  try {
    const data = await AsyncStorage.getItem(CART_KEY);

    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};