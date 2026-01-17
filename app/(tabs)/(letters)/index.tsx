import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

export default function LettersScreen() {
  return (
    <View>
      <Image
          source={require('@/assets/images/BayvilleCouch.png')}
          style={styles.reactLogo}
       />
      <Text>Letters... </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>      
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Link href="20250101" asChild>
        <Button title="20250101-C" />
      </Link>
      <Link href="20251021" asChild>
        <Button title="20251021-C" />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stepContainer: {
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 275,
    width: 240,
    top: 30,
    left: 70,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});