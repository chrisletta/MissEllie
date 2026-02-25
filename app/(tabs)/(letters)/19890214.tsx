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
          source={require('@/assets/images/main_squeeze.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Happy Valentine's Day to my main squeeze!
        </ThemedText>
      </ThemedView>
<ThemedText>
Dear Ellen,
</ThemedText>
<ThemedText>
 You were right about me not being able to handle compliments. I'm also not good at giving them out, and if I do it's not often enough. I'm talking about you, kid. (Sorry about calling you "kid" but I just got finished watching Casablanca, and I'm feeling a lot like Bogie - but of course, not as cool.)
</ThemedText>
<ThemedText>
In case you didn't know, I like you a lot, and it's getting to be a problem. For instance, at work, I'll be talking to some guy about an IBM System 36, and all of sudden my mind will start to wander and I'll start thinking about what you're doing. As a result, the conversation changes from computer sales to the latest gossip at Play It Again Apparel. So the first thing I've got to do is I've got stop thinking about you. Well, not really stop thinking altogether. But sort of schedule my time around when I should think about you. I must sound pretty stupid right now, but you have to understand that I haven't had much practice writing about this sort of stuff. I admit it's a lot more fun than writing about death or existentialism.
</ThemedText>
<ThemedText>
Overall, I think our relationship is going along pretty well, so far. No major fights. No major ideological disputes (I do have to watch my chauvanism now and then), I love your eyes; you like my nose - what else could you ask for? (I could use a couch)
</ThemedText>
<ThemedText style={{fontSize: 24}}>HAPPY VALENTINES DAY!!!</ThemedText>
<ThemedText>Love,</ThemedText>
<ThemedText>Chris</ThemedText>
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
