import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function BusinessExplanation(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Signup with your business</Text>
      <Text style={styles.addYourProducts}>
        Add your products that you want to promote
      </Text>
      <Text style={styles.loremIpsum2}>
        Promote! We charge no upfront cost -{"\n"}however a slice of the
        payments will be {"\n"}distributed to your influencers
      </Text>
      <MaterialButtonViolet
        caption="Next"
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 172,
    marginLeft: 71
  },
  addYourProducts: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 52,
    marginLeft: 71
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 63,
    marginLeft: 76
  },
  materialButtonViolet: {
    height: 48,
    width: 250,
    borderRadius: 71,
    marginTop: 338,
    alignSelf: "center"
  }
});

export default BusinessExplanation;