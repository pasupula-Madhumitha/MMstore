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

import { useWishlist } from "../context/WishlistContext";
import Colors from "../styles/colors";

export default function WishlistScreen() {
  const navigation: any = useNavigation();

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="heart-outline"
          size={100}
          color="#cccccc"
        />

        <Text style={styles.emptyTitle}>
          Wishlist is Empty
        </Text>

        <Text style={styles.emptySubtitle}>
          Save your favourite products here.
        </Text>

        <TouchableOpacity
          style={styles.shopButton}
          onPress={() =>
            navigation.navigate("Home")
          }
        >
          <Text style={styles.shopButtonText}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={wishlist}
        keyExtractor={(item) =>
          item.id.toString()
        }
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                "ProductDetails",
                {
                  productId: item.id,
                }
              )
            }
          >
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={styles.details}>

              <Text
                style={styles.name}
                numberOfLines={2}
              >
                {item.name}
              </Text>

              <Text style={styles.category}>
                {item.category}
              </Text>

              <Text style={styles.price}>
                ₹ {item.price}
              </Text>

              <View style={styles.ratingRow}>
                <Ionicons
                  name="star"
                  color="#FFD700"
                  size={16}
                />

                <Text style={styles.rating}>
                  {item.rating}
                </Text>
              </View>

            </View>

            <TouchableOpacity
              onPress={() =>
                removeFromWishlist(item.id)
              }
            >
              <Ionicons
                name="trash"
                size={24}
                color="red"
              />
            </TouchableOpacity>

          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 15,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },

  emptySubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
    marginBottom: 30,
  },

  shopButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
  },

  shopButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
  },

  details: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
  },

  category: {
    color: "gray",
    marginTop: 5,
  },

  price: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  rating: {
    marginLeft: 5,
    fontWeight: "600",
  },

});