import { Recept } from "@/object/recept";
import { Image, StyleSheet, Text, View } from "react-native";

interface ReceptCardProps {
  recept: Recept;
}

export function ReceptCard({ recept }: ReceptCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image src={recept.image} />
      {/* <Image source={require("../assets/fork-and-knife.jpg")} /> */}
      <Text style={styles.title}>{recept.title}</Text>

      {recept.ingredients.map((ingredient, index) => (
        <Text key={index}>* {ingredient}</Text>
      ))}

      {recept.instructions.map((instruction, index) => (
        <Text key={index}>
          {index + 1} {instruction}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    elevation: 5,
    margin: 5,
  },
  title: {
    fontSize: 20,
  },
});
