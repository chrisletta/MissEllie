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
          source={require('@/assets/images/Love.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Flower In The Winter
        </ThemedText>
      </ThemedView>
<ThemedText>You are my flower I found in the winter</ThemedText>
<ThemedText>When everything around me <ThemedText style={{ textDecorationLine: 'line-through' }}>seem dark and dismal</ThemedText> was colored gray,</ThemedText>
<ThemedText>My life in shambles, and my heart in splinters.</ThemedText>
<ThemedText>You picked me up and showed me the way</ThemedText>
<ThemedText>To a mountain so high that I can't come down;</ThemedText>
<ThemedText>It soars above the clouds<ThemedText style={{ textDecorationLine: 'line-through' }}>of life</ThemedText> and touches the stars.</ThemedText>
<ThemedText>You make me so happy I smile like a clown</ThemedText>
<ThemedText>You are my Venus, can I be your Mars?</ThemedText>
<ThemedText>I love you Ellen, <ThemedText style={{ textDecorationLine: 'line-through' }}>don't think that it's</ThemedText> it's not easy to say</ThemedText>
<ThemedText>I'll never love anyone more, NO WAY JOSE.</ThemedText>
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
      require("@/assets/songs/the_rose.mp3")     );
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
      <Button title="Song: The Rose by Bette Midler" onPress={play1} />
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
