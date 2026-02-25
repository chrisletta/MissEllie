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
          source={require('@/assets/images/pda.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Ellen's Song
        </ThemedText>
      </ThemedView>                                           
<ThemedText>A rock hardend by life's erosion</ThemedText>
<ThemedText>never needs to let go of emotion</ThemedText>
<ThemedText>It hides from the pain</ThemedText>
<ThemedText>It washes its brain</ThemedText>
<ThemedText>Saying things are allright</ThemedText>
<ThemedText>when deep down inside</ThemedText>
<ThemedText>it has love that's denied.</ThemedText> 
<ThemedText></ThemedText>
<ThemedText>It all happened on this year's dawning.</ThemedText>
<ThemedText>Her eyes met mine, seems like only this morning</ThemedText>
<ThemedText>It wasn't by chance</ThemedText>
<ThemedText>we started to dance.</ThemedText>
<ThemedText>She unwrapped my soul</ThemedText>
<ThemedText>and not before too long</ThemedText>
<ThemedText>I was singing this song</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Elena, I Love You</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Ellen and I, we've been together some time</ThemedText>
<ThemedText>When we're apart, she still stays on my mind</ThemedText>
<ThemedText></ThemedText>
<ThemedText>We learn and we live</ThemedText>
<ThemedText>We care and we give</ThemedText>
<ThemedText>And it all seems so easy</ThemedText>
<ThemedText>Too good to be true</ThemedText>
<ThemedText>I just can't stop saying "I Love You"</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love's road is exhausting and tends to tire</ThemedText>
<ThemedText>But a thousand storms couldn't put out our fire</ThemedText>
<ThemedText>It isn't built with sticks</ThemedText>
<ThemedText>stones, stakes, or bricks</ThemedText>
<ThemedText>Its built on a love</ThemedText>
<ThemedText>That's destined to thrive.</ThemedText>
<ThemedText>Elena, YOU MAKE THIS ROCK COME ALIVE!</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Elena, I Love You</ThemedText>
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
      require("@/assets/songs/longer.m4a")     );
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
      <Button title="Song: Longer by Dan Fogelberg" onPress={play1} />
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
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
