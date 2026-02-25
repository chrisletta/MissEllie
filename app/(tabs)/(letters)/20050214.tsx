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
          source={require('@/assets/images/elliefants.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          1989 Valentine
        </ThemedText>
      </ThemedView>
<ThemedText>
Dear Miss Ellie,
</ThemedText>
<ThemedText>Do you remember that very first time</ThemedText>
<ThemedText>I asked you to be my valentine?</ThemedText>
<ThemedText>The year was nineteen hundred and eighty nine,</ThemedText>
<ThemedText>And I asked, "OH PLEEEEASE!! would you be mine?</ThemedText>
<ThemedText></ThemedText>
<ThemedText>You looked at me, as if in shock;</ThemedText>
<ThemedText>"This guy wasn't just another jock...</ThemedText>
<ThemedText>(Oh sure, he's built just like a rock,</ThemedText>
<ThemedText>but he acts like a sheep that's lost his flock)"</ThemedText>
<ThemedText>"If he wants me to act as Mary,</ThemedText>
<ThemedText>He'll follow me from here to there; he</ThemedText>
<ThemedText>Will soon find out I'm quite contrary,</ThemedText>
<ThemedText>While being extra EXTRA-ORDINARY!"</ThemedText>
<ThemedText></ThemedText>
<ThemedText>"Oh, he'll make me dinner, and dress up nice</ThemedText>
<ThemedText>Pretend he's brave, by trapping mice.</ThemedText>
<ThemedText>He'll try to kiss me once or twice...</ThemedText>
<ThemedText>Ah men, always looking for the price</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Tag! You're it! We'll play the game</ThemedText>
<ThemedText>Of love and laughter, and soon we'll flame</ThemedText>
<ThemedText>The fires of passion that knows no name..."</ThemedText>
<ThemedText>(You sense this poem is getting lame...)</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Know this: my love, my little cutie,</ThemedText>
<ThemedText>My log of love will never turn sooty</ThemedText>
<ThemedText>How could it when I gaze upon such beauty,</ThemedText>
<ThemedText>Both inside & out, whoop, whoop, tee doo, tooty!</ThemedText>
<ThemedText>Happy Valentine's Day</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Yours,</ThemedText>
<ThemedText>Christopher</ThemedText>
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
      require("@/assets/songs/i_just_fall_in_love_again.mp3")     );
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
      <Button title="Song: I Just Fall in Love Again by Anne Murray" onPress={play1} />
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
