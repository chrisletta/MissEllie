import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "./auth-context";

export default function PasswordScreen() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const { setAuthenticated } = useAuth();

  const submit = () => {
    if (value === "love") {
      setAuthenticated(true);
      router.replace("/(tabs)/(letters)/20260307");
    }
  };

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput secureTextEntry value={value} onChangeText={setValue} />
      <Button title="Submit" onPress={submit} />
    </View>
  );
}
