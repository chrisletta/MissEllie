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
      headerHeight={400}
      headerImage={
      <Image
          source={require('@/assets/images/cupidpms.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Two Palm Trees
        </ThemedText>
      </ThemedView>

<ThemedText>Dear Chr💕stopher,</ThemedText>
<ThemedText>It's a good thing I wasn't PMS💕ng January 1st 1989 or who know what might have happened.</ThemedText>
<ThemedText>Oh sweet💕e, I love you so!💕</ThemedText>
<ThemedText>You are the only one who can get me out of a mood with a couple of k💕sses and n💕bbles <ThemedText style={{fontSize: 24}}>💕</ThemedText>. Whenever I worry about the future I can th💕nk of you and feel better. (So don't go too far - ever) I dec💕ded there w💕ll be no "bus💕ness tr💕ps" w💕thout you're sweet Ell💕e. Hee Hee. Once we're marr💕ed we w💕ll be joined at the h💕p (get 💕t). We have alot of t💕me to make-up for. No more lonely n💕ghts sweet💕e, so strap o that ra💕ncoat 💕ts stormy weather in the forecast.</ThemedText>
<ThemedText>But truly I understand that we w💕ll work best together 💕f we let each other grow l💕ke two palm trees - with the same roots. Isn't that poet💕c. Dr. Peckerhead would love 💕t.</ThemedText>
<ThemedText>Happy Valentine's Day</ThemedText>
<ThemedText>Big SMOOCH</ThemedText>
<ThemedText>I love you</ThemedText>
<ThemedText>Ellen</ThemedText>
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
      require("@/assets/songs/only_you.mp3")     );
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
      <Button title="Song: Only You by The Platters" onPress={play1} />
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
    height: 400,
    width: 290,
    top: 0,
    left: 70,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
