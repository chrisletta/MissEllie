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
      headerHeight={300}
      headerImage={
      <Image
          source={require('@/assets/images/Halloween1989.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Happy 11 month anniversary
        </ThemedText>
      </ThemedView>
<ThemedText> </ThemedText>
<ThemedText>Dearest Chr💕stopher,
</ThemedText>
<ThemedText>Happy Halloween and Happy (almost) 11 month anniversary. Yes we've been goin out 10 months and one starting the big 11. 
I love you Chris.  <ThemedText style={{ backgroundColor: 'yellow' }}>I don't know how I existed happily before you. Everything about you is perfect for me </ThemedText>
from your smile right on down...
to well I think you can finish the sentence.</ThemedText>
<ThemedText>I need you to make me laugh and to keep me warm with your smile. Every morning I wake up and think about you and wish that the 
time will go fast so I can see you. <ThemedText style={{ backgroundColor: 'yellow' }}>You'll always be the most important person for me Chris. I'll always look out for you Chris and try to make you
the happiest guy in Queens no NY no the East Coast ... OK the galaxy.</ThemedText>
</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love and kisses, </ThemedText>
<ThemedText>Your</ThemedText>
<ThemedText>Tiger Elly</ThemedText>
<ThemedText></ThemedText>
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
      require("@/assets/songs/how_sweet_it_is.m4a")     );
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
      <Button title="Song: How Sweet It Is by James Taylor" onPress={play1} />
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
    height: 300,
    width: 240,
    top: 0,
    left: 70,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
