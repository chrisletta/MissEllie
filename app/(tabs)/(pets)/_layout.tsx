import { Stack } from 'expo-router';

export default function ShowsStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Pets" }} />
      <Stack.Screen name="tv" options={{ title: "Television" }} />
      <Stack.Screen name="movies" options={{ title: "Movies" }} />
      <Stack.Screen name="plays" options={{ title: "Plays" }} />
      <Stack.Screen name="concerts" options={{ title: "Concerts" }} />
      <Stack.Screen name="ballet" options={{ title: "Ballet" }} />
      <Stack.Screen name="standupcomedy" options={{ title: "Standyup Comedy" }} />
    </Stack>
  );
}