import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";

import Colors from "../styles/colors";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");

  const trendingProducts = products.slice(0, 4);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50,
      }}
    >
      {/* App Title */}
      <Text style={styles.appTitle}>
        MMstore
      </Text>

      {/* Search Bar */}
      <SearchBar
        value={search}
        placeholder="Search products..."
        onChangeText={setSearch}
        onSubmitEditing={() => {
          if (search.trim().length > 0) {
            navigation.navigate("ProductScreen", {
              category: "All",
              search: search.trim(),
            });
          }
        }}
      />

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("../../assets/banner/banner.png")}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>

      {/* Shop Now Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Categories")
        }
      >
        <Text style={styles.buttonText}>
          Shop Now
        </Text>
      </TouchableOpacity>

      {/* Trending Products */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          ⭐ Trending Now
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductScreen", {
              category: "All",
            })
          }
        >
          <Text style={styles.viewAll}>
            View All →
          </Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={trendingProducts}
        keyExtractor={(item) =>
          item.id.toString()
        }
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.productRow}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FC",
    paddingHorizontal: 18,
    paddingTop: 15,
  },

  appTitle: {
    fontSize: 38,
    fontWeight: "800",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 18,
    letterSpacing: 1,
    marginTop: 10,
  },

  bannerContainer: {
    width: "100%",
    height: 210,
    borderRadius: 22,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  banner: {
    width: "100%",
    height: "100%",
  },

  button: {
    alignSelf: "center",
    width: 190,
    height: 55,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },

  viewAll: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },

  productRow: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});