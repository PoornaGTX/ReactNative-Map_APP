import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import PlaceItem from "./PlaceItem";
import { colors } from "../../constants/colors";

const PlacesList = ({ places }) => {
  if (!places || places.length == 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No Places Added Yet - Start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <PlaceItem place={item} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    fontSize: 16,
    color: colors.primary200,
  },
});
