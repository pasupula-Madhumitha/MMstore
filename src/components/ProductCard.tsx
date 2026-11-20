import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Colors from "../styles/colors";

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  const navigation: any = useNavigation();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isFavourite,
  } = useWishlist();

  const favourite = isFavourite(product.id);

  const toggleFavourite = () => {
    if (favourite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProductDetails", {
          productId: product.id,
        })
      }
    >
      
      {/* Wishlist Button */}
      <TouchableOpacity
        style={styles.heartButton}
        onPress={toggleFavourite}
      >
        <Ionicons
          name={favourite ? "heart" : "heart-outline"}
          size={22}
          color="red"
        />
      </TouchableOpacity>

      {/* Product Image */}
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Product Name */}
      <Text
        numberOfLines={2}
        style={styles.name}
      >
        {product.name}
      </Text>

      {/* Category */}
      <Text style={styles.category}>
        {product.category}
      </Text>

      {/* Rating */}
      <View style={styles.ratingRow}>
        <Ionicons
          name="star"
          size={16}
          color="#FFD700"
        />

        <Text style={styles.rating}>
          {product.rating}
        </Text>
      </View>

      {/* Price */}
      <Text style={styles.price}>
        ₹ {product.price}
      </Text>

      {/* Add To Cart */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => addToCart(product)}
      >
        <Ionicons
          name="cart"
          size={18}
          color="#fff"
        />

        <Text style={styles.cartText}>
          Add
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 4,
  },

  discountText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 11,
  },

  heartButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
  },

  image: {
    width: "100%",
    height: 130,
    marginTop: 20,
    marginBottom: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
    minHeight: 40,
  },

  category: {
    color: "#777",
    fontSize: 13,
    marginTop: 4,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  rating: {
    marginLeft: 4,
    fontWeight: "600",
    fontSize: 14,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: 8,
  },

  cartButton: {
    marginTop: 12,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 6,
    fontSize: 15,
  },
});