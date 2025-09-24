import { Tabs } from "expo-router";
import React from "react";

import { AddIcon } from "@/assets/add";
import { HeartIcon } from "@/assets/heart";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/fork-and-knife.jpg")}
              style={{ width: 28, height: 28, borderRadius: 50 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favoriter"
        options={{
          title: "Favoriter",
          tabBarIcon: ({ color, size }) => (
            <HeartIcon size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/logo-icon.jpg")}
              style={{ width: 28, height: 28, borderRadius: 50 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Lägg_till"
        options={{
          title: "Lägg Till",
          tabBarIcon: ({ color, size }) => (
            <AddIcon size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
