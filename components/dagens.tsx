import { recipes } from "@/object/receptMaker";
import { Text, View } from "react-native";
import { ReceptCard } from "./recept-card";

export function TodaysLunchSection() {
  const random = Math.floor(Math.random() * (19 - 0) + 0);

  return (
    <View>
      <Text> Todays Featured Lunch</Text>
      <ReceptCard recept={recipes[random]} />
    </View>
  );
}
