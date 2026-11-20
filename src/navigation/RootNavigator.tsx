import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import BottomTabs from "./BottomTabs";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import OrderSuccessScreen from "../screens/OrderSuccessScreen";

export type RootStackParamList = {
  Splash: undefined;
  HomeTabs: undefined;

  ProductScreen: {
  category?: string;
  search?: string;
};

  ProductDetails: {
    productId: number;
  };

  Checkout: undefined;
  OrderSuccess: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="HomeTabs"
        component={BottomTabs}
      />

      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerShown: true,
          title: "Products",
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: true,
          title: "Product Details",
        }}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: true,
          title: "Checkout",
        }}
      />

      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
      />
    </Stack.Navigator>
  );
}