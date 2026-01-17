import { Stack } from 'expo-router';

export default function BioStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Biography" }} />
      <Stack.Screen name="birth" options={{ title: "Birth" }} />
      <Stack.Screen name="childhood" options={{ title: "Childhood" }} />
      <Stack.Screen name="teens" options={{ title: "Teens" }} />
      <Stack.Screen name="college" options={{ title: "College" }} />
      <Stack.Screen name="marriage" options={{ title: "Marriage" }} />
      <Stack.Screen name="motherhood" options={{ title: "Motherhood" }} />
    </Stack>
  );
}