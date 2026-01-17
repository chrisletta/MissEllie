import { Stack } from 'expo-router';

export default function HolidaysStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Holidays" }} />
      <Stack.Screen name="easter" options={{ title: "Television" }} />
      <Stack.Screen name="fathersday" options={{ title: "Movies" }} />
      <Stack.Screen name="julyfourth" options={{ title: "Plays" }} />
      <Stack.Screen name="birthdays" options={{ title: "Birthdays" }} />
      <Stack.Screen name="halloween" options={{ title: "Halloween" }} />
      <Stack.Screen name="thanksgiving" options={{ title: "Thanksgiving" }} />
      <Stack.Screen name="xmas" options={{ title: "Christmas" }} />
    </Stack>
  );
}