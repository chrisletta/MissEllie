import { Stack } from 'expo-router';

export default function RelationsStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Relations" }} />
      <Stack.Screen name="family" options={{ title: "Family" }} />
      <Stack.Screen name="friends" options={{ title: "Friends" }} />
    </Stack>
  );
}