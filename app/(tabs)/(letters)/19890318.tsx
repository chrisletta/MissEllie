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
      headerHeight={470}
      headerImage={
      <Image
          source={require('@/assets/images/great_vision.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          First Birthday Card
        </ThemedText>
      </ThemedView>
<ThemedText>
Dear Christopher,
</ThemedText>
<ThemedText>
 "Happy Birthday to one of great vision"
</ThemedText>
<ThemedText>
Love you
</ThemedText>
<ThemedText>
Ellen
</ThemedText>
<ThemedText>
I'm not much for writing what I feel so I guess I'll have to <ThemedText style={{ textDecorationLine: 'underline' }}>"show"</ThemedText> you sometime.
</ThemedText>
<ThemedText>
(isn't that suggestive)
</ThemedText>
<ThemedText></ThemedText>
<ThemedText></ThemedText>
         </ParallaxScrollView>
  );
}


export function M4APlayer() {
  const [sound, setSound] = useState(null);

  async function play1() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/i_do_it_for_you.mp3")     );
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
      <Button title="Song: (Everything I Do) I Do It For You by Bryan Adams" onPress={play1} />
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
    height: 470,
    width: 330,
    top: 0,
    left: 30,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
