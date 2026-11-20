import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { useCart } from "../context/CartContext";
import Colors from "../styles/colors";

export default function CheckoutScreen() {
  const navigation: any = useNavigation();

  const { totalPrice, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const delivery = totalPrice > 2000 ? 0 : 99;
  const total = totalPrice + delivery;

  const placeOrder = () => {
    if (!name.trim()) {
      Alert.alert("Validation", "Please enter your name");
      return;
    }

    if (phone.length !== 10) {
      Alert.alert("Validation", "Enter a valid phone number");
      return;
    }

    if (!address.trim()) {
      Alert.alert("Validation", "Please enter your address");
      return;
    }
    

    clearCart();

    navigation.replace("OrderSuccess");
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        Checkout
      </Text>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Customer Details
        </Text>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          placeholder="Delivery Address"
          multiline
          numberOfLines={4}
          style={[styles.input, { height: 100 }]}
          value={address}
          onChangeText={setAddress}
        />

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Payment Method
        </Text>

        <View style={styles.paymentRow}>
          <Ionicons
            name="cash-outline"
            size={26}
            color={Colors.primary}
          />

          <Text style={styles.paymentText}>
            Cash on Delivery
          </Text>

        </View>

      </View>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Order Summary
        </Text>

        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text>₹ {totalPrice}</Text>
        </View>

        <View style={styles.row}>
          <Text>Delivery</Text>
          <Text>
            {delivery === 0 ? "FREE" : `₹ ${delivery}`}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.total}>
            Total
          </Text>

          <Text style={styles.total}>
            ₹ {total}
          </Text>

        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={placeOrder}
      >
        <Text style={styles.buttonText}>
          Place Order
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  paymentText: {
    marginLeft: 12,
    fontSize: 17,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

});