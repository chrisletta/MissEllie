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
          source={require('@/assets/images/199005_caumsett.jpeg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          In Heaven
        </ThemedText>
      </ThemedView>
<ThemedText>"I miss you so much that I can't eat, I can't sleep, I can't concentrate..[front card]"</ThemedText>
<ThemedText>Okay, okay, so I can eat!" [card inside]</ThemedText>
<ThemedText>Dear Christopher,</ThemedText>
<ThemedText> This is my first night without you for the last week. I want you my warm cuddly bear. Even though our vacation was slow starting I was in heaven (even with my little problem). Only thing I'm not psyched about is the extra padding I seem to acquire when I'm with you. But don't worry by the weekend I should be able to fit into this [picture of bikini] or this [picture of nothing] - yes nothing hee hee</ThemedText>
<ThemedText> I will never lose my appetite for you.</ThemedText>
<ThemedText> 
Big Kiss and Hug
</ThemedText>
<ThemedText>See you soon</ThemedText>
<ThemedText>Bucko</ThemedText>
<ThemedText>Love</ThemedText> 
<ThemedText>Ellen</ThemedText>
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
      require("@/assets/songs/weve_only_just_begun.aac")     );
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
      <Button title="Song: We've Only Just Begun by The Carpenters" onPress={play1} />
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
    width: 400,
    top: 0,
    left: 0,
    bottom: 20,
    marginTop: 0,
    marginBottom: 30,
    position: 'absolute',
  },
});
