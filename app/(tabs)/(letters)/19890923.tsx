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
          source={require('@/assets/images/Love.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          I'm fine Halibut You?
        </ThemedText>
      </ThemedView>
<ThemedText>                            5:23 AM</ThemedText>
<ThemedText>Dear My Elena,
</ThemedText>
<ThemedText>
I was gonna mail this card to you one of these days (I've had it for about a month) but I never found the time for it. Well I think the time is right now. I
have insomnia. Either that or I'm going off the deep end. I woke up at 1:30. Tried going to sleep. Couldn't. Decided to get up and do my dishes. I did that.
Then I cleaned my apartment. I tried to hook up my computer to the TV - it didn't work. I did my bills. All the while my nose has been running - so I think I've
been waking people up honking away at 4:30 in the morning. I remembered what you said about losing fluids when you blow your nose (you weren't pulling my
leg, were you?) So everytime I blow my nose, I drink a glass of water, but then that has its consequences; I have to go to the bathroom. Here I am, running
aroun like a maid on uppers, and every ten minutes I blow my nose, take a piss, and drink some water - I think I'm losing it.
</ThemedText>
<ThemedText>
Well I finished my bills. So I started to read all the letters and cards you've sent me ( not to say that I never read them - I should say re-read - whew! I should really watch my diction). Anyway, there I was lying on my bed for a good twenty minutes giggling out loud and smiling so hard it made my face hurt. You
are a really funny person, did I ever tell you that? I wish you were here. I love you. I think I'm going to write another verse to your song. Can't wait to see you!
</ThemedText>
<ThemedText>Love,</ThemedText>
<ThemedText>Christopher</ThemedText>
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
      require("@/assets/songs/close_to_you.mp3")     );
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
      <Button title="Song: Close to You by The Carpenters" onPress={play1} />
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
