// components/bulleting.js
import { View, Text } from "react-native";

export function BulletItem({ children }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 8 }}>
      <Text style={{ fontSize: 16 }}>{"\u2022"}</Text>
      <Text style={{ flex: 1, fontSize: 16, marginLeft: 8 }}>
        {children}
      </Text>
    </View>
  );
}