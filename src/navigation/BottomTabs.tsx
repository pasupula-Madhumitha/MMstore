import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import WishlistScreen from "../screens/WishlistScreen";
import CartScreen from "../screens/CartScreen";

import { useCart } from "../context/CartContext";
import Colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#999",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 10,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name="home"
                size={size}
                color={color}
              />
            );
          }

          if (route.name === "Categories") {
            return (
              <Ionicons
                name="grid"
                size={size}
                color={color}
              />
            );
          }

          if (route.name === "Wishlist") {
            return (
              <Ionicons
                name="heart"
                size={size}
                color={color}
              />
            );
          }

          if (route.name === "Cart") {
            return (
              <View>
                <Ionicons
                  name="cart"
                  size={size}
                  color={color}
                />

                {cartCount > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {cartCount}
                    </Text>
                  </View>
                )}
              </View>
            );
          }

          return (
            <Ionicons
              name="ellipse"
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
      />

      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -8,
    top: -5,

    width: 18,
    height: 18,

    borderRadius: 9,

    backgroundColor: "red",

    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});