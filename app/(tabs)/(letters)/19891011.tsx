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
      headerHeight={290}
      headerImage={
      <Image
          source={require('@/assets/images/paradise.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Two Tickets to Paradise
        </ThemedText>
      </ThemedView>
<ThemedText> </ThemedText>
<ThemedText>To my favorite cannibal,</ThemedText>
<ThemedText>and passion love God</ThemedText>
<ThemedText>I <ThemedText style={{textDecorationLine: 'underline'}}>love</ThemedText> you with the <ThemedText style={{textDecorationLine: 'underline'}}>greatest intensity</ThemedText>
</ThemedText>
<ThemedText>Look at this "tense" couple. Obviously they need a vacation here (Puerta Plata).</ThemedText>
<ThemedText>Of course <ThemedText style={{textDecorationLine: 'underline'}}>paradise</ThemedText> is wherever you are Chris but where we may stay has a bar in the pool which is pretty great also</ThemedText>
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
      require("@/assets/songs/two_tickets_to_paradise.mp3")     );
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
      <Button title="Song: Two Tickets to Paradise by Eddie Money" onPress={play1} />
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
    height: 290,
    width: 390,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
