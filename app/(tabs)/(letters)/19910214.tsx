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
          source={require('@/assets/images/snoopy.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Where's the heart shaped ring?
        </ThemedText>
      </ThemedView>
<ThemedText>Dear honey bear</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Read this first</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Things said to oneself when Valentine's day is not valued so materially by the man!💕</ThemedText>
<ThemedText>Where's the hear shaped ring bracelet necklace...</ThemedText>
<ThemedText>hmmm this box o'chocolates only weighs 10 lb's. I saw one bigger in FAO Schwartz!</ThemedText>
<ThemedText>What no 10 dozed Roses!</ThemedText>
<ThemedText></ThemedText>
<ThemedText style={{ textDecorationLine: 'underline' }}>This is how I truly feel:</ThemedText>
<ThemedText>I would go anywhere in that family truckster avec tu. (especially to hmmm let's say California) You know it's true love. This
day is wonderful because it reminds us (me) about love and the people (Chris) who we (I) love. It makes us (me) stop and think how wonderful it is to  have people (Christopher) to love. Enough of this mush. <ThemedText style={{ textDecorationLine: 'underline' }}>But seriously</ThemedText> bring on the 25lb box of Chocolate! 💕</ThemedText>
<ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}><ThemedText style={{ textDecorationLine: 'underline' }}>I love you immensely,</ThemedText></ThemedText></ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText></ThemedText>
<ThemedText>(Chris&Ellen💕)(Ellen&Chris💕) we both have top billing ... hee! hee!</ThemedText>
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
      require("@/assets/songs/i_feel_the_earth_move.m4a")     );
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
      <Button title="Song: I Feel The Earth Move by Carole King" onPress={play1} />
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
    width: 350,
    top: 0,
    left: 20,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
