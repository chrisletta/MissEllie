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
          source={require('@/assets/images/candy_and_sex.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Candy and Sex - What a great holiday.
        </ThemedText>
      </ThemedView>
<ThemedText>Valentines day #2</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Dear Christopher,</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love is the tenderness of your</ThemedText>
<ThemedText>touch, the shelter of your arms</ThemedText>
<ThemedText>whispers in the dark</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love is your gentle patience with</ThemedText>
<ThemedText>me and your understanding</ThemedText>
<ThemedText>and trust</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love is snuggling close at night</ThemedText>
<ThemedText>listening to the silence</ThemedText>
<ThemedText>your wakening kiss in the morning</ThemedText>
<ThemedText></ThemedText>
<ThemedText>And most of all love's the</ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>warmth I feel when you</ThemedText></ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>are with me.</ThemedText></ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love your Valentine</ThemedText>
<ThemedText>forever</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Happy Valentines day to the <ThemedText style={{ backgroundColor: 'yellow' }}>greatest bestest friend and lover I ever had</ThemedText>- and of course will continue to have (hee hee)</ThemedText>
<ThemedText>many many times</ThemedText>
<ThemedText>hee hee</ThemedText>
<ThemedText style={{fontSize: 24}}>I 💕 U Chris</ThemedText>
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
      require("@/assets/songs/youre_my_best_friend.m4a")     );
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
      <Button title="Song: You're My Best Friend by Queen" onPress={play1} />
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
