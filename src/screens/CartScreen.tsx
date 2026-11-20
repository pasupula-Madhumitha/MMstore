import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../context/CartContext";
import Colors from "../styles/colors";

export default function CartScreen() {
  const navigation: any = useNavigation();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="cart-outline"
          size={100}
          color="#CCCCCC"
        />

        <Text style={styles.emptyTitle}>
          Your Cart is Empty
        </Text>

        <Text style={styles.emptySubtitle}>
          Add some products to continue shopping.
        </Text>
      </View>
    );
  }

  const deliveryCharge = totalPrice > 2000 ? 0 : 99;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <View style={styles.container}>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.info}>

              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.category}>
                {item.category}
              </Text>

              <Text style={styles.price}>
                ₹ {item.price}
              </Text>

              <View style={styles.quantityRow}>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Ionicons
                    name="remove"
                    size={18}
                    color="#fff"
                  />
                </TouchableOpacity>

                <Text style={styles.qtyText}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Ionicons
                    name="add"
                    size={18}
                    color="#fff"
                  />
                </TouchableOpacity>

              </View>

            </View>

            <TouchableOpacity
              onPress={() => removeFromCart(item.id)}
            >
              <Ionicons
                name="trash"
                size={26}
                color="red"
              />
            </TouchableOpacity>

          </View>
        )}
      />

      <View style={styles.summary}>

        <Text style={styles.summaryTitle}>
          Order Summary
        </Text>

        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text>₹ {totalPrice}</Text>
        </View>

        <View style={styles.row}>
          <Text>Delivery</Text>
          <Text>
            {deliveryCharge === 0 ? "FREE" : `₹ ${deliveryCharge}`}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>
            ₹ {grandTotal}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={styles.checkoutText}>
            Proceed to Checkout
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 15,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },

  emptySubtitle: {
    marginTop: 8,
    color: "gray",
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontWeight: "bold",
    fontSize: 17,
  },

  category: {
    color: "gray",
    marginVertical: 5,
  },

  price: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  qtyButton: {
    backgroundColor: Colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold",
  },

  summary: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },

  summaryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  totalText: {
    fontWeight: "bold",
    fontSize: 18,
  },

  checkoutButton: {
    backgroundColor: Colors.primary,
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

});