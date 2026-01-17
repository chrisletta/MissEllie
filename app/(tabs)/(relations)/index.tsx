import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function RelationsScreen() {
  return (
    <View>
      <Text>Select relationship type... </Text>
      <Link href="family" asChild>
        <Button title="Family" />
      </Link>
      <Link href="friends" asChild>
        <Button title="Friends" />
      </Link>
    </View>
  );
}