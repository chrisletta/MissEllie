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
          source={require('@/assets/images/summer89.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Drunken Love
        </ThemedText>
      </ThemedView>
<ThemedText>Dearest Ellen, Eleanor, Elena - Helen of Troy
</ThemedText>
<ThemedText>
I would really like to call you up right now but given <ThemedText style={{ textDecorationLine: 'line-through' }}>my sobr</ThemedText> the time and my
sobriety I have agreed to simply write you another of my poetic, but bizarre letters. I love you I love you I love you. Do you think that I am drunk? 
Hardly. I love you. And I also love my frozen burritos which are now being nuked and soon to be un-frozen.
</ThemedText>
<ThemedText>
Do you believe that "in vino veritas" that the drunken slob is the truthful slob. Well I am a slob. A glutton. A lush. A disgrace. But I truly adore you. 
I am passionately in love with you: So in love, htat I will now  <ThemedText style={{ textDecorationLine: 'line-through' }}>righ</ThemedText> write you a 
spontaneious poem expressing my rather pathetic passion which may well be referred to as muddled mush
</ThemedText>
<ThemedText>Ellen's a rose</ThemedText>
<ThemedText>Chris is a bee</ThemedText>
<ThemedText>I love Ellen</ThemedText>
<ThemedText>Hee Hee Hee Hee!</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
Oh my God, my God why can't you be with me?
I miss you!
</ThemedText>
<ThemedText>Love Chris
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
      require("@/assets/songs/i_cant_be_with_you.m4a")     );
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
      <Button title="Song: I Can't Be With You by the Cranberries" onPress={play1} />

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
    width: 400,
    top: 0,
    left: 0,
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
  },
});
