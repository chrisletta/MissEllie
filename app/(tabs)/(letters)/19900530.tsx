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
          Funny Faces
        </ThemedText>
      </ThemedView>
<ThemedText>"I miss you so much that I can't eat, I can't sleep, I can't concentrate..[front card]"</ThemedText>
<ThemedText>Hello Again Christof,</ThemedText>
<ThemedText>
I have enclosed the many faces of Chris pre and post M.E. (meeting Ellen). The numbers correspond to the #'s next to the picture. Now on with the story:</ThemedText>
<ThemedText>
1) Chris at age 20. Opening line: Hello, my name is Chris Letta - Linebacker. Notice the bloopy sad expression. Oops I meant the mean, tough, hard ass expression. Of course this photograph is pre M.E.</ThemedText>
<ThemedText>
2) Chris age 24. Has met Ellen. Is wondering "I don't know about this gal? What the heck I'll give it a whirl."</ThemedText>
<ThemedText>
3) Chris age 24.5. Still seeing Ellen. Opening line: Hello, I'm Chris Letta Male Prostitute. Yes Chris is a manly man. Notice the absence of Bloopiness. The Ellen woman has invigorated his being. hee! hee!</ThemedText>
<ThemedText>
4) Chris age 25: Blissfully happy</ThemedText>
<ThemedText>
5) Chris "    ": - I don't know about this Ellen woman. Is she worth the migraine. Yeh!
</ThemedText>
<ThemedText>
6) Chris age 25.5 - major concern - How oh how to make Ellen unneurotic. In picture Letta man is saying, "Ellen- I will buy you the mansion and the yacht as well as the 1000 pre-paid vacations if you just will let go of my cajones/cajunes? OK nuts -
</ThemedText>
<ThemedText>
7) Future Chris - unidentified age. I don't know about this Ellen woman. I guess I'll hangout.
</ThemedText>
<ThemedText>
I love happy endings.
</ThemedText>
<ThemedText>And I especially LOVE
</ThemedText>
<ThemedText>YOO
</ThemedText>
<ThemedText>YOO
</ThemedText>
<ThemedText>YOO!
</ThemedText>
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
