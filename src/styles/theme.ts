import { StyleSheet } from "react-native";
import Colors from "./colors";

const Theme = StyleSheet.create({
  // Screen Container
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  // Main Content Padding
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },

  // Card Style
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    elevation: 4,

    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  // Large Title
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.textPrimary,
  },

  // Section Heading
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
  },

  // Sub Heading
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary,
  },

  // Normal Text
  text: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },

  // Small Text
  caption: {
    fontSize: 13,
    color: Colors.textLight,
  },

  // Price Text
  price: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.price,
  },

  // Discount Badge
  badge: {
    backgroundColor: Colors.discount,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  badgeText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 12,
  },

  // Input
  input: {
    height: 52,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 15,
  },

  // Primary Button
  primaryButton: {
    backgroundColor: Colors.primary,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    marginVertical: 10,
  },

  primaryButtonText: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 17,
  },

  // Center Screen
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Row Layout
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: 12,
  },

  // Product Image
  productImage: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
  },

  // Category Image
  categoryImage: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },

  // Shadow Utility
  shadow: {
    elevation: 5,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
});

export default Theme;