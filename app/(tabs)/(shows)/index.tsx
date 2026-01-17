import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function ShowsScreen() {
  return (
    <View>
      <Text>Select performance type... </Text>
      <Link href="tv" asChild>
        <Button title="Television" />
      </Link>
      <Link href="movies" asChild>
        <Button title="Movies" />
      </Link>
      <Link href="plays" asChild>
        <Button title="Plays" />
      </Link>
      <Link href="concerts" asChild>
        <Button title="Concerts" />
      </Link>
      <Link href="ballet" asChild>
        <Button title="Ballet" />
      </Link>
      <Link href="standupcomedy" asChild>
        <Button title="Standup Comedy" />
      </Link>
    </View>
  );
}