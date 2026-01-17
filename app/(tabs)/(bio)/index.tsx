import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

export default function BioScreen() {
  return (
    <View>
      <Image
          source={require('@/assets/images/BayvilleCouch.png')}
          style={styles.reactLogo}
       />
      <Text>Biography... </Text>
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
      <Link href="birth" asChild>
        <Button title="Birth" />
      </Link>
      <Link href="childhood" asChild>
        <Button title="Childhood" />
      </Link>
      <Link href="teens" asChild>
        <Button title="Teens" />
      </Link>
      <Link href="college" asChild>
        <Button title="College" />
      </Link>
      <Link href="marriage/newyearseve" asChild>
        <Button title="Marriage" />
      </Link>
      <Link href="motherhood" asChild>
        <Button title="Motherhood" />
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