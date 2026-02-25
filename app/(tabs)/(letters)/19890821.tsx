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
      headerHeight={350}
      headerImage={
      <Image
          source={require('@/assets/images/billys_wedding.png')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Love in Brooklyn
        </ThemedText>
      </ThemedView>
<ThemedText>                            Sometime in the late afternoon in beautiful downtown Brooklyn...</ThemedText>
<ThemedText>Dear Chris,
</ThemedText>
<ThemedText>
I'm sitting hear in the Brooklyn office looking out the window onto a very disgusting street. The office is near Bed Sty yuck. Anyway I'm waiting for 
Shawn to finish with the psychologist. I<ThemedText style={{ textDecorationLine: 'line-through' }}>started</ThemedText>'m thinking now about the weekend
and that it <ThemedText style={{ backgroundColor: 'yellow' }}>doesn't seem possible that I could love you even more than I did on Friday but I really do.</ThemedText>
</ThemedText>
<ThemedText>
I had thought that if I saw you alot maybe you might get on my nerves or worse I might drive you nuts. Well, I loved every minute of the last week with you
so I'll miss you even more this week. I hope I didn't drive you nuts. Did I? I don't think I did but even if I did tough noogies - no really did I? I wish
you could miraculously appear everytime I think of you. If you did, you would be with me in my car on the BQE while I go on visits, in my <ThemedText style={{ textDecorationLine: 'underline' }}>bed</ThemedText> of course, in the shower, on my couch in the evenings and next to my cheerios in the morning. I 
guess you would never be at work. Christopher, <ThemedText style={{ backgroundColor: 'yellow' }}>I love you and need you desperately (no exaggeration).</ThemedText> Do you think we might start to look like each other?
</ThemedText>
<ThemedText>Hugs & Kisses</ThemedText>
<ThemedText>Love,</ThemedText>
<ThemedText>Ellen</ThemedText>
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
      require("@/assets/songs/a_natural_woman.m4a")     );
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
      <Button title="Song: A Natural Woman by Aretha Franklin" onPress={play1} />
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
    height: 350,
    width: 240,
    top: 0,
    left: 75,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
