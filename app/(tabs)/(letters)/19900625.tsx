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
          source={require('@/assets/images/199006_AnneMarieWedding2.jpeg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Rich and Poor With You
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Christopher,</ThemedText>
<ThemedText>I'm sitting in the waiting room of a child psychologist this morning. Sometimes I'm tempted to speak to the psychologist myself and get analyzed. Anyway it wouldn't be professional and I have you to figure me out. Last night I had a flash of impulsiveness. Let's get married (elope) and run off into the woods of New England. Any woods with a little house with a computer terminal and easy access to shopping. I was contemplating the course of our lives which is so similar to many others. Maybe listening to that Needleman guy enlightened me a little or reminded me of things I have not thought of in a while. Everything we are doing right now is to make money so we can have a better car, more vacations more dinners out and whatever. Essentially spend time working so we can relax more luxuriously. In all honesty I don't think I'd like being poor forever, but if I was poor with you I think I would be happy. I love you and this is the only sure thing that I do know. The rest of my goals and motivations are nebulous. (cloud drawings) I guess what I'm saying is that you give my life meaning and focus. Without you I'd be a log adrift in an ocean of loneliness and abstraction. ( do you understand that? I don't . hee hee)</ThemedText>
<ThemedText>Who loves yah Babe</ThemedText>
<ThemedText>Love</ThemedText>
<ThemedText>forever</ThemedText>
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
      require("@/assets/songs/ill_never_find_another_you.aac")     );
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
      <Button title="Song: I'll Never Find Another You by The Seekers" onPress={play1} />
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
