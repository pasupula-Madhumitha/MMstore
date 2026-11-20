import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../styles/colors";

export default function OrderSuccessScreen() {
  const navigation: any = useNavigation();

  const orderId =
    "MS" + Math.floor(Math.random() * 900000 + 100000);

  return (
    <View style={styles.container}>

      <View style={styles.circle}>
        <Ionicons
          name="checkmark"
          size={80}
          color="#fff"
        />
      </View>

      <Text style={styles.title}>
        Order Successful!
      </Text>

      <Text style={styles.subtitle}>
        Thank you for shopping with MMstore.
      </Text>

      <Text style={styles.order}>
        Order ID
      </Text>

      <Text style={styles.orderId}>
        #{orderId}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("HomeTabs")
        }
      >
        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },

  subtitle: {
    color: "gray",
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
  },

  order: {
    marginTop: 40,
    fontSize: 18,
    color: "gray",
  },

  orderId: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginTop: 40,
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

});