import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function PetsScreen() {
  return (
    <View>
      <Text>Select performance type... </Text>
      <Link href="hamster" asChild>
        <Button title="Hamster" />
      </Link>
      <Link href="boots" asChild>
        <Button title="Boots" />
      </Link>
      <Link href="bentley" asChild>
        <Button title="Bentley" />
      </Link>
      <Link href="larry" asChild>
        <Button title="Larry" />
      </Link>
      <Link href="lily" asChild>
        <Button title="Lily" />
      </Link>
      <Link href="sparkles" asChild>
        <Button title="Sparkles" />
      </Link>
      <Link href="misskitty" asChild>
        <Button title="Miss Kitty" />
      </Link>
      <Link href="puffin" asChild>
        <Button title="Puffin" />
      </Link>
    </View>
  );
}