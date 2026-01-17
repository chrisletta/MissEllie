import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HolidaysScreen() {
  return (
    <View>
      <Link href="easter" asChild>
        <Button title="Easter" />
      </Link>
      <Link href="fathersday" asChild>
        <Button title="Father's Day" />
      </Link>
      <Link href="julyfourth" asChild>
        <Button title="July 4th" />
      </Link>
      <Link href="birthdays" asChild>
        <Button title="Birthdays" />
      </Link>
      <Link href="halloween" asChild>
        <Button title="Halloween" />
      </Link>
      <Link href="thanksgiving" asChild>
        <Button title="Thanksgiving" />
      </Link>
      <Link href="xmas" asChild>
        <Button title="Christmas" />
      </Link>
    </View>
  );
}