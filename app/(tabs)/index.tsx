import { TodaysLunchSection } from "@/components/dagens";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState<string>("");

  return (
    <>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Recipe App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter search"
          value={text}
          onChangeText={setText}
        />
        <TodaysLunchSection />
      </ScrollView>
    </>
  );
}

const colors = {
  primary: "#1baff3ff",
  secondary: "#d68fd6",
  background: "#464f51",
  surface: "#000009",
  text: "#defff2",
  textSecondary: "#67AAF9",
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: "auto",
  },
  pageContainer: {
    paddingTop: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  input: {
    justifyContent: "center",
    backgroundColor: colors.background,
    color: colors.text,
    borderColor: "yellow",
    borderWidth: 1,
    borderRadius: 4,
  },
});

/*  // theme.js
export const theme = {
  colors: {
    primary: '#0ff4c6',
    secondary: '#d68fd6',
    background: '#464f51',
    surface: '#000009',
    text: '#defff2',
    textSecondary: '#67AAF9'
  },
  typography: {
    h1: { fontSize: 28, fontWeight: 'bold' },
    h2: { fontSize: 22, fontWeight: '600' },
    body: { fontSize: 16, lineHeight: 24 },
    caption: { fontSize: 12, color: '#8E8E93' }
  },
  spacing: [0, 4, 8, 16, 24, 32, 48],
  borderRadius: [0, 4, 8, 12, 16]
}; */
