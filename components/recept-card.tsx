import { Recept } from "@/object/recept";
import { Image, StyleSheet, Text, View } from "react-native";

interface ReceptCardProps {
  recept: Recept;
}

export function ReceptCard({ recept }: ReceptCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image src={recept.image} />
      <Image source={{ width: 300, height: 250, uri: recept.image }} />
      <Text style={styles.title}>{recept.title}</Text>

      {recept.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredients}>
          * {ingredient}
        </Text>
      ))}

      {recept.instructions.map((instruction, index) => (
        <Text key={index} style={styles.instructions}>
          {index + 1}. {instruction}
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
    padding: 10,
    elevation: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  ingredients: {
    width: 200,
  },
  instructions: {
    marginLeft: 2,
    width: 400,
  },
});
