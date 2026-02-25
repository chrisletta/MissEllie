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
          source={require('@/assets/images/LittlePrince.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          The Little Prince
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Chris, my noble prince, passionate lover and best friend,
</ThemedText>
<ThemedText>
Well I don't totally agree that love is not gazing at each other but I agree with the rest of it.
</ThemedText>
<ThemedText>
Anyway how do you like being called a prince? In six short months you have graduated from mere serf (as all men are) to a prince in my life. I think tomorrow you may be king depending on whether or not 
I like dinner. Our six months together have been like Camelot minus Lancelot of course.<ThemedText style={{ backgroundColor: 'yellow' }}> I adore you Chris and I know you feel the same way about me. I only have to look in your eyes to see that you
really do care for me.</ThemedText>
 You said that you still feel a little shaken up by last Saturday's "crisis". I feel great about it or actually what transpired after it was resolved. The strength of a 
relationship is based on both the positive and negative. We already have tons of "positiveness" in our relationship but how the negative aspects are dealt with or resolved between us I feel is an
important strength we share.
</ThemedText>
<ThemedText>
Being honest with each other and communicating our insecurities and doubts will not threaten our relationship but only make it stronger. I feel closer to you now than I ever have. <ThemedText style={{ backgroundColor: 'yellow' }}>I want to be with you
forever Chris.</ThemedText>
 I want to laugh at your jokes and imitations, (s)mother you when you're down, have a few intellectual discussions and maybe have a few dozen kids (yours of course). We still have alot of time
and alot to share!
</ThemedText>
<ThemedText>
 <ThemedText style={{ backgroundColor: 'yellow' }}>I love you Chris</ThemedText>
</ThemedText>
<ThemedText><ThemedText style={{ backgroundColor: 'yellow' }}>Yours only</ThemedText></ThemedText>
<ThemedText>
Ellen
</ThemedText>
<ThemedText></ThemedText>
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
      require("@/assets/songs/faithfully.m4a")     );
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
      <Button title="Song: Faithfully by Journey" onPress={play1} />

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
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
