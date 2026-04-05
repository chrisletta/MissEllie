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
      headerHeight={530}
      headerImage={
      <Image
          source={require('@/assets/images/gorgeous.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sweet Patooty
        </ThemedText>
      </ThemedView>

<ThemedText>Ahh, Mon Cher Fleur D'Hinver,</ThemedText>
<ThemedText>Comment est ceque je vous amie?</ThemedText>
<ThemedText>Vous etes les soliel de mon vie</ThemedText>
<ThemedText>Chacque jour je attendre</ThemedText>
<ThemedText>voir votra bell visage! </ThemedText>
<ThemedText>💕💕💕💕💕💕</ThemedText>
<ThemedText>(And now for something totally different: </ThemedText>
<ThemedText>pure, honest prose) </ThemedText>
<ThemedText>Even though we've been going out for over a year, even though we've lived together for over a week, even though we talk to each other almost every day, I still feel amazed that I'm with you. I find myself falling in love with you over and over again.</ThemedText>
<ThemedText>It's a feeling that gets deeper each time I feel it. </ThemedText>
<ThemedText>Te adoro. Te necessito. Te quiero.</ThemedText>
<ThemedText>I love you. I need you. I want you.</ThemedText>
<ThemedText>Love always,</ThemedText>
<ThemedText>Christopher</ThemedText>
<ThemedText>P.S. Happy Valentine's Day</ThemedText>
<ThemedText>(Be mine?)</ThemedText>
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
      require("@/assets/songs/you_make_loving_fun.m4a")     );
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
      <Button title="Song: You Make Loving Fun by Fleetwood Mac" onPress={play1} />
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
    height: 550,
    width: 390,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
