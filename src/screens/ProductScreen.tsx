import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import FilterModal from "../components/FilterModal";
import { products } from "../data/products";
import Colors from "../styles/colors";

type RouteParams = {
  ProductScreen: {
    category?: string;
    search?: string;
  };
};

export default function ProductScreen() {
  const route =
    useRoute<RouteProp<RouteParams, "ProductScreen">>();

  const category = route.params?.category ?? "All";
  const initialSearch = route.params?.search ?? "";

  const [search, setSearch] = useState(initialSearch);

  const [filterVisible, setFilterVisible] =
    useState(false);

  const [priceFilter, setPriceFilter] =
    useState("All");

  const [ratingFilter, setRatingFilter] =
    useState(0);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory =
        category === "All" ||
        item.category === category;

      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      let matchPrice = true;

      switch (priceFilter) {
        case "Under 1000":
          matchPrice = item.price < 1000;
          break;

        case "1000-5000":
          matchPrice =
            item.price >= 1000 &&
            item.price <= 5000;
          break;

        case "5000-10000":
          matchPrice =
            item.price > 5000 &&
            item.price <= 10000;
          break;

        case "Above 10000":
          matchPrice = item.price > 10000;
          break;

        default:
          matchPrice = true;
      }

      const matchRating =
        ratingFilter === 0 ||
        item.rating >= ratingFilter;

      return (
        matchCategory &&
        matchSearch &&
        matchPrice &&
        matchRating
      );
    });
  }, [
    category,
    search,
    priceFilter,
    ratingFilter,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {category === "All"
          ? "All Products"
          : `${category} Products`}
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity
        style={styles.filterButton}
        onPress={() =>
          setFilterVisible(true)
        }
      >
        <Ionicons
          name="options"
          size={20}
          color="#fff"
        />

        <Text style={styles.filterText}>
          Filters
        </Text>
      </TouchableOpacity>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) =>
          item.id.toString()
        }
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 15,
          paddingBottom: 30,
        }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No products found.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />

      <FilterModal
        visible={filterVisible}
        onClose={() =>
          setFilterVisible(false)
        }
        onApply={(price, rating) => {
          setPriceFilter(price);
          setRatingFilter(rating);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    padding: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  filterText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  row: {
    justifyContent: "space-between",
  },

  emptyContainer: {
    marginTop: 80,
    alignItems: "center",
  },

  emptyText: {
    fontSize: 18,
    color: "#777",
    fontWeight: "600",
  },
});