import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Colors from "../styles/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
  onApply: (
    price: string,
    rating: number
  ) => void;
};

export default function FilterModal({
  visible,
  onClose,
  onApply,
}: Props) {
  const [price, setPrice] = useState("All");
  const [rating, setRating] = useState(0);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Filters
          </Text>

          <Text style={styles.section}>
            Price
          </Text>

          {[
            "All",
            "Under 1000",
            "1000-5000",
            "5000-10000",
            "Above 10000",
          ].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                price === item &&
                  styles.selectedOption,
              ]}
              onPress={() => setPrice(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  price === item &&
                    styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.section}>
            Rating
          </Text>

          {[0, 4, 4.5].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                rating === item &&
                  styles.selectedOption,
              ]}
              onPress={() => setRating(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  rating === item &&
                    styles.selectedText,
                ]}
              >
                {item === 0
                  ? "All"
                  : `${item}+ Stars`}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => {
                setPrice("All");
                setRating(0);
              }}
            >
              <Text style={styles.clearText}>
                Clear
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                onApply(price, rating);
                onClose();
              }}
            >
              <Text style={styles.applyText}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  section: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
  },

  option: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#F3F4F8",
    marginBottom: 10,
  },

  selectedOption: {
    backgroundColor: Colors.primary,
  },

  optionText: {
    fontSize: 16,
    color: "#333",
  },

  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  clearButton: {
    width: "45%",
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
  },

  applyButton: {
    width: "45%",
    padding: 15,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },

  clearText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  applyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});