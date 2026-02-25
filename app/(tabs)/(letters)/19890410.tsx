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
          Top of My List
        </ThemedText>
      </ThemedView>
<ThemedText>
I feel good. Da da nah nah nah na nah! I know that I would, now. Da da na nah na nah nah! Why don't you come over here and talk to me a while? Hmm?
</ThemedText>
<ThemedText>Think of our relationship as a Weeble</ThemedText>
<ThemedText>It may wobble, but it never falls down.</ThemedText>
<ThemedText>
Uh.oh... we're going over the test.
</ThemedText>
<ThemedText>
Some poetry for you:
</ThemedText>
<ThemedText>
A racist, a bully, a hypocrite, an elitist, a casual drug user; Edgar Allan Poe, Jim Morrison, My friends, Frederich Nietzsche, My family,
</ThemedText>
<ThemedText>
Ellen Spatola
</ThemedText>
<ThemedText>
Amaretto cookies, unairconditioned subway cars, shaving, romance novels, losing my money; classical literature, sports, music, fruit del mare, potato chips & Sunday football
</ThemedText>
<ThemedText>
Ellen Spatola
</ThemedText>
<ThemedText>
Facism, totalitarianism, hedonsim, utilitarianism, populism; skepticism, Christianity, Existentialism, Will to Power, Love,
</ThemedText>
<ThemedText>
Ellen Spatola
</ThemedText>
<ThemedText>
</ThemedText>
<ThemedText>
Your on the top of my lists.
</ThemedText>
<ThemedText>
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
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
