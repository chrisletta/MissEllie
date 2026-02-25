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
          source={require('@/assets/images/AcquaintanceReport.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Acquaintance Report
        </ThemedText>
      </ThemedView>
<ThemedText>Dear Ellen,
</ThemedText>
<ThemedText>
I've just filled out a Chris Letta acquaintance report for you. Although I usally do not take the time to write down the answers to all the questions on the previous page, I believe I do evaluate women in three <ThemedText style={{ textDecorationLine: 'line-through' }}>ways</ThemedText> categories: body, mind,
and soul, usually in that order, with  the most superficial criteria evaluated first, and the most mysterious and important characteristics evaluated last.
</ThemedText>
<ThemedText>
After a four month test period, your scores are as follows: </ThemedText>
<ThemedText>BODY (which means "looks" - includes the type of nail polish you wear as well as how you're wrapped) 
you get a 9. ( I guess I'm kind of  like that boyfriend of your girlfriend who doesn't want his girlfriend to lose weight - I don't think I could handle it 
if you were a ten)
</ThemedText>
<ThemedText>MIND (This is basically a measure of mental capacity, SAT scores and Sunday X-word scores) you get a 9. ( I like it that you're only a little
bit smarter than me ... if you were a ten, I'd be afraid you'd be too smart and you'd play tricks on me and I wouldn't know it)
</ThemedText>
<ThemedText>Finally the last category is SOUL and probably the hardest to evaluate. It takes the longest to ???? It involves the intangible, the spirit,
the uniqueness of the woman. After four months of study, you get a 10.
</ThemedText>
<ThemedText> Now don't you feel better, you passed!
</ThemedText>
<ThemedText> Love</ThemedText>
<ThemedText> Chris</ThemedText>
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
      require("@/assets/songs/for_emily_whenever_I_may_find_her.m4a")     );
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
      <Button title="Song: For Emily, Whenever I May Find Her by Paul Simon" onPress={play1} />
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
