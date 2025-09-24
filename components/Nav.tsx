import { Image, StyleSheet, View } from "react-native";
export function Nav() {
  return (
    <View style={styles.navView}>
      <Image
        source={require("../assets/fork-and-knife.jpg")}
        style={{ width: 100, height: 100, borderRadius: "50%" }}
      />
      <Image
        source={require("../assets/images/logo-icon.jpg")}
        style={{ width: 100, height: 100, borderRadius: "50%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
});
