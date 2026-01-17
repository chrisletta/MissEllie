import { Stack } from 'expo-router';

export default function LettersStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Letters" }} />
      <Stack.Screen name="20250101" options={{ title: "20250101-C" }} />
      <Stack.Screen name="20251021" options={{ title: "20251021-C" }} />
    </Stack>
  );
}