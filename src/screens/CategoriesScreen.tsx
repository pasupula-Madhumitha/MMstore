import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchBar from "../components/SearchBar";

const categories = [
  {
    id: "1",
    name: "Furniture",
    image: require("../../assets/categories/category_furniture.png"),
  },
  {
    id: "2",
    name: "Travel",
    image: require("../../assets/categories/category_travel.png"),
  },
  {
    id: "3",
    name: "Fashion",
    image: require("../../assets/categories/category_fashion.png"),
  },
  {
    id: "4",
    name: "Kitchen",
    image: require("../../assets/categories/category_kitchen.png"),
  },
  {
    id: "5",
    name: "Electronics",
    image: require("../../assets/categories/category_electronics.png"),
  },
  {
    id: "6",
    name: "Cleaning",
    image: require("../../assets/categories/category_cleaning.png"),
  },
  {
    id: "7",
    name: "Bathroom",
    image: require("../../assets/categories/category_bathroom.png"),
  },
  {
    id: "8",
    name: "Decoration",
    image: require("../../assets/categories/category_decoration.png"),
  },
];

export default function CategoriesScreen() {
  const navigation = useNavigation<any>();

  const [search, setSearch] = useState("");


  const handleCategoryPress = (category: string) => {
    navigation.navigate("ProductScreen", {
      category,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Shop by Category
      </Text>

      <SearchBar
        value={search}
        placeholder="Search products..."
        onChangeText={setSearch}
        onSubmitEditing={() => {
          if (search.trim().length > 0) {
            navigation.navigate("ProductScreen", {
            category: "All",
            search,
            });
          }
        }}
      />

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No category found
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}
            onPress={() =>
              handleCategoryPress(item.name)
            }
          >
            <Image
              source={item.image}
              style={styles.image}
            />

            <View style={styles.overlay}>
              <Text style={styles.title}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 18,
  },

  list: {
    paddingTop: 10,
    paddingBottom: 25,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },

  card: {
    width: "48%",
    height: 190,
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingVertical: 12,
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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