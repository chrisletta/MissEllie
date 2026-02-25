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
          source={require('@/assets/images/jan1990.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Don't Know Much
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Christopher,</ThemedText>
<ThemedText>The other day I was feeling really down,</ThemedText>
<ThemedText>And your soothing words turned this all around.</ThemedText>
<ThemedText>You said that you loved me and would always be true.</ThemedText>
<ThemedText>You made me fell no longer blue 😊</ThemedText>
<ThemedText>I love you more than this</ThemedText>
<ThemedText>And now will seal this poem with a</ThemedText>
<ThemedText>k💕ss</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Love</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText></ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I hoped you still love me after reading that somewhat lame poem. I don't think I'm Hallmark material 
but whatever I do write comes directly from the ol'atria and ventricles -</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>I bet you're wondering why I'm writing on a slant. I don't know.</ThemedText>
<ThemedText style={{ fontStyle: 'italic' }}>"I don't know much but I know I love you and that maybe all I need to know."</ThemedText>
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
      require("@/assets/songs/dont_know_much.m4a")     );
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
      <Button title="Song: Don't Know Much by Aaron Neville and Linda Ronstadt" onPress={play1} />
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
