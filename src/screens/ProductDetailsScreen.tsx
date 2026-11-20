import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Colors from "../styles/colors";

export default function ProductDetailsScreen() {
  const route: any = useRoute();
  const navigation: any = useNavigation();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isFavourite,
  } = useWishlist();

  const product = products.find(
    (item) => item.id === route.params.productId
  );

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product Not Found</Text>
      </View>
    );
  }

  const favourite = isFavourite(product.id);

  const toggleWishlist = () => {
    if (favourite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.name}>
            {product.name}
          </Text>

          <TouchableOpacity
            onPress={toggleWishlist}
          >
            <Ionicons
              name={
                favourite
                  ? "heart"
                  : "heart-outline"
              }
              size={30}
              color="red"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.price}>
          ₹ {product.price}
        </Text>

        <View style={styles.ratingBox}>
          <Ionicons
            name="star"
            size={18}
            color="#FFD700"
          />

          <Text style={styles.rating}>
            {product.rating}
          </Text>
        </View>

        <Text style={styles.stock}>
          In Stock : {product.stock}
        </Text>

        <Text style={styles.descriptionTitle}>
          Description
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => addToCart(product)}
      >
        <Ionicons
          name="cart"
          size={22}
          color="#fff"
        />

        <Text style={styles.buttonText}>
          Add To Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buyButton}
        onPress={() =>
          navigation.navigate("Checkout")
        }
      >
        <Text style={styles.buttonText}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 320,
    backgroundColor: "#fff",
  },

  details: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },

  category: {
    marginTop: 5,
    color: "gray",
    fontSize: 16,
  },

  price: {
    fontSize: 28,
    color: Colors.primary,
    fontWeight: "bold",
    marginVertical: 10,
  },

  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  rating: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "600",
  },

  stock: {
    marginTop: 10,
    color: "green",
    fontWeight: "600",
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },

  description: {
    marginTop: 10,
    lineHeight: 24,
    color: "#555",
    fontSize: 16,
  },

  cartButton: {
    backgroundColor: Colors.primary,
    margin: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buyButton: {
    backgroundColor: "#FF9800",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
});