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
      headerHeight={600}
      headerImage={
      <Image
          source={require('@/assets/images/199007_jimmys_wedding.jpeg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Go Ahead...Jump Me
        </ThemedText>
      </ThemedView>
<ThemedText>Dearest Christopher,</ThemedText>
<ThemedText>I'm sitting in front of the TV thinking of you. I wish you were here so I could tell you about my day. I really loved having you over and hearing about your day face-to-face. You are the person I most want to share everything with. You must think I'm crazy but I can't get enough of you. It meant so much to me that you stayed with me even though I was sick and boring. I guess I thought that you'd only want to be with me when I'm bouncing around full of life. I was wrong once again. It didn't matter in what mood you came home in. I love you when you're old man grumpus, stubborn and difficult (about keys and things) I just adore being with you.</ThemedText>
<ThemedText>I hope this feeling never disappears or fades away. I will do my best to make sure it does not! I'll start my plan today (hee hee).</ThemedText>
<ThemedText>Today at the shower the restaurant was on the Hudson River. It reminded me of what you would be doing today - swimming, frolicking in the waves with thos clinging trunks... Anyway I thought about you and how much I wanted you to be there. The shower itself was somewhat disappointing. No one that is my friend wanted to be there. They were catty and snide about Nanci and her future marriage. I never realized how bitchy they can be. It seems to me they have gotten more so since graduation. Maybe this is why I don't go out with them. Dawn and Jean are the only ones who aren't really catty. Oh well. Don't feel guilty if I do not see my friends often because it just aint much fun. I had to get this off my chest as I will not be talking to you tonite. You'll probably hear it before you read this though. Chris love of my life, my hero, my Ivanhoe, my funny face, my future...</ThemedText>
<ThemedText>I adore you</ThemedText>
<ThemedText>Love</ThemedText>
<ThemedText>Ellie</ThemedText>
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
      require("@/assets/songs/the_power_of_love.aac")     );
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
      <Button title="Song: Power of Love by Celine Dion" onPress={play1} />
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
    height: 600,
    width: 350,
    top: 0,
    left: 20,
    bottom: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
