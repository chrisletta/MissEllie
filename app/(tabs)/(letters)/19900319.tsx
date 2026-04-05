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
      headerHeight={450}
      headerImage={
      <Image
          source={require('@/assets/images/ellen_vacation.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Three Little Words
        </ThemedText>
      </ThemedView>
<ThemedText>(Card Text) "FOR MY GUY</ThemedText>
<ThemedText>Thanks for always knowing when to say those three little words that mean so much--</ThemedText>
<ThemedText>"You're not fat""</ThemedText>
<ThemedText>Hello Christopher,</ThemedText>
<ThemedText>Before you know it you might need a dresser to hold all the reading material I send you. I bought this card to send when I cheated on that diet I was supposed to be on. Surprise surprise I had a piece of cake today, Mom made another cake. This one she said was for Mr. Callahan our accountant who was coming over. X-cuses xcuses, I figure I will commence my diet tomorrow. How are you? I probably haven't spoken to you for a while by the time you get this. I love you</ThemedText>
<ThemedText>My pen is losing ink or maybe its fading because I'm writing this on my comforter.</ThemedText>
<ThemedText>You are my sunshine</ThemedText>
<ThemedText>my only sunshine</ThemedText>
<ThemedText>you make me happee</ThemedText>
<ThemedText>when skies are gray</ThemedText>
<ThemedText>You'll never know deer</ThemedText>
<ThemedText>how much I love you.</ThemedText>
<ThemedText>This land was made for you and me</ThemedText>
<ThemedText>(I think this verse is from a differnt song w/ the same melody, something like the Clementine song and Found a Peanut)</ThemedText>
<ThemedText>I love you again my sweet prince and virile hunk</ThemedText>
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
      require("@/assets/songs/evergreen.aac")     );
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
      <Button title="Song: Evergreen by Barbara Streisand" onPress={play1} />
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
    height: 450,
    width: 400,
    top: 0,
    left: 0,
    bottom: 20,
    marginTop: 0,
    marginBottom: 30,
    position: 'absolute',
  },
});
