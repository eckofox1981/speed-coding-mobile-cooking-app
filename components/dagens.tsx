import { recipes } from "@/object/receptMaker";
import { Text, View } from "react-native";
import { ReceptCard } from "./recept-card";

export function TodaysLunchSection() {
  let random = recipes[0];

  return (
    <View>
      <Text> Todays Featured Lunch</Text>
      <ReceptCard recept={random} />
    </View>
  );
}
