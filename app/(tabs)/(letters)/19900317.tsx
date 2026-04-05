import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { Audio } from "expo-av";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={450}
      headerImage={
      <Image
          source={require('@/assets/images/lovers_in_paradise.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Who Loves Yah Babe?
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Christopher,</ThemedText>
<ThemedText>Don't worry you still look hot. I don't think you need the hawaian shirts yet... Maybe in a month or so... just joking ... hee hee kissy kissy</ThemedText>
<ThemedText>Well my love this is my second B'day w/ you. Quick can you remember what I bought you last year? 2 seconds please...(picture of clock) I will expect you of course to remember every B'day present I ever give you. I'm glad you were born Christopher and I'm glad we met. (very profound) <ThemedText style={{ backgroundColor: 'yellow' }}>You're my greatest everything. I adore you.</ThemedText>
</ThemedText>
<ThemedText>I have nothing left to say but</ThemedText>
<ThemedText style={{fontSize: 24}}>Who Loves Yah Babe?</ThemedText>
<ThemedText>No not Heather Thomas. Me Me Wonderful Me.</ThemedText>

<M4APlayer />
<ThemedText></ThemedText>
<ThemedText></ThemedText>
         </ParallaxScrollView>
  );
}


export function M4APlayer() {
  const [sound, setSound] = useState(null);

  async function play1() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/evergreen.aac")     );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Song: Evergreen by Barbara Streisand" onPress={play1} />
    </View>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 450,
    width: 400,
    top: 0,
    left: 0,
    bottom: 20,
    marginTop: 0,
    marginBottom: 30,
    position: 'absolute',
  },
});
