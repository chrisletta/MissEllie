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
          source={require('@/assets/images/kinda_horny.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Symbolic Lips
        </ThemedText>
      </ThemedView>
<ThemedText>"Oh I'm so lonesome, sad and blue...and kinda horny without you!!" </ThemedText>
<ThemedText> </ThemedText>
<ThemedText>Dearest Christopher,
</ThemedText>
<ThemedText>I am sending you thse lips as a symbol of what you may ask? Well I'll tell ya. I think it was Rembrandt, Leonardo or one of those artists that cut off his ear and sent it to his lover. Well I like my lips where they are don't you? So yes it is a symbol however synthetic of my undying devotion and love for you.</ThemedText>
<ThemedText>I love you more better than I ever have</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText></ThemedText>
<ThemedText>P.S. Now don't you go crazy and start cutting body parts off you hunk of manliness</ThemedText>
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
      require("@/assets/songs/crazy_for_you.m4a")     );
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
      <Button title="Song: Crazy For You by Madonna" onPress={play1} />
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
    width: 300,
    top: 0,
    left: 40,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
