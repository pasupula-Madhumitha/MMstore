import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Colors from "../styles/colors";

interface CategoryCardProps {
  title: string;
  image: any;
  selected: boolean;
  onPress: () => void;
}

export default function CategoryCard({
  title,
  image,
  selected,
  onPress,
}: CategoryCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        selected && styles.selectedCard,
      ]}
    >
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
      />

      <View
        style={[
          styles.overlay,
          selected && styles.selectedOverlay,
        ]}
      >
        <Text
          style={[
            styles.title,
            selected && styles.selectedTitle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 140,
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    marginRight: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary,
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
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignItems: "center",
  },

  selectedOverlay: {
    backgroundColor: Colors.primary,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  selectedTitle: {
    color: "#FFFFFF",
  },
});